import React, { Component } from 'react'
import Program from './Program'
import './style.css'



export class Episodes extends Component {
  constructor() {
    super();
    this.state = { 
      episodesElement: [] };
    }
  
async getEpisodes(slug) {
    console.log(slug);
    const data = await fetch(`http://localhost:3000/api/svt/episodes/${slug}`);
    const resp = await data.json();
    return resp; 
}
    getThumbnail(id, changed) {
    return `https://www.svtstatic.se/image/wide/400/${id}/${changed}?quality=90`;
}

async componentDidMount() {
  const resp = await this.getEpisodes(this.props.location.state.slug)
  let Episodes = resp.data.map((x) => {
      x.items.map((y) => {
        if(y.item.videoSvtId !== "") {
            console.log(this.getThumbnail(y.item.image.id, y.item.image.changed))
            console.log(y.item.name)
            return (
                <Program
                    label={y.item.name}
                    thumbnail={this.getThumbnail(y.item.image.id, y.item.image.changed)}
                    type = "Single"
                />
            );
        }
      });
  });
  this.setState({ episodesElement: Episodes });
}

render() {
    console.log(this.state.episodesElements)
  return <div className = "flex-container">
    {this.state.episodesElements}
</div>
}
}

export default Episodes
