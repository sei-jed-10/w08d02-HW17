import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
    // console.log("this is my initilazier")

    // const movies = [
    //   {id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", title: "Bad Boys for Life", overview: "Bad Boys and Bad Boys II may both be Rotten, but they live in the hearts of many action fans as exemplary buddy-cop flicks, and both have Audience Scores of 78%. While original director Michael Bay is not coming back for Bad Boys for Life, producer Jerry Bruckheimer is overseeing the film, and we have confidence that directors Adil El Arbi and Bilall Fallah of Black and Gangsta will match his signature style and pace."},
    //   {id: 1, poster_src: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png", title: "Dolittle", overview: "After a pair of poorly received films starring Eddie Murphy, Robert Downey Jr. is ready to take up the mantle of Doctor Dolittle in a new screen adaptation directed by Stephen Gaghan (Gold, Syriana). This film will be based more on the second book by author Hugh Lofting, and it will co-star Antonio Banderas and Michael Sheen, with the voices of Tom Holland, Marion Cotillard, Selena Gomez, John Cena, Emma Thompson, and more."}
    // ]

    // var movieRows = []
    // movies.forEach(movie => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })
    // this.state = {rows: movieRows}


    this.performSearch("marvel")
  }

  performSearch(searchTerm){
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=622b722ba46687f088cf31094a98491f&language=en-US&page=1&include_adult=false&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key = {movie.id} movie = {movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Faild to fetch data")
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render(){
    return(
      <div>
        <table className = "titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width = "10"/>
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search term"/>

        {this.state.rows}

      </div>
    )
  }
}

export default App;
