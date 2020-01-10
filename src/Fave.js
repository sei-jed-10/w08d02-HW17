import React, { Component } from 'react';

class Fave extends Component {


    handleClick(e){
        e.stopPropagation() //Added it just in case.
        console.log("handling Fave click!")
        this.props.onFaveToggle()

        }

    render() {
        const isFave = (this.props.isFave) ? 'film-row-fave remove_from_queue' : 'film-row-fave add_to_queue'
        const status=(this.props.isFave)? 'remove_from_queue':'add_to_queue'
        return (
            <div className={isFave}>
                <p onClick={(e)=>this.handleClick(e)} className="material-icons">{status}</p>
            </div>
        )
    }


}
export default Fave;