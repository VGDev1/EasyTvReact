import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export class StartButtons extends Component {
    render() {
        return (
            <div class='choice center'>
                <Link to={this.props.path} className='nav-link'>
                    {' '}
                    {this.props.label}{' '}
                </Link>
            </div>
        );
    }
}

export default StartButtons;
