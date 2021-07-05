import React from 'react';
 
import './App.css';
 
import FilmListing from './FilmListing';
import TMDB from './TMDB' ;
 



function App() {
  return (
    <div className="film-library">
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
  <h1><FilmListing films = {TMDB.films}></FilmListing></h1>
    </div>
  
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
    </div>
  </div>
  );
}

export default App;
