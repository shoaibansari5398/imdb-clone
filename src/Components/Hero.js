import React, { useState, useEffect } from "react";
import axios from "axios";

function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(function () {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=1"
      )
      .then((res) => {
        setMovie(res.data.results[0]);
      });
  }, []);

  return (
    <div>
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] bg-cover md:h-[60vh] bg-center bg-no-repeat flex flex-col-reverse justify-between`}
      >
        <div className="h-1/5 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-3xl">
          <div className="text-2xl text-white font-bold ">{movie.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
