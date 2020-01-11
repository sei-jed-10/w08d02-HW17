import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default function FilmRow(props) {

    return (
        <div className="film-row" >
            {/* pass the value of the film poster to FilmPoster component which will take care of rendering the poster */}
            <FilmPoster poster={props.poster} />
            {/* add onDetailsToggle() method passed through FilmListing Component to onClick event */}
            <div className="film-summary" onClick={() => props.onDetailsToggle(props)}>
                <h1>{props.filmTitle}</h1>
                <p>{props.year}</p>
            </div>
            {/* pass onFaveToggle() as props to the Fave component along with the state (as props) of whether the film is among the list of favorite films */}
            <Fave onFaveToggle={() => props.onFaveToggle(props)}
            isFave={props.isFave} />

        </div>
    )
}
