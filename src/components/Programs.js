import React, { Component } from 'react'
import Json from './populart'
import Program from './Program'
import './style.css'

export class Programs extends Component {
  async getPrograms(section) {
    console.log(section);
    const data = await fetch(`http://localhost:3000/api/svt/program/${section}`);
    const resp = await data.json();
    return resp;
}

async getVideoId(id) {
  const data = await fetch(`http://localhost:3000/api/svt/getVideoId/${id}`);
  const resp = await data.json();
  return resp;
}

async getm3u8Link(id) {
  const data = await fetch(`http://localhost:3000/api/svt/m3u8/${id}`);
  const resp = await data.json();
  return resp;
}

  render() {
    const popularJson = this.getPrograms("populart")
    return <div className = "flex-container">
      {popularJson.program.map((x) => (
        <Program title={x.title} thumbnail={x.thumbnail} url={this.getm3u8Link((a) => this.getVideoId(a))}/>
    ))}
    </div>
  }
}
export default Programs
