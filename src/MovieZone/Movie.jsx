import React, { useState } from "react";
import { movieData } from "./data.js";

const Movie = () => {
  const [movieList, setMovieList] = useState(movieData);

  const filterByCategory = (cat) => {
    setMovieList(movieData.filter((data) => data.category == cat));
  };
  return (
    <>
      <div className="bg-black min-h-screen text-white ">
        <div className="w-[80%] h-20  p-2 m-auto flex items-center justify-center gap-6">
          <button
            onClick={() => setMovieList(movieData)}
            className="border p-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded active:scale-95"
          >
            All
          </button>
          <button
            onClick={() => filterByCategory("Action")}
            className="border p-1 border-gray-600 text-gray-600  hover:bg-gray-600 hover:text-white font-semibold rounded active:scale-95"
          >
            Action
          </button>
          <button
            onClick={() => filterByCategory("Thriller")}
            className="border p-1 border-green-600 text-green-600  hover:bg-green-600 hover:text-white font-semibold rounded active:scale-95"
          >
            Thriller
          </button>
          <button
            onClick={() => filterByCategory("Animation")}
            className="border p-1 border-red-500 text-red-500 hover:bg-red-600 hover:text-white  font-semibold rounded active:scale-95"
          >
            Animation
          </button>
          <button
            onClick={() => filterByCategory("Horror")}
            className="border p-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold rounded active:scale-95"
          >
            Horror
          </button>
          <button
            onClick={() => filterByCategory("Drama")}
            className="border p-1 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold rounded active:scale-95"
          >
            Drama
          </button>
          <button
            onClick={() => filterByCategory("Sci-Fi")}
            className="border p-1 border-whote text-white hover:bg-white hover:text-black font-semibold rounded active:scale-95"
          >
            Sci-Fi
          </button>
        </div>

        <div className="w-[85%] flex  justify-center flex-wrap gap-8 text-center m-auto ">
          {movieList.map((data) => (
            <div className="max-w-48" key={data.id}>
              <div className=" w-50 overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-shadow p-2">
                <img
                  className="w-48 border-2  mt-2 border-yellow-200 rounded-md  transition-transform duration-200 hover:scale-105 cursor-pointer "
                  src={data.poster_path}
                  alt=""
                />
                <h3 className=" font-semibold mt-2">{data.title}</h3>
                <p className="text-xs ">{data.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
