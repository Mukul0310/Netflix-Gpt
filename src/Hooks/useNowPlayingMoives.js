import { useDispatch } from "react-redux";
import { FETCH_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      FETCH_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useNowPlayingMovies;
