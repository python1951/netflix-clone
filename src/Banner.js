import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(requests.fetchTrending);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ],
      );

      return response;
    }
    getData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}>
      <div className='banner__contents'>
        <h1>{movie?.name || movie?.orignal_name || movie?.title}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
          <h5>{movie?.overview}</h5>
        </div>
        
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
}

export default Banner;
