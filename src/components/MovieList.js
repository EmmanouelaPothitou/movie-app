import React from 'react';

function MovieList({ movies, onSelect }) {
    return (
        <div className="movie-list">
            {movies.filter(movie => movie.Poster).map(movie => {
                return <button className="card" key={movie.imdbID}
                    onClick={() => onSelect(movie.imdbID)}>
                    <img className="poster" src={movie.Poster} alt="Poster" />
                    <div className="details">
                        <h3 className="title">{movie.Title}</h3>
                        <p>Realese Date: {movie.Year}</p>
                    </div>

                </button>
            })}
        </div>
    )
}

export default MovieList;