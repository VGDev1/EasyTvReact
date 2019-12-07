import React, { Component } from 'react'
import Json from './populart'
import Program from './Program'
import './style.css'

export class Programs extends Component {
  render() {
    return <div className = "flex-container">
      {Json.map((x) => (
        <Program title={x[0]} thumbnail={x[1]} />
    ))}
    </div>
  }
}

export default Programs
