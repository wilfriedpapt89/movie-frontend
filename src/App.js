import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fectMoviesHandler() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8088/films/1");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const transformedMovies = [
        {
          id: data.id,
          title: data.title,
          openingText: data.openingText,
          releaseDate: data.releaseDate,
        },
      ];
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }
  let content = <p>No movies</p>;
  if (error) content = <p>{error}</p>;
  else if (isLoading) content = <p>Fetching data ...</p>;
  else if (movies.length !== 0) content = <MoviesList movies={movies} />;

  return (
    <React.Fragment>
      <section>
        <button onClick={fectMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
