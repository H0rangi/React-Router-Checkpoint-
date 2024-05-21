import React from "react";
import { useParams, Link } from "react-router-dom";

const DescriptionPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="description-page">
      <h1>{movie.title}</h1>
      <img src={movie.ph} alt={movie.title} className="movie-poster" />
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default DescriptionPage;
