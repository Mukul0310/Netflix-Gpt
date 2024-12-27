import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackgroud = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const trailer = useSelector((store) => store.movies.movieTrailer);

  return (
    <div className="w-screen ">
      <iframe
        //We can use useState for movie_id but we are using redux so we will fetch from redux store
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackgroud;
