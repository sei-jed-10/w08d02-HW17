import React from 'react';
import FilmBackdrop from './FilmBackdrop'
import FilmPoster from './FilmPoster';

export default function FilmDetails(props) {

    return (
        <div className="film-detail is-hydrated">
            <div className="film-backdrop">
                <figure className="film-backdrop">
                    <FilmBackdrop poster={props.current.backdrop_path} />
                    <h1 className="film-title">{props.current.title}</h1>
                </figure>
                <div className="film-meta">
                    <p className="film-detail-overview">
                        <FilmPoster class={"film-detail-poster"} poster={props.current.poster_path} />
                        {props.current.overview}
                    </p>
                </div>

            </div>
        </div>
    )
}

