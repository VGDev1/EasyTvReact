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
        <a href="/" onClick={handleclick} > 
        <Link to={'/'} className="nav-link"> {this.props.label} 
        <img 
        src={fixedUrl}
        alt="new"
      />
      </Link>
      </a>
      <p1>{this.props.title}</p1>
      </div>
    )
  }
}

export default Program
