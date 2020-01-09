import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmRow';
import TMDB from './TMDB';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)

  }

  handleFaveToggle(film) { //film will be passed to it.
    const faves=(this.state.faves).slice()
    const filmIndex=faves.indexOf(film)

    if (filmIndex!=-1){
      console.log("Adding "+film.title+" to faves")
      faves.push(film)
    }
    else{
      console.log("Removing "+film.title+" from faves")
      faves.splice(filmIndex,1)
    }
    //need to update the array with the new film object and then set the faves state back to this one.
    this.setState({faves})


  }

  render() {

    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle(film)} />
          <FilmDetails films={this.state.films} current={this.state.current} />


        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    )
  }

}

export default App;