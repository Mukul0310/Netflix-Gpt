import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  //console.log(movie);
  return (
    <div className="px-4 pt-4">
      <h1 className="text-3xl py-3 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex">
          {movie?.map((film) => (
            <MovieCard key={film.id} Posterpath={film.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
