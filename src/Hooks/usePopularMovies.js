import { useDispatch } from "react-redux";
import { FETCH_OPTIONS } from "../Utils/constants";
import { addPolularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      FETCH_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addPolularMovies(json.results));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default usePopularMovies;
