import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'all', //filter decides which one of the two lists of films (all, favorite) should be displayed. 
            chosenList: this.props.films //chosen list to be displayed. Again, determined by the previously defined state 'filter'
        }
    }

    handleFilterClick(filter) {
        console.log("Setting filter to " + filter)

        //a variable to hold the value of the list to be displayed, based on the filter value passed to the method through on click event.
        var display = '' 
        if (filter == 'fave') {
            display = this.props.faves
        }
        else {
            display = this.props.films
        }

        //Update the states of the filter and the list, as a handle to the event of clicking on the filter name.
        this.setState({
            filter: filter,
            chosenList: display
        })

    }

    render() {
        console.log(this.props.films)
        //Use a map function to display each film in a row using FilmRow component.

        let allFilms = (this.state.chosenList).map((film, index) => (

            <FilmRow key={index}
                filmTitle={film.title}
                year={(new Date(film.release_date)).getFullYear()} //Used the method .getFullYear() to get the year only out of the full date.
                poster={film.poster_path}
                key={film.id}
                onFaveToggle={() => this.props.onFaveToggle(film)} //Pass onFaveToggle() method already passed from App.js to the film row.
                isFave={(this.props.faves).includes(film)} //Pass a boolean value of wether or not this film is already in favorite films list.
                onDetailsToggle={() => this.props.onDetailsToggle(film)}/> //Pass onDetailsToggle() method existing in App.js to the film row.
                //to handle changing the film details section of the page to the details of the film exsiting in that row.
        ));

        return (
            //I removed the class film-list" from the first div because it was adding extra space
            // before the list of film rows
            <div>
                <h1 className="section-title"></h1>
                
                {/* //Handling filter clicks, switching between the list of all films and the list of favorite films */}
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
            <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'fave' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('fave')}>
                        FAVES
            {/* //Update the hard-coded counter to a dynamic one using the length of favorite films, which keeps updating */}
            <span className="section-count">{(this.props.faves).length}</span>
                    </div>
                </div>
                {/* //render the list of all film rows */}
                        {allFilms} 
            </div>
        )
    }
}
export default FilmListing;