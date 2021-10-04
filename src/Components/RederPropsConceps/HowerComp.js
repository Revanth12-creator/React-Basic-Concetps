import React, { Component } from 'react';
class HoweCom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {count, increseCount}=this.props;
        return ( 
            <div><h3 onMouseOver={increseCount}> Howered {count} times</h3></div>
         );
    }
}
 
export default HoweCom;