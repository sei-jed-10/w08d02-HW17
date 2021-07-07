
import React, {Component} from 'react';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import FilmLRow from './FilmRow';
import TMDB from './TMDB'
import FilmRow from './FilmRow';


class App extends Component{


  render(){

    let allFilms = TMDB.films.map( (film) => (
      <FilmListing movies={film.title}/>
    ));
    let details = TMDB.films.map( (film) => (
      <FilmRow id={film.id} poster={film.poster_path} title={film.title} date={film.release_date}/>
      
    ));
    let back = TMDB.films.map( (film) => (
      <FilmDetails b={film.backdrop_path}/>
      
    ));

    return(
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {/* {allFilms} */}
          {details}
          
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          {/* {details} */}
          {back}

        </div>
      </div>
    )
  }
}

export default App;