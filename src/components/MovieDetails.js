import React, { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'



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
                console.log(data);
                setResult(data);

            } catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [id])


    return (
        <Container className='MovieDetails'>
            <Row>
                <Col >
                    <Image className='posterDetails' src={result.Poster} alt="poster" />
                </Col>
                <Col className='details'>
                    <h3 className='titleDetails'>{result.Title}</h3>
                    <p className='genre'><strong>{result.Genre}</strong></p>
                    <p><strong>IMDB Rating: </strong><span role='img'>⭐</span>{result.imdbRating}/10</p>
                    <p className='actors'><strong>Actors: </strong>{result.Actors}</p>
                    <p><strong>Director: </strong>{result.Director}, <strong>Writer: </strong>{result.Writer}</p>
                    <p>{result.Plot}</p>
                    {result.totalSeasons? <p className='seasons'><strong>Seasons: </strong>{result.totalSeasons}</p>: null}
                    {result.totalSeasons ?
                    <p className='duration'><strong>Duration: </strong>{result.Runtime}/episode</p>:
                    <p className='duration'><strong>Duration: </strong>{result.Runtime}</p>}
                    <p className='release'><strong>Release Date: </strong>{result.Released}</p>
                    <p>{result.Awards}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails;