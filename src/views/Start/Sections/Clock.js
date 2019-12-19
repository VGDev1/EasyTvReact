import React, { Component } from 'react';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.date(),
            time: this.time(),
        };
    }

    componentDidMount() {
        this.update = setInterval(() => this.tick(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }
    tick() {
        this.setState({
            date: this.date(),
            time: this.time(),
        });
    }

    date() {
        const today = new Date();
        const months = [
            'Januari',
            'Februari',
            'Mars',
            'April',
            'Maj',
            'Juni',
            'Juli',
            'Augusti',
            'September',
            'Oktober',
            'November',
            'December',
        ];
        const days = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
        const curWeekDay = days[today.getDay()];
        const curDay = today.getDate();
        const curMonth = months[today.getMonth()];
        const curYear = today.getFullYear();
        return `${curWeekDay}, ${curDay} ${curMonth} ${curYear}`;
    }

    checkTime(i) {
        // eslint-disable-next-line no-param-reassign
        if (i < 10) i = `0${i}`; // add zero in front of numbers < 10
        return i;
    }

    time() {
        const today = new Date();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        hr = this.checkTime(hr);
        min = this.checkTime(min);
        sec = this.checkTime(sec);
        return `${hr}:${min}:${sec}`;
    }

    render() {
        return (
            <div id='clock'>
                <p>{`${this.state.date} ${this.state.time}`}</p>
            </div>
        );
    }
}

export default Clock;
