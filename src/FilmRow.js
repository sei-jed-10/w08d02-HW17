

import React, { Component } from 'react';
import Fave from './Fave';


class FilmRow extends Component {
  
  handleDetailsClick = (film) => {
    console.log('Fetching details for '+ film)
    }

  render() {
       let d = new Date(this.props.date)
    return (
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.title)}>
        <img src={"https://image.tmdb.org/t/p/w780/".concat(this.props.poster)} alt="" />
      
        <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p>{d.getFullYear()}</p>
          <Fave /> 
        </div>
      </div>
    )
  }
}

export default FilmRow;