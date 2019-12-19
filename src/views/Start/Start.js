import React, { Component } from 'react';
import picture from '../../static/Images/EasyTV.png';
import '../../static/style.css';
import StartButtons from './Sections/StartButtons';
import Block from './Sections/Clock';

export class Start extends Component {
    render() {
        return (
            <div className='main center'>
                <Block />
                <div className='flex-container navigation center'>
                    <StartButtons label={'POPULÄRT'} path={'/programs/populart'} />
                    <StartButtons label={'PROGRAM A-Ö'} path={'/programs/letters'} />
                    <div className='background'>
                        {' '}
                        <img src={picture} alt='website logo' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Start;
