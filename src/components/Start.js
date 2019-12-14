import React, { Component } from 'react';
import picture from './EasyTV.png';
import '../static/style.css';
import StartButtons from './StartButtons';
// import Clock from 'react-live-clock';
import Block from './Clock';

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
