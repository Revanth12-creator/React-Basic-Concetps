import React, { Component } from 'react';
class ClickComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {count, increseCount}=this.props;
        return ( 
            <div>
                <button onClick={increseCount}>Clicked {count} times</button>
            </div>
         );
    }
}
 
export default ClickComp;