import React, { Component } from 'react';
import Program from './Program';
import '../static/style.css';

export class Episodes extends Component {
    constructor() {
        super();
        this.state = {
            episodesElement: null,
        };
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
        const resp = await this.getEpisodes(this.props.location.state.slug);
        let episodes = resp.data.map((x) => {
            return x.items.map((y) => {
                if (y.item.videoSvtId !== '') {
                    return (
                        <Program
                            label={y.item.name}
                            thumbnail={this.getThumbnail(y.item.image.id, y.item.image.changed)}
                            type='Single'
                            svtVideoId={y.item.videoSvtId}
                            slug={this.props.location.state.slug}
                            season = {x.name}
                        />
                    );
                }
            });
        });
        console.log(episodes);
        this.setState({ episodesElement: episodes.flat() });
    }

    render() {
        console.log(this.state.episodesElement);
        return <div className='flex-container'>{this.state.episodesElement}</div>;
    }
}

export default Episodes;
