import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

    handleDetailsClick(film) {
        console.log("Fetching details for "+film.filmTitle)
    }

    render() {

        console.log(this.props.filmTitle)
        console.log(this.props.year)

        return (
            <div className="film-row">
                <FilmPoster poster={this.props.poster} />
                <div onClick={()=>this.handleDetailsClick(this.props)} className="film-summary">
                    <h1>{this.props.filmTitle}</h1>
                    <p>{this.props.year}</p>
                </div>
                <Fave></Fave>
            </div>
        )
    }

}
export default FilmRow;