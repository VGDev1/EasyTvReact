import React, { Component } from 'react';
import ReactHLS from 'react-hls';

class HLSPage extends Component {
    constructor() {
        super();
        this.state = {
            link: null,
        };
    }

    async getVideoIdFromSlug(slug) {
        const data = await fetch(`http://localhost:3000/api/svt/episodes/${slug}`);
        const resp = await data.json();
        return resp;
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
        const resp = await this.getm3u8Link(this.props.location.state.svtVideoId);
        console.log(resp);
        this.setState({ link: resp });
    }

    render() {
        if (this.state.link != null) {
            //Måste ta bort -fmp4 Fixat i backend
            console.log('If Statement');
            console.log(this.state.link.m3u8);
            return <ReactHLS width='100%' height='100%' url={this.state.link.m3u8} />;
        } else {
            console.log('Else Statement');
            console.log(this.state.link);
            return (
                <div>
                    {' '}
                    <h1>Loading</h1>{' '}
                </div>
            );
        }
    }
}

export default HLSPage;
