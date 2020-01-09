
import React, {Component} from 'react';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import FilmRow from './FilmRow';
import TMDB from './TMDB'


class App extends Component{

  render(){

    let back = TMDB.films.map( (film) => (
      <FilmDetails b={film.backdrop_path}/>));

    return(
      
      <div className="film-library">
        
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
           <FilmListing />      
        </div>
         <div className="film-details">
           <h1 className="section-title">DETAILS</h1>
           {back}
        </div>
    
      </div>
    )
  }
}

export default App;