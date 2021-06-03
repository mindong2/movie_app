import React from 'react';
import './App.css';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies= async() => {
    const {
      data: {
        data:{ movies }
      } 
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
    //json 뒤의 ?sort_by=rating은 사이트에 있다. rating순으로 sort
    //axios 는 fetch의 일부같은 것. npm i axios 
    this.setState({ movies, isLoading: false}); // 앞은 Arr.movies: axios.data.data.movies
  } // axios가 끝나길 기다렸다가 끝나면 setState() 실행 . async , await 

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className ="container">
      <div className="header">
        <span className ="header__title">Dongmin's Movie List</span>
      </div>
      {isLoading ? (
        <div className ="loader">
          <span className ="loader__text">Loading...</span>
        </div>
      )
      : (
        <div className ="movies">
        {movies.map(movie =>(
        <Movie 
        key = {movie.id} //props는 유일한 key를 가져야함. 
        id = {movie.id} 
        title = {movie.title}
        year = {movie.year} 
        summary = {movie.summary}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
        />
      ))}
      </div>
      )}
    </section>
      );
  }
} 
export default App;

