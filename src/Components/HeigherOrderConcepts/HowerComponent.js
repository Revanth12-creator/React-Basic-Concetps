import React, { Component } from 'react';
import HeigherOrder from "./HeirOrderComponent.js";
class HowerComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {count, increamenCOunt}=this.props;
        return ( 
            <div><h3 onMouseOver={increamenCOunt}> Howered {count} times</h3></div>
         );
    }
}

export default HeigherOrder(HowerComp);