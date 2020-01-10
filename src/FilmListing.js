import React, { Component } from 'react';
import FilmRow from './FilmRow';


class FilmListing extends Component {
    constructor(props){
        super(props)
        this.state={
            filter: 'all',
           // isFave: false I added this idk why
           chosenList:this.props.films
        }
    }

    handleFilterClick(filter) {
        console.log("Setting filter to " + filter)

        var display=''
        if (filter=='fave'){
            display=this.props.faves
        }
        else{
            display=this.props.films
        }

        this.setState({
            filter: filter,
            chosenList: display
        })

    }

    render() {
        console.log(this.props.films)
        let allFilms = (this.state.chosenList).map((film, index) => (

            <FilmRow key={index} 
                filmTitle={film.title}
                year={(new Date(film.release_date)).getFullYear()}
                poster={film.poster_path}
                key={film.id}
                onFaveToggle={() => this.props.onFaveToggle(film)}
                isFave={(this.props.faves).includes(film)}
                 onDetailsToggle={()=>this.handleDetailsClick(film)}

               ></FilmRow>

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
            <span className="section-count">{(this.props.faves).length}</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
    }
}
export default FilmListing;