import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import {  addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies =  () => {
    const dispatch = useDispatch()
    const PopularMovies = useSelector((store) => store.PopularMovies);
    const getPopularMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
      const json = await data.json();
    //   console.log(json)
      dispatch(addPopularMovies(json));
    }
    useEffect(()=>
    {!PopularMovies && getPopularMovies()
    },[]);
};
export default usePopularMovies;