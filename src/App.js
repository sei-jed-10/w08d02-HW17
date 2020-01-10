import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      films: TMDB.films,
      faves: [],
      current: TMDB.films[3]
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)


  }

  handleFaveToggle(film) { //film will be passed to it.
    const faves=(this.state.faves).slice()
    const filmIndex=faves.indexOf(film)

    if (filmIndex===-1){
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

  handleDetailsClick(film) {
    console.log("Fetching details for "+film.title)
    this.setState({current: film})
}

  render() {

    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing films={this.state.films}
           faves={this.state.faves}
            onFaveToggle={(e)=>this.handleFaveToggle(e)}
              onDetailsToggle={(e)=>this.handleDetailsClick(e)}
            
             />





        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails films={this.state.films}
           current={this.state.current}
            />
        </div>
      </div>
    )
  }

}

export default App;