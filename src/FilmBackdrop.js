import React from 'react';

export default function FilmBackdrop(props) {

    let posterURl = "https://image.tmdb.org/t/p/w1280/" + props.poster;

    return (
        <img src={posterURl} alt= "" />
    )
}

