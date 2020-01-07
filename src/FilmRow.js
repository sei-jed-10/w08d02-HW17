import React ,{Component} from 'react' ;
import './index.css';
import FilmPoster from './FilmPoster';



class FilmRow extends Component {

    

    render(){
 

        return(
            <div className="film-row" >
  <FilmPoster poster={this.props.poster}></FilmPoster>

  <div className="film-summary">
    <h1>{this.props.title}</h1>
    <p>{this.props.year}</p>
  </div>
</div>
        )
    }
}

export default FilmRow ;