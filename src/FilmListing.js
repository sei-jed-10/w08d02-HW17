import React , {Component} from 'react' ;
 
import FilmRow from './FilmRow' ;
 


class FilmListing extends Component {
    // constructor(props){
    //     super()
    //     this.state = {
    //         film: props.films//[1,2,3]
    //     }
    // }

    render(){
//   const  allFilm = this.state.film.map(x=>x.title)
// let allFilms = this.props.films.map (film =>(film.title))
 
 var m =0
        return(
            <div>
            <h1>    
                {this.props.films.map((film) =>(
                <FilmRow title={film.title} poster={"https://image.tmdb.org/t/p/w780/" + film.poster_path} 
             curr={m = new Date(film.release_date)}      year={m.getFullYear()} key={film.id}></FilmRow>
           
                 ) )}
 </h1>
            </div>
        )  
    }
}

export default FilmListing ;