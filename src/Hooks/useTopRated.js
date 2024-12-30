import { useDispatch } from "react-redux";
import { FETCH_OPTIONS } from "../Utils/constants";
import { addTopRated } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      FETCH_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useTopRated;
