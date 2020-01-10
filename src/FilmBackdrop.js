import React, {Component} from 'react';

class FilmBackdrop extends Component{

    render(){
        console.log("now in backdrop")
        let posterURl="https://image.tmdb.org/t/p/w1280/"+this.props.poster;

        return(         
            <img src={posterURl} alt="" />
        )
    }

}

export default FilmBackdrop;