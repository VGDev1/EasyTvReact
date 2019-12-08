import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Player from './Player'
import Start from './Start';

export class Program extends Component {
  render() {
    const fixedUrl = this.props.thumbnail.replace(/140/, /500/);
    function handleclick(e) {
      e.preventDefault();
      console.log('the link was clicked'); 
    } 
    return (
      <div class='media'>
        <a href="/#" onClick={handleclick} > 
        <Link to={{
          pathname: '/player',
          className: "nav-link",
          state: {
            m3u8Link: this.props.url
        }
      }} >
        <img 
        src={fixedUrl}
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
