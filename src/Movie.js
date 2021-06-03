import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({title, year, summary, poster, genres}){
    return (
        <div className ="movie">
        <img src ={poster} alt ={title} title = {title}/>
    <div className ="movie__data">
        <h3 className ="movie__title">{title}</h3>
        <h5 className ="movie__year">{year}</h5>
        <ul className ="movie__genres">
            {genres.map((genre, index) =>(
              <li key ={index} className ="genres__genre">{genre}</li>
                ))} 
        </ul>
        <p className ="movie__summary">{summary.slice(0,180)}...</p>
    </div>
    </div>
    ); // map에는 유일한 key값이 필요하므로 내장되어있는 args인 index 를 쓴다. 
}
// JSX에서는 class라고 쓰지않고 className
// function component의 인자로 props의 특정값만 가져올때는 항상 {}을 감싸주자. 
 Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
} 
// https://yts.mx/api/v2/list_movies.json 참고 

export default Movie;