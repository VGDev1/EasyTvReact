import React, { Component } from 'react'
import Program from './Program'
import ProgramSingle from './ProgramSingle'
import './style.css'


export class LetterView extends Component {
    constructor() {
        super();
        this.state = { 
          Programs: null
        }
    }

    async getPrograms(section) {
        console.log(section);
        const data = await fetch(`http://localhost:3000/api/svt/program/${section}`);
        const resp = await data.json();
        return resp; 
    }


    async componentDidMount() {
        const resp = await this.getPrograms(this.props.location.state.letter)
        console.log(resp)
        let Programs = resp.program.map((x) => {
          if(x.type !== "Single") {
            return (
                <Program
                    label={x.name}
                    thumbnail={x.thumbnail}
                    slug={x.slug}
                    type={x.type}
                    svtVideoId = {x.svtVideoId}
                />
            );
          }
          else {
            console.log(x.name)
            return (
              <ProgramSingle
                label={x.name}
                thumbnail={x.thumbnail}
                slug={x.slug}
                type={x.type}
                svtVideoId = {x.svtVideoId}
              />
            );
          }
        });
        console.log(Programs)
        this.setState({Programs: Programs});
      }
      
  
      render() {
      
        if(this.state.Programs != null) { 
          console.log("If Statement")
          return (  <div className = "flex-container">
            {this.state.Programs}
            </div> 
          )
      }
        else {
          console.log("Else Statement")
          return (<div> <h1>Loading</h1> </div>)
      }  
   }
  }
export default LetterView
