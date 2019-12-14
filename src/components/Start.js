import React, { Component } from 'react'
import picture from './svt.svg'
import './style.css'
import StartButtons from './StartButtons'
import Clock from 'react-live-clock';

export class Start extends Component {
  render() {
    return (
        <div class="main center">
            <div class="center" id="clock"></div>
            <Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss'} ticking={true} timezone={'CET'} />
            <div class="flex-container navigation center">
                <StartButtons label={"POPULÄRT"} path={"/programs/populart"}/>
                <StartButtons label={"PROGRAM A-Ö"} path={"/programs/letters"} />
                <div class="background"> <img src= {picture} alt="website logo" /> </div>
            </div>
        </div>
    )
  }
}

export default Start
