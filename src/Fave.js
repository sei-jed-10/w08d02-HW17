

import React, { Component } from 'react';

class fave extends Component {
    
constructor(props){
    super(props)
    this.state={
        faveList: [],
        msg: ''      
    }
    // this.handleClick = this.handleClick.bind(this)
}


  render() {
     //console.log(this.state.msg);
    console.log('test');
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <p className="material-icons" >add_to_queue</p>
      </div>
    )
  }

  handleClick(e) {
    e.preventDefault();
    // this.setState ({msg: 'handling Fave click!'})
    this.setState ({msg:'handling Fave click!' })
   
}
  
}

export default fave;