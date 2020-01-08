import React from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import Films from './TMDB';
const films = Films.films;



function App() {
  return (
    <div className="film-library">
    <FilmListing films={films}/>

    <FilmDetails films={films}/>
    </div>
  );
}

export default App;
