import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmList from './components/FilmList'
import FilmDetails from './components/FilmDetails'
import Films from './TMDB'

const films = Films.films

function App() {
  return (
    <div className="App">
      <div className="film-library">
      <FilmList films={films}/>
       
        
      <FilmDetails films={films}/>


      </div>
    </div>
  );
}

export default App;
