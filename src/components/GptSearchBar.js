import React, { useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

function GptSearchBar() {
  const dispatch = useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value)
    // make api call to openai
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies " +
      searchText.current.value +
      " Please give me the names of 5 movies,comma seperated like the example result given ahead. Example Result: Sholay,Don,Veer-zara,Iron-Man,Black-Panther";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
    }
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const  data = gptMovies.map(movie=>searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(data);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="grid grid-cols-12 bg-black w-full md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          id="search-bar"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-600 m-4 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
