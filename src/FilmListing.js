import React, { Component } from 'react';

class FilmListing extends Component {
  render() {
    return (
    <h1>{this.props.movies}</h1>
    )
  }
}

export default FilmListing;