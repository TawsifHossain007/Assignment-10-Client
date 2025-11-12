import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className=" card bg-base-100 shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <figure>
        <img src={movie.posterUrl} alt={movie.title} className="w-full h-72 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.genre} • {movie.releaseYear}</p>
        <p className="text-sm mt-2"><span className="font-semibold">Director:</span> {movie.director}</p>
        <p className="text-sm"><span className="font-semibold">Cast:</span> {movie.cast}</p>
        <p className="text-sm mt-2 line-clamp-3">{movie.plotSummary}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-yellow-500">⭐ {movie.rating}</span>
          <span className="text-sm text-gray-400">{movie.duration} min</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;