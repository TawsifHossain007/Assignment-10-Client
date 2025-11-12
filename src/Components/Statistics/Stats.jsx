import axios from "axios";
import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

const Stats = () => {
  const [stats, setStats] = useState([]);

  axios
    .get("http://localhost:3000/movies")
    .then((res) => {
      const data = res.data;
      setStats(data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className=" flex items-center justify-center gap-5">
        <div>
          <h1 className="p-10 bg-gradient-to-br from-[#E50914] via-[#F97316] to-[#FACC15] rounded-2xl text-white py-20 font-semibold text-5xl">
            Total Movies: {stats.length}
          </h1>
        </div>
        <div>
          <h1 className="p-10 bg-gradient-to-br from-[#FACC15] via-[#F97316] to-[#E50914] rounded-2xl text-white py-20 font-semibold text-5xl">
            Total Users: {stats.length}
          </h1>
        </div>
      </div>

      {/* Top Rated Movies */}
      <div className=" mt-15">
        <h1 className="text-center font-bold text-7xl">Top-Rated Movies</h1>
        <p className="text-center font-normal text-xl mt-5">Discover the finest films that have captivated audiences and critics alike. These top-rated movies stand out for their compelling storytelling, exceptional performances, and unforgettable cinematic experiences. Each film on this list represents the very best in creativity and craftsmanship — a must-watch for every movie lover.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            {stats.sort((a,b)=>b.rating-a.rating).slice(0,3).map((movie) => (
        <MovieCard movie={movie}></MovieCard>
      ))}
        </div>
      </div>
        
      
    </div>
  );
};

export default Stats;
