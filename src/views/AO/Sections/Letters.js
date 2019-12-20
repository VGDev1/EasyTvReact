import React, { Component } from 'react';
import '../../../static/style.css';
import LetterButtons from './LetterButtons';

export class AOs extends Component {
    constructor() {
        super();
        this.state = {
            Letters: [],
        };
    }

    async componentDidMount() {
        const list = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'Å',
            'Ä',
            'Ö',
            '0 - 9',
        ];
        let Letters = list.map((x) => {
            return <LetterButtons letter={x} />;
        });
        this.setState({ Letters: Letters });
    }

    render() {
        return <div className='flex-container'>{this.state.Letters}</div>;
    }
}

export default AOs;
