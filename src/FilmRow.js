import React ,{Component} from 'react' ;
import './index.css';
import FilmPoster from './FilmPoster';
import Fave from './Fave' ;



class FilmRow extends Component {

  handleDetailsClick(film){
    console.log("Fetching details for"+ film)
  }

    render(){
 

        return(
            <div className="film-row" onClick={()=>this.handleDetailsClick() } >
  <FilmPoster poster={this.props.poster}></FilmPoster>

  <div className="film-summary">
    <Fave></Fave>
    <h1>{this.props.title}</h1>
    <p>{this.props.year}</p>
  </div>
</div>
        )
    }
}

export default FilmRow ;