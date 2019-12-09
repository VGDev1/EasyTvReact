import React, { Component } from 'react'
import Program from './Program'
import './style.css'



export class Programs extends Component {
  constructor() {
    super();
    this.state = { 
      popularJson: [] };
    }
  
async getPrograms(section) {
    console.log(section);
    const data = await fetch(`http://localhost:3000/api/svt/program/${section}`);
    const resp = await data.json();
    return resp; 
}


async componentDidMount() {
  const resp = await this.getPrograms("populart")
  let popularJson = resp.program.map((x) => {
      return (
          <Program
              label={x.name}
              thumbnail={x.thumbnail}
              svtId={x.svtId}
          />
      );
  });
  this.setState({ popularJson: popularJson });
}

render() {
  return <div className = "flex-container">
    {this.state.popularJson}
</div>
}
}

export default Programs
