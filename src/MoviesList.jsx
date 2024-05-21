import React from "react";
import { Link } from "react-router-dom";
import "./MoviesList.css";

const MoviesList = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
          <div className="movie-card">
            <img src={movie.ph} alt={movie.title} className="movie-poster" />
            <h2>
              {movie.title} ({movie.date})
            </h2>
            <p>{movie.description}</p>
            <p>Type: {movie.type}</p>
            <p>
              Rating: {movie.rating} | Duration: {movie.time}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
