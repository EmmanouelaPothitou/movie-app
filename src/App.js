import React from 'react';
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox.js';
import MovieDetails from './components/MovieDetails.js';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState();

  const searchMovies = async (query) => {
    console.log("will search for", query)
    const url = new URL(`http://www.omdbapi.com/`)
    const params = {
      "apikey": "a20a37c4",
      "s": query,
      "plot": "full"
    }
    url.search = new URLSearchParams(params).toString()
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.Search);
      setSelected(null);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <SearchBox onSearch={(q) => searchMovies(q)} />

      <div>
        {selected && <MovieDetails id={selected} />}
        {<MovieList movies={movies} onSelect={(id) => setSelected(id)} />}

      </div>
    </div>
  );
}


export default App;
