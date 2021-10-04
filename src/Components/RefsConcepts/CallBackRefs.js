import React, { Component } from 'react';
class CallBackRefs extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }
        this.cbRef=null;
        this.setCbRef=elemet=>{
            this.cbRef=elemet;
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // console.log(this.setCbRef)
    }
    render() { 
        return ( 
            <div>
                <h1>CallBackRefs</h1>
                <input type="text" ref={this.setCbRef} /> 
            </div>
         );
    }
}
 
export default CallBackRefs;