import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMoives";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useActionMovies from "../Hooks/UseActionMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showgptSearch);
  //console.log(showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useActionMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* //Main Container
    Video Title 
    Video Background
Secondary Container
    Movies List *n 
    Movies *n 
     */}
    </div>
  );
};

export default Browse;
