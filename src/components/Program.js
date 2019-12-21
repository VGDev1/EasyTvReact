import React, { Component } from 'react';
import '../static/style.css';
import { Link } from 'react-router-dom';

export class Program extends Component {
    async getVideoId(id) {
        const data = await fetch(`http://localhost:3000/api/svt/getVideoId/${id}`);
        const resp = await data.json();
        return resp;
    }
    maxDesc(desc) {
        return `${desc.slice(0, 100)}...`;
    }
    render() {
        function handleclick(e) {
            e.preventDefault();
        }
        if (this.props.type === 'Single') {
            return (
                <div className='media'>
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
                    <p className='episode'>{this.props.label}</p>
                    <p className='desc'>{this.maxDesc(this.props.desc)}</p>
                </div>
            );
        } else {
            return (
                <div className='media'>
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
                    <p className='desc'>{this.props.desc}</p>
                    <p className='title'>{this.props.label}</p>
                </div>
            );
        }
    }
}

export default Program;
