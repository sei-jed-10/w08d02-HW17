

import React, { Component } from 'react';
import Fave from './Fave';


class FilmRow extends Component {
  render() {
      
    return (
        <div className="film-row">
        <img src={"https://image.tmdb.org/t/p/w780/".concat(this.props.poster)} alt="" />
      
        <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p>{this.props.date}</p>
          <Fave /> 
        </div>
      </div>
    )
  }
}

export default FilmRow;