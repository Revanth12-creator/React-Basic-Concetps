import React, { Component } from 'react';
import ComponentB from "./ComponentsB.js";
class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ComponentB/>
         );
    }
}
 
export default ComponentA;