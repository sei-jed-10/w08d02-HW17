import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film) => (
                            <FilmRow film={film} />
                        ))
        return (
            <div>
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}
