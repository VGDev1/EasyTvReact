import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export class StartButtons extends Component {
  render() {
    return (
      <div>
       <div class="choice center"><Link to={'/programs'} className="nav-link"> {this.props.label} </Link></div>
      </div>
    )
  }
}

export default StartButtons
