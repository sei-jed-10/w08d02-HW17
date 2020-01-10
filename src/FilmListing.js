import React, { Component } from 'react';
import FilmRow from './FilmRow';


class FilmListing extends Component {
    constructor(props){
        super(props)
        this.state={
            filter: 'all',
           // isFave: false I added this idk why
        }
    }

    handleFilterClick(filter) {
        console.log("Setting filter to " + this.state.filter)
        this.setState({
            filter: filter
        })
    }

    render() {
        console.log(this.props.films)
        let allFilms = (this.props.films).map((film, index) => (

            <FilmRow key={index}filmTitle={film.title}
                year={(new Date(film.release_date)).getFullYear()}
                poster={film.poster_path}
                key={film.id}
                onFaveToggle={() => this.props.onFaveToggle(film)}
                isFave={(this.props.faves).includes(film)}></FilmRow>

        ));

        return (
            // edited the following two lines
            <div className="film-lists">
                <h1 className="section-title"></h1> 
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
            <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'fave' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('fave')}>
                        FAVES
            <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
    }
}
export default FilmListing;