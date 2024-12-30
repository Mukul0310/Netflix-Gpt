import { useDispatch } from "react-redux";
import { API_KEY } from "../Utils/constants";
import { addActionMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useActionMovies = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&with_genres=28"
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addActionMovies(json.results));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useActionMovies;
