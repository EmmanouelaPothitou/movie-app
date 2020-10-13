import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function MovieList({ movies, onSelect }) {
    if (movies.Error) {
        return (<p className='error'>{movies.Error}</p>)
    }
    const movieList = movies.filter(movie => (movie.Poster && movie.Poster!=="N/A")).map(movie => {
        return <Col xs={12} sm={4} md={3} lg={2} key={movie.imdbID} 
                onClick={() => onSelect(movie.imdbID)}>
                <Image className="poster" src={movie.Poster} fluid alt="Poster" />
                <div className="title-year">
                    <h3 className="title">{movie.Title}</h3>
                    <p className="year" >Release Date: {movie.Year}</p>
                </div>
            </Col>
    })

    return (
        <Container>
            <Row>
                {movieList}
            </Row>
        </Container>
    )
}

export default MovieList;