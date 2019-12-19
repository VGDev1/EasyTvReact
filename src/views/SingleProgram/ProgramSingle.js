import React, { Component } from 'react';
import '../../static/style.css';
import { Link } from 'react-router-dom';

export class ProgramSingle extends Component {
    constructor() {
        super();
        this.state = {
            svtVideoId: '',
        };
    }

    async componentDidMount() {
        const resp = await this.getVideoId(this.props.slug);
        this.setState({ svtVideoId: resp.svtVideoId });
    }

    async getVideoId(id) {
        const data = await fetch(`http://localhost:3000/api/svt/getVideoId/${id}`);
        const resp = await data.json();
        return resp;
    }

    on;
    render() {
        function handleclick(e) {
            e.preventDefault();
        }
        return (
            <div className='media'>
                <a href='/#' onClick={handleclick}>
                    <Link
                        to={{
                            pathname: '/player',
                            className: 'nav-link',
                            state: {
                                slug: this.props.slug,
                                svtVideoId: this.state.svtVideoId,
                            },
                        }}
                    >
                        <img src={this.props.thumbnail} alt='new' />
                    </Link>
                </a>
                <p>{this.props.label}</p>
            </div>
        );
    }
}

export default ProgramSingle;
