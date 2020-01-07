import React, { Component } from 'react';
import App from './App';

class FilmListing extends Component {
  render() {
    return (
    // <h1>{this.props.movies}</h1>
    <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {this.allFilms}
</div>
    )
  }

  

   handleFilterClick = (filter) => {
    console.log('Setting filter to'+{filter})
    }



}

export default FilmListing;