// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
  
//     </div>
//   );
// }

import React, {Component} from 'react';
import FilmListing from '.FilmListing'
import TMDB from './TMDB'

class App extends Component{
  render(){
    return(



<div className="film-library">
<div className="film-list">
<h1 className="section-title">FILMS</h1>

<FilmListing films={TMDB.films} /> 
</div>

<div className="film-details">
<h1 className="section-title">DETAILS</h1>

</div>
</div>


    )
  }
}

export default App;

