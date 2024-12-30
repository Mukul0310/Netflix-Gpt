import React from "react";
import { POSTER_PATH } from "../Utils/constants";

const MovieCard = ({ Posterpath }) => {
  return (
    <div className="w-40 pr-2">
      <img alt="Movie Poster" src={POSTER_PATH + Posterpath} />
    </div>
  );
};

export default MovieCard;
