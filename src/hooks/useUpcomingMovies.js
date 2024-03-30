import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import {  addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies =  () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
      const json = await data.json();
    //   console.log(json)
      dispatch(addUpcomingMovies(json));
    }
    useEffect(()=>
    {getUpcomingMovies()
    },[]);
};
export default useUpcomingMovies;