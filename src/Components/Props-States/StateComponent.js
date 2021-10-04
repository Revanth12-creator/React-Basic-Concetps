import React, { Component } from "react";
class State extends Component {
    constructor(props){
        super(props)
        this.state={                //this all are private data here no need to passing arguments 
           name:"surya",             // directly we can call this component only
           age:12,
           school:"ZPH",
        }
    }
   
    render() {
        return (
       <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.state.school}</h1>

       </div>
        )
    }
}
export default State;
