import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fectMoviesHandler() {
    const response = await fetch("http://localhost:8088/films/1");
    const data = response.json();
    const transformedMovies = [
      {
        id: data.id,
        title: data.title,
        openingText: data.openingText,
        releaseDate: data.releaseDate,
      },
    ];
    setMovies(transformedMovies);
  }

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
