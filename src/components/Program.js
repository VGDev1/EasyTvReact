import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export class Program extends Component {
  
  async getVideoId(id) {
    const data = await fetch(`http://localhost:3000/api/svt/getVideoId/${id}`);
    const resp = await data.json();
    return resp;
  }
  render() {


    function handleclick(e) {
      e.preventDefault();
    } 
    if(this.props.type === "Single") {
      console.log("CLICKADE PÅ NÅGOT SOM BORDE SPELAS")
      console.log(this.props.slug)
      return (
        <div class='media'>
          <a href="/#" onClick={handleclick} > 
          <Link to={{
            pathname: '/player',
            className: "nav-link",
            state: {
              slug: this.props.slug,
              svtVideoId: this.props.svtVideoId
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
            className: "test",
            state: {
              slug: this.props.slug,
              svtVideoId: this.props.svtVideoId
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
