import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
import FilmDetails from './FilmDetails';

class FilmRow extends Component {

    // handleDetailsClick(film) {
    //     console.log("Fetching details for "+film.filmTitle)
    // }

    render() {

        return (
            <div className="film-row">
                <FilmPoster poster={this.props.poster} />
                <div className="film-summary">
                {/* <div onClick={()=>this.handleDetailsClick(this.props)} className="film-summary"> //old line */}

                    <h1>{this.props.filmTitle}</h1>
                    <p>{this.props.year}</p>
                </div>
                <Fave onFaveToggle={() => this.props.onFaveToggle(this.props)}
                isFave={this.props.isFave}
                    onDetailsToggle={()=>this.props.onDetailsToggle(this.props)}/>
            </div>
        )
    }

}
export default FilmRow;