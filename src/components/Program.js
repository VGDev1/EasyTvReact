import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Player from './Player'
import Start from './Start';

export class Program extends Component {

  render() {
    function handleclick(e) {
      e.preventDefault();
    } 
    return (
      <div class='media'>
        <a href="/#" onClick={handleclick} > 
        <Link to={{
          pathname: '/player',
          className: "nav-link",
          state: {
            m3u8Link: this.props.svtId
        }
      }} >
        <img 
        src={this.props.thumbnail}
        alt="new"
      />
      </Link>
      </a>
      <p>{this.props.label}</p>
      </div>
    )
  }
}

export default Program
