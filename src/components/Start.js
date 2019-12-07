import React, { Component } from 'react'
import picture from './svt.svg'
import './style.css'
import StartButtons from './btn'

export class Start extends Component {
  render() {
    return (
        <div class="main center">
            <div class="center" id="clock"></div>
            <div class="flex-container navigation center">
                <StartButtons label={"FAVORITER"} />
                <StartButtons label={"POPULÄRT"} />
                <StartButtons label={"PROGRAM A-Ö"} />
                <div class="background"> <img src= {picture} alt="website logo" /> </div>
            </div>
        </div>
    )
  }
}

export default Start
