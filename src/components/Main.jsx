import React, { useState, useEffect } from "react";
import requests from "../Api";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log(movie);

 const truecateString = (str, num) => {
    if(str?.length > num){
        return str.slice(0, num) + "..."
    } else {
         return str;
    }
 }

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black via-transparent to-black"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-violet-600 py-2 px-5 rounded cursor-pointer text-white">
              Смотреть
            </button>
            <button className="border text-white border-violet-300 py-2 px-5 ml-4">
              Посмотреть позже
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Дата выхода: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-sm">
            {truecateString(movie?.overview, 120)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
