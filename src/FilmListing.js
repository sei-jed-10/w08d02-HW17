import React , {Component} from 'react' ;
 
import FilmRow from './FilmRow' ;
 


class FilmListing extends Component {
    handleFilterClick(filter){
        console.log("Setting filter to " + filter)

    }
    render(){
//   const  allFilm = this.state.film.map(x=>x.title)
// let allFilms = this.props.films.map (film =>(film.title))
 
 var m =0
        return(
            <div>
                <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter" onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>
 
</div>
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