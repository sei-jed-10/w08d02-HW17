import React, { Component } from 'react';
import FilmBackdrop from './FilmBackdrop'
import FilmPoster from './FilmPoster';

class FilmDetails extends Component {

    render() {
        return (
            <div className="film-detail is-hydrated">
                <div className="film-backdrop">
                    <figure className="film-backdrop">
                        <FilmBackdrop poster={this.props.current.backdrop_path} />
                        <h1 className="film-title">{this.props.current.title}</h1>
                        </figure>
                         {/* <img src={"https://image.tmdb.org/t/p/w1280/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg"} ></img> */}
                    <div className="film-meta">
                       <p>{this.props.current.overview}</p>
                       <div className="film-detail-poster">
                       <FilmPoster poster={this.props.current.poster_path}/>
                       </div>
                    </div>
                  
                </div>
            </div>
        )
    }

}

export default FilmDetails;