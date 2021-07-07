

import React, { Component } from 'react';

class fave extends Component {
    
constructor(props){
    super(props)
    this.state={
        isFave: false,
        faveList: []      
    }
     this.handleClick = this.handleClick.bind(this)
}
  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
  
    return (
    
      <div className={`film-row-fave ${this.state.isFave ? 'add_to_queue' : 'remove_from_queue'}`} >
      <p className={`material-icons ${this.state.isFave ? 'add_to_queue' : 'remove_from_queue'}`}  onClick={this.handleClick}>{isFave}</p>
    </div>
    )
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation()
    console.log ('handling Fave click!')
    this.setState ({isFave: !this.state.isFave})
   
}
  
}

export default fave;