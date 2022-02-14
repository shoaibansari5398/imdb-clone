import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar flex space-x-4 items-center text-blue-400 font-bold p-4 ml-4">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-14 md:w-14 h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
        </Link>
        <Link to="/" className="md:text-2xl ">
          Movies
        </Link>
        <Link to="favourites" className="md:text-2xl ">
          Favourites
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
