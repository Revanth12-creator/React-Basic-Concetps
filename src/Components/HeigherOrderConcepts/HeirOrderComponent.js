// A higher-order component (HOC) is an advanced technique in React for reusing component logic. ...
//   Concretely, a higher-order component is a function that takes a component and returns a new component.
import React, { Component } from 'react';
let HeigherOrder=WrapComponent => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                count:0       
             }
             this.increseCount=this.increseCount.bind(this);
        }
        increseCount(){
            this.setState({
                count:this.state.count+1
            })
        }
        render() { 
            return ( 
                
                <div>
                    <WrapComponent count={this.state.count} increamenCOunt={this.increseCount}/>
                </div>
             );
        }
    }
    return NewComponent;
} 
export default HeigherOrder;