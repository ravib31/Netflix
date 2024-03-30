import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-40 pl-12 relative z-20">
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
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
