import React, {Component} from 'react';
import FilmRow from './FilmRow'

class FilmDetails extends Component {

    render(){
        const allFilms = this.props.films.map((film) => (
            <FilmRow film={film} />
        ))
        return(
            <div className="film-details">
           
              <h1 className="section-title">DETAILS</h1>
            {allFilms[1].overview}
              </div>
        )
    }
}



export default FilmDetails;