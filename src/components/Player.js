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
    
    createHlsPlayer(url) {
      const video = document.getElementById('video');
      console.log(url);
      if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(url);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
              video.play();
          });
      }
      // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
      // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
      // This is using the built-in support of the plain video element, without using hls.js.
      // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
      // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
          video.addEventListener('loadedmetadata', () => {
              video.play();
          });
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
      this.createHlsPlayer(source1Working)
      return (    
      <video width ="500px" height="400px" id="video"></video>
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