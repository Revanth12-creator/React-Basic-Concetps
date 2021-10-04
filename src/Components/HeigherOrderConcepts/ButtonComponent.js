import React, { Component } from 'react';
import HeigherOrder from "./HeirOrderComponent.js";
class ButtonComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {count, increamenCOunt}=this.props;
        return ( 
            <div>
                <button onClick={increamenCOunt}>Clicked {count} times</button>
            </div>
         );
    }
}
 
export default HeigherOrder(ButtonComp);