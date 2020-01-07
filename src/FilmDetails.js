import React, { Component } from 'react';

class FilmDetails extends Component {
  render() {
    return (
    <div>
        <img src={"https://image.tmdb.org/t/p/w780/".concat(this.props.b)} alt="" />
    </div>
    )
  }
}

export default FilmDetails;
