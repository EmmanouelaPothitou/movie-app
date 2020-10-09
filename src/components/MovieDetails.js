import React, { useEffect } from 'react';
import { useState } from 'react';



function MovieDetails({ id }) {
    console.log("movie details id is", id)
    const [result, setResult] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            const url = new URL(`http://www.omdbapi.com/`)
            const params = {
                "apikey": "a20a37c4",
                "i": id,
                "plot": "full"
            }
            url.search = new URLSearchParams(params).toString()
        
            try {
                const res = await fetch(url);
                const data = await res.json();
                setResult(data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [id])

    
    return (
        <div>
            <img src={result.Poster} alt="poster" />
            <h3>{result.Title}</h3>
            <p>{result.Genre}</p>
            <p>IMDB Rating:{result.imdbRating}</p>
            <p>Actors: {result.Actors}</p>
            <p>{result.Director},{result.Writer}</p>
            <p>{result.Plot}</p>
            <p>{result.Runtime}</p>
            <p>{result.Released}</p>
            <p>{result.Awards}</p>
        </div>
    )
}

export default MovieDetails;