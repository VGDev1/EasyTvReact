import React, { Component } from 'react'
import Program from './Program'
import './style.css'


export class AOs extends Component {
    constructor() {
        super();
        this.state = { 
          AOJson: [] };
        }
      
    async getPrograms(section) {
        console.log(section);
        const data = await fetch(`http://localhost:3000/api/svt/program/${section}`);
        const resp = await data.json();
        return resp; 
    }

    async componentDidMount() {
        const resp = await this.getPrograms("AO")
        let AOJson = resp.program.map((x) => {
            return (
                <Program
                    label={x.name}
                    thumbnail={x.thumbnail}
                    svtId={x.svtId}
                />
            );
        });
        this.setState({ AOJson: AOJson });
      }
      
  
    render() {
    return <div className = "flex-container">
        {this.state.AOJson}
    </div>
    }
      
}

export default AOs
