import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <Link to="/" className="back-link">Back to Home</Link>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Type: {movie.type}</p>
      <p>Rating: {movie.rating}</p>
      <p>Duration: {movie.time}</p>
      <div className="trailer">
        <h3>Trailer</h3>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={movie.title}
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
