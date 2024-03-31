import React from "react";
import { BG_IMAGE } from "../utils/Constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-screen h-screen object-cover" src={BG_IMAGE} alt="background" />
        </div>
        <div className="" >
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
