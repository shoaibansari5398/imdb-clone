import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "./Pagination";

function Content() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);

  function nextPage() {
    setPage(page + 1);
  }
  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  let add = (movie) => {
    let newArray = [...favourites, movie];
    setFavourites([...newArray]);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };
  let del = (movie) => {
    let newArray = favourites.filter((m) => m.id != movie.id);
    setFavourites([...newArray]);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };

  useEffect(
    function () {
      let oldArray = localStorage.getItem("imdb");
      oldArray = JSON.parse(oldArray) || [];
      setFavourites([...oldArray]);
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=${page}`
        )
        .then((res) => {
          setMovies(res.data.results);
        });
    },
    [page]
  );

  // let filteredMovies = [];

  // filteredMovies =
  //   curGenre == "All Genres"
  //     ? favourites
  //     : favourites.filter((movie) => genreids[movie.genre_ids[0]] == curGenre);

  // if (rating == 1) {
  //   filteredMovies = filteredMovies.sort(function (objA, objB) {
  //     return objA.vote_average - objB.vote_average;
  //   });
  // } else if (rating == -1) {
  //   filteredMovies = filteredMovies.sort(function (objA, objB) {
  //     return objA.vote_average - objB.vote_average;
  //   });
  // }

  return (
    <>
      <div className="mt-8 max-w-[100vw]">
        <div className="flex items-center justify-center font-bold mt-8 text-2xl">
          Trending Movies
        </div>
        {movies.length == 0 ? (
          <div className="flex justify-center mt-2">
            <Oval heigth="100" width="100" color="grey" ariaLabel="loading" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {movies.map((movie) => (
              <div
                class={`shadow w-[150px] h-[25vh] md:w-[300px] md:h-[35vh] bg-gray-500 rounded-3xl m-4 relative bg-[url(https://image.tmdb.org/t/p/w500//${movie.backdrop_path})] bg-center hover:scale-110 ease-out duration-300 relative`}
                onMouseEnter={() => {
                  setHover(movie.id);
                }}
                onMouseLeave={() => {
                  setHover("");
                }}
              >
                {hover == movie.id && (
                  <>
                    {!favourites.find((m) => m.id == movie.id) ? (
                      <div
                        className="absolute top-2 right-2 p-2 bg-gray-900 rounded-xl text-xl cursor-pointer"
                        onClick={() => add(movie)}
                      >
                        😍
                      </div>
                    ) : (
                      <div
                        className="absolute top-2 right-2 p-2 bg-gray-900 rounded-xl text-xl cursor-pointer"
                        onClick={() => del(movie)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    )}
                  </>
                )}
                <div class="absolute bg-gray-900 h-[40px] bottom-0 w-full text-white flex justify-center items-center font-bold rounded-b-xl text-xs md:text-xl">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} previousPage={previousPage} nextPage={nextPage} />
    </>
  );
}

export default Content;
