import React, {Component} from 'react';
//import films from './TMDB';
import './App.css';

class FilmListing extends Component {
    render(){
        return(
          <div>
              <h1>{this.props.film.title}</h1>
              <img src={this.props.film.poster_path}/>
              <img src={this.props.film.backdrop_path}/>
              <h3>{this.props.film.overview}</h3>
              <h3>{this.props.film.release_date}</h3>
          </div>
        )
      }
}
export  default FilmListing;