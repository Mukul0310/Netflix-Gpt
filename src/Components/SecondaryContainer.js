import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-10">
          <MovieList title={"Now Playing"} movie={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movie={movies.popularMovies} />
          <MovieList title={"Top Rated"} movie={movies.topRatedMovies} />
          <MovieList title={"Action"} movie={movies.actionMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
