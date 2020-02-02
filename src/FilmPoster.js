
import React from 'react';

export default function FilmPoster(props) {

    let posterURl = "https://image.tmdb.org/t/p/w780" + props.poster;

    return (
        <img className={props.class} src={posterURl} alt="" />
    )

}

