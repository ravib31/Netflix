import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-40 pl-4 md:pl-auto relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies?.nowPlayingMovies?.results}
          />
          <MovieList
            title={"Popular"}
            movies={movies?.PopularMovies?.results}
          />
          <MovieList
            title={"Upcoming"}
            movies={movies?.UpcomingMovies?.results}
          />
          <Footer/>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
