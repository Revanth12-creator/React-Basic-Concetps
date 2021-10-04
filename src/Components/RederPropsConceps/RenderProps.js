import React, { Component } from 'react';
class RenderPropd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
         this.increseCount=this.increseCount.bind(this);
    }
    increseCount(){
        this.setState(preS=> {
            return {count:preS.count+1}

        })
    }
    render() {
        return ( 
            <div>
               {this.props.render(this.state.count, this.increseCount)}
            </div>
         );
    }
}
 
export default RenderPropd;