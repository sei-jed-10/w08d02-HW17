import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import films from './TMDB';

class App extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    let allFilms = this.props.films.map( (film, index) => (film={film}))
    return (
     // console.log(film={films}))
      <div className="film-library">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <FilmListing {allFilms}/>
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div>
    </div>
    );
  }
}

export default App;
