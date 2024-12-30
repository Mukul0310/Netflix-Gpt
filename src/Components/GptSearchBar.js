import React from "react";
import { BANNER } from "../Utils/constants";
import lang from "../Utils/languageconstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="absolute  -z-10">
        <img src={BANNER} alt="netflix-banner" />
      </div>

      <div className="pt-[10%]  flex justify-center ">
        <form className=" w-1/2 bg-black grid grid-cols-12 rounded-xl">
          <input
            className="p-4 mx-2 my-3 col-span-9 rounded-lg"
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="col-span-3 bg-red-700 text-white mx-2 my-3 py-2 px-4 rounded-lg">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
