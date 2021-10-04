import React from 'react';
import { Fragment,Component } from 'react';
class UpdatingState extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0,
         }
         this.IncreaseCount=this.IncreaseCount.bind(this);
         this.DecreaseCount=this.DecreaseCount.bind(this);
    }
    IncreaseCount(){
        this.setState({
            count:this.state.count+1          
        })
        if(this.state.count==4){
            this.setState({
                isDisabled: true  
              });
        }
        else{
            this.setState({
                isDisabled: false,
                isDecDisabled:false
                
              });
        }
    }
    DecreaseCount(){
        this.setState({
            count:this.state.count-1
        })
        if(this.state.count==1){
            this.setState({
                isDecDisabled:true
              });
        }
        else{
            this.setState({
                isDecDisabled: false,
                isDisabled:false
              });
        }
                
    }
    render() { 
            return ( 
            <Fragment>
                <div className="container">
                <h1 className="text-primary ml-5 ">{this.state.count}</h1>
                <button className="btn btn-success pl-5 pr-5" disabled={this.state.isDisabled} onClick={this.IncreaseCount}>+</button>
                <button className="btn btn-warning pl-5 pr-5" disabled={this.state.isDecDisabled} onClick={this.DecreaseCount}>-</button>
                </div>
            </Fragment>
         );
    }
}
 
export default UpdatingState;



