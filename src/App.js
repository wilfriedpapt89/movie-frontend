import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fectMoviesHandler = () => {
    fetch("http://localhost:8080/films/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = [
          {
            id: data.id,
            title: data.title,
            openingText: data.openingText,
            releaseDate: data.releaseDate,
          },
        ];
        setMovies(transformedMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fectMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
