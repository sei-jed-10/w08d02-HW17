import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {


    render(){
        console.log(this.props.films) 

        let allFilms= (this.props.films).map((film,index)
        => (
            <FilmRow filmTitle={film.title}
            year={(new DataCue(film.date)).getFullYear()}
            poster={film.poster_path}
            key={film.id}></FilmRow>
        ));
        
  
        return(
            <div>
                {allFilms}
            </div>
        )
    }
}

export default FilmListing;