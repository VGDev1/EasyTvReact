import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LetterButtons extends Component {
    render() {
        function handleclick(e) {
            e.preventDefault();
        }
        return (
            <div className='choice center'>
                <a href='/#' onClick={handleclick}>
                    <Link
                        style={{ textDecoration: 'none', color: '#21af34' }}
                        to={{
                            pathname: '/programs',
                            state: {
                                letter: this.props.letter,
                            },
                        }}
                    >
                        <p>{this.props.letter}</p>
                    </Link>
                </a>
            </div>
        );
    }
}

export default LetterButtons;
