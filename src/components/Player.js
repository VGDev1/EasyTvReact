import React, { Component } from 'react';
import ReactHLS from 'react-hls';

class HLSPage extends Component {
 render() {
   const source = 'https://svt-vod-9j.akamaized.net/d0/se/20191108/38320599-0021-4b80-8df5-070b08ce29c0/master.m3u8?alt=https%3A%2F%2Fswitcher.cdn.svt.se%2F38320599-0021-4b80-8df5-070b08ce29c0%2Fmaster.m3u8';

   return (
     <div>
       <ReactHLS url={source} />
     </div>
   );
 }
}

export default HLSPage;