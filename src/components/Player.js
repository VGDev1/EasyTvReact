import React, { Component } from 'react';
import ReactHLS from 'react-hls';

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
        const resp = await this.getm3u8Link(videoId.svtVideoId)
        this.setState({link: resp});
      }
      
    render() {
    const source1Working = 'https://svt-vod-9j.akamaized.net/d0/se/20191108/38320599-0021-4b80-8df5-070b08ce29c0/master.m3u8?alt=https%3A%2F%2Fswitcher.cdn.svt.se%2F38320599-0021-4b80-8df5-070b08ce29c0%2Fmaster.m3u8';
    const source2NotWorking = 'https://svt-vod-5m.akamaized.net/d0/se/20190913/ab74cdce-ee41-48a8-ae4f-ad02cf1a0272/master-fmp4.m3u8?alt=https%3A%2F%2Fswitcher.cdn.svt.se%2Fab74cdce-ee41-48a8-ae4f-ad02cf1a0272%2Fmaster-fmp4.m3u8'
    
    if(this.state.link != null) {
      console.log("If Statement")
      console.log(this.state.link.m3u8)
      return (<div> <ReactHLS url={this.state.link.m3u8} /> </div>)
    }
    else {
      console.log("Else Statement")
      console.log(this.state.link)
      return (<div> <h1>Loading</h1> </div>)
    }  
 }
}

export default HLSPage;