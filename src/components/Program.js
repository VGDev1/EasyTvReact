import React, { Component } from 'react';
import '../static/style.css';
import { Link } from 'react-router-dom';

export class Program extends Component {
    async getVideoId(id) {
        const data = await fetch(`http://localhost:3000/api/svt/getVideoId/${id}`);
        const resp = await data.json();
        return resp;
    }
    render() {
        function handleclick(e) {
            e.preventDefault();
        }
        if (this.props.type === 'Single') {
            return (
                <div className='media'>
                    <div className='Season' id={this.props.season}>
                        <a href='/#' onClick={handleclick}>
                            <Link
                                to={{
                                    pathname: '/player',
                                    className: 'nav-link',
                                    state: {
                                        slug: this.props.slug,
                                        svtVideoId: this.props.svtVideoId,
                                    },
                                }}
                            >
                                <img src={this.props.thumbnail} alt='new' />
                            </Link>
                        </a>
                        <p>{this.props.label}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='media'>
                    <div className='Season' id={this.props.season}>
                        <a href='/#' onClick={handleclick}>
                            <Link
                                to={{
                                    pathname: '/episodes',
                                    className: 'test',
                                    state: {
                                        slug: this.props.slug,
                                        svtVideoId: this.props.svtVideoId,
                                    },
                                }}
                            >
                                <img src={this.props.thumbnail} alt='new' />
                            </Link>
                        </a>
                        <p>{this.props.label}</p>
                    </div>
                </div>
            );
        }
    }
}

export default Program;
