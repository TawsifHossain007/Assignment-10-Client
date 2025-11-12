import axios from 'axios';
import React, { useState } from 'react';
import MovieCard from '../Components/MovieCard/MovieCard';

const AllMovies = () => {
    const [movies,setMovies] = useState([])

    axios
    .get("http://localhost:3000/movies")
    .then((res) => {
      const data = res.data;
      setMovies(data);
    })
    .catch((err) => {
      console.log(err);
    });

    return (
        <div className='bg-base-100 min-h-screen w-11/12 mx-auto mt-20'>
            <h1 className="text-center font-bold text-7xl">The Movie Vault</h1>
            <p className="text-center font-normal text-xl mt-5">Step inside the ultimate cinematic library. From timeless classics to the newest releases, this page brings together every movie in our collection. Browse by genre, discover hidden gems, and enjoy the full spectrum of stories that MovieMaster Pro has to offer.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 mb-20'>
                {
                    movies.map(movie => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;