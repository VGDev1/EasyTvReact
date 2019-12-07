import React, { Component } from 'react'
import './style.css'

export class Program extends Component {
  render() {
    const fixedUrl = this.props.thumbnail.replace(/140/, /500/);
    return (
      <div class='media'>
        <img 
        src={fixedUrl}
        alt="new"
      />
      <p1>{this.props.title}</p1>
      </div>
    )
  }
}


export default Program
