import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMoives";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
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
