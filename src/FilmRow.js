import React, {Component} from 'react';
import FilmPoster from './FilmPoster';


class FilmRow extends Component {
    render() { 
            console.log(this.props.filmTitle)
            console.log(this.props.year)

        return ( 
            <div className="film-row">
                <FilmPoster poster={this.props.film.poster_path} />
                <div className="film-summary">
                     <h1>{this.props.filmTitle}</h1>
                    <p>{this.props.year}</p>
                </div>
                </div> 
                    
           

         )
    }
}

export default FilmRow;