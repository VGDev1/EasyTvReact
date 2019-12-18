import React, { Component } from 'react';
import ProgramSingle from './ProgramSingle';
import Program from './Program';
import '../static/style.css';

export class Programs extends Component {
    constructor() {
        super();
        this.state = {
            popularJson: [],
        };
    }

    async getPrograms(section) {
        console.log(section);
        const data = await fetch(`http://localhost:3000/api/svt/program/${section}`);
        const resp = await data.json();
        return resp;
    }

    async componentDidMount() {
        const resp = await this.getPrograms('populart');
        let popularJson = resp.program.map((x) => {
            if (x.type !== 'Single') {
                return (
                    <Program
                        label={x.title}
                        thumbnail={x.thumbnail}
                        slug={x.slug}
                        type={x.type}
                        svtVideoId={x.svtVideoId}
                    />
                );
            } else {
                console.log(x.name);
                return (
                    <ProgramSingle
                        label={x.title}
                        thumbnail={x.thumbnail}
                        slug={x.slug}
                        type={x.type}
                        svtVideoId={x.svtVideoId}
                    />
                );
            }
        });
        this.setState({ popularJson: popularJson });
    }

    render() {
        return <div className='flex-container'>{this.state.popularJson}</div>;
    }
}

export default Programs;
