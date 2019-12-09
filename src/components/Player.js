import React, { Component } from 'react';
import ReactHLS from 'react-hls';

import Hls from "hls.js";

class HLSPage extends Component {
    constructor() {
        super();
        this.state = { 
          link: null
        }
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

      async componentDidMount() {
        const videoId = await this.getVideoId(this.props.location.state.m3u8Link)
        console.log(videoId)
        const resp = await this.getm3u8Link(videoId.svtVideoId)
        this.setState({link: resp});
      }
      
    render() {
      
      if(this.state.link != null) { //Måste ta bort -fmp4 Fixat i backend
        console.log("If Statement")
        console.log(this.state.link.m3u8)
        return (    
          <ReactHLS url={this.state.link.m3u8} />
        )
    }
      else {
        console.log("Else Statement")
        console.log(this.state.link)
        return (<div> <h1>Loading</h1> </div>)
    }  
 }
}

export default HLSPage;