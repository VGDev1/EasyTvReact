import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class StartButtons extends Component {
    render() {
        return (
            <Link to={this.props.path} className='startButton'>
                <p>{this.props.label}</p>
            </Link>
        );
    }
}

export default StartButtons;
