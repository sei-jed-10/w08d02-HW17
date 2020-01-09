import React, { Component } from 'react';
import App from './App';
import TMDB from './TMDB'
import FilmRow from './FilmRow';

class FilmListing extends Component {
    
    constructor(props){
        super(props)
        this.state={
              filter: 'all'   
        }
         this.handleFilterClick = this.handleFilterClick.bind(this)
    }


    handleFilterClick = (filter) => {
        console.log('Setting filter to '+ filter)
        this.setState ({filter: filter})
        }

  render() {

    let details = TMDB.films.map( (film) => (
        <FilmRow id={film.id} poster={film.poster_path} title={film.title} date={film.release_date}/>));

    return (

<div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{TMDB.films.length}</span>
        </div>
        <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {details}
</div>


    )
  }

}

export default FilmListing;