import { useDispatch } from "react-redux";
import { FETCH_OPTIONS } from "../Utils/constants";
import { addMovieTrailer } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      FETCH_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    const filterData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
    //console.log(trailer);
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
