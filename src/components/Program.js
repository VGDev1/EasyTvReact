import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export class Program extends Component {

  render() {


    function handleclick(e) {
      e.preventDefault();
    } 
    if(this.props.type === "Single") {
      return (
        <div class='media'>
          <a href="/#" onClick={handleclick} > 
          <Link to={{
            pathname: '/player',
            className: "nav-link",
            state: {
              slug: this.props.slug
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
    else {
      return (
        <div class='media'>
          <a href="/#" onClick={handleclick} > 
          <Link to={{
            pathname: '/episodes',
            className: "nav-link",
            state: {
              slug: this.props.slug,

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
}

export default Program
