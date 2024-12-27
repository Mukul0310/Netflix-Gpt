import React from "react";
//import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-60 px-8 text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="font-bold w-4/12">{overview}</p>
      <div className="mt-4">
        <button className="p-4 px-10 text-black bg-white  rounded-lg hover:bg-opacity-80">
          <div className="flex justify-between">
            <svg
              class="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>{" "}
            Play
          </div>
        </button>
        <button className="mx-2 p-4 px-10 text-white bg-gray-500 bg-opacity-50 rounded-lg">
          <div className="flex justify-between">
            <svg
              class="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
