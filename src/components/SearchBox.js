import React from 'react';
import { useState } from 'react';
import MovieDetails from './MovieDetails'


function SearchBox() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState();

    const searchMovies = async (e) => {
        e.preventDefault();
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

    const searchForm = (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Search</label>
            <input className="input"
                type="text"
                placeholder="Search a Movie.."
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button" type="submit" />
        </form>
    )

    const movieList = (
        <div className="movie-list">
        {movies.filter(movie => movie.Poster).map(movie => (
            <button className="card" key={movie.imdbID}
                onClick={() => setSelected(`${movie.imdbID}`)}>
                <img className="poster" src={movie.Poster} alt="Poster" />
                <div className="details">
                    <h3 className="title">{movie.Title}</h3>
                    <p>Realese Date: {movie.Year}</p>
                </div>

            </button>
        ))}
    </div>
    )


    return (
        <div>
            { searchForm }
            <div>
                {selected && <MovieDetails id={selected} /> }
                {movieList}
                {/* {!selected ? movieList : <MovieDetails id={selected} />} */}
            </div>
        </div>
    )
}


export default SearchBox;
