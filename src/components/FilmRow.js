import React, { Component } from 'react'
import FilmPoster from './FilmPoster'

export default class FilmRow extends Component {
    render() {
        const fullYear = new Date(this.props.film.release_date)
        return (
            <div className="film-row" key={this.props.film.id}>
                <FilmPoster poster={this.props.film.poster_path} />
                <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{fullYear.getFullYear()}</p>
                </div>
            </div>
        )
    }
}
