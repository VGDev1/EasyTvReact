import React, { Component } from 'react';
import Program from '../../components/Program';
import '../../static/style.css';

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
        return `https://www.svtstatic.se/image/wide/300/${id}/${changed}?quality=90`;
    }

    async componentDidMount() {
        const resp = await this.getEpisodes(this.props.location.state.slug);
        let episodes = resp.data.map((x, i) => {
            console.log();
            return (
                <div className='seasons' id={x.name} key={x.name}>
                    <input
                        id={'collapsible' + i}
                        className='toggle'
                        type='checkbox'
                        defaultChecked={i === 0}
                    />
                    <label for={'collapsible' + i} className='lbl-toggle'>
                        {x.name}
                    </label>
                    <div className='season' key={x.name} data={x.items[0].item.validFrom}>
                        {x.items.map((y) => {
                            if (y.item.videoSvtId !== '') {
                                return (
                                    <Program
                                        label={y.item.name}
                                        thumbnail={this.getThumbnail(
                                            y.item.image.id,
                                            y.item.image.changed,
                                        )}
                                        type='Single'
                                        svtVideoId={y.item.videoSvtId}
                                        slug={this.props.location.state.slug}
                                        desc={y.item.longDescription}
                                        date={y.item.validFrom}
                                        key={y.item.name}
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            );
        });
        console.log(episodes);
        this.setState({ episodesElement: episodes.flat() });
    }

    render() {
        console.log(this.state.episodesElement);
        return <div className='videos'>{this.state.episodesElement}</div>;
    }
}

export default Episodes;
