import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      films: TMDB.films, //set the films state property to the array of films in TMDB.js file.
      faves: [], //will be used to add and group favorite films.
      current: TMDB.films[0] //ss an initial state, set the current film to the first one on the list (to display details about it).
    }

    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle(film) { //film will be passed to it.
    const faves = (this.state.faves).slice() //make a copy of the current array of favorite films 'fave'
    const filmIndex = faves.indexOf(film) //check if the film already exists in the array of favorite films.

    if (filmIndex === -1) { //if the film does not exits in the array, push it to the 'faves' array we made above.
      console.log("Adding " + film.title + " to faves")
      faves.push(film)
    }
    else { //if the film already exists in the array, remove it from the list of favorites using Array.splice() method.
      console.log("Removing " + film.title + " from faves")
      faves.splice(filmIndex, 1)
    }
    this.setState({ faves }) //update the state of the array of favorites using the copy of the array we updated earlier.
  }

  handleDetailsClick(film) { //will be used to update the 'current' state
    console.log("Fetching details for " + film.title)
    this.setState({ current: film })
    //change the film details section to the film represented in the film row we just clicked on.
  }

  render() {

    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>

          {/* for Display the list of all films by rendering a FilmListing component and sending the states of: films list (films),
          favorite films list (faves) and both handleFaveToggle() and handleDetailsClick() methods as props to it, either to be used by it or to be passed 
          down to another component */}

          <FilmListing films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={(e) => this.handleFaveToggle(e)}
            onDetailsToggle={(e) => this.handleDetailsClick(e)} />
        </div>

        {/* for FilmDetails component, pass the state representing the list of films (films) and
        the state holding the value of the current film to display its details (current), as props to that component. */}

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails films={this.state.films}
            current={this.state.current} />
        </div>
      </div>
    )
  }
}
export default App;