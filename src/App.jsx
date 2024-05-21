import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MoviesList from "./MoviesList";
import DescriptionPage from "./DescriptionPage";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then(
        (data) => {
          setMovies(data.movies);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.rating.toString().includes(searchQuery)
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <div className="app">
        <h1>Movie Collection</h1>
        <input
          type="text"
          placeholder="Search by title or rating"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Routes>
          <Route path="/" element={<MoviesList movies={filteredMovies} />} />
          <Route path="/movie/:id" element={<DescriptionPage movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
