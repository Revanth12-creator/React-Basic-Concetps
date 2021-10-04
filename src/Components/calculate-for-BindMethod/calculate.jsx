import React, { Component,Fragment } from "react";
import faker from "faker";
import "./caluculate.css";
class Calculate extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        }
        Increse(){
            this.setState({
                count:this.state.count+1
            })
        }
        Decrese(){
            this.setState({
                count:this.state.count-1
            })
        }
    render(){
        return(
            <Fragment>
                    <h1>hello iam the faker component</h1>
                    <div className="calculate ">
                    <h1 className="h1">{this.state.count}</h1>
                    <div className="btn-group">
                    {/* onClick={() => this.Increse()}  OR we can use like onClick={this.Increse.bind(this)}  */}
                    <button className="btn btn-danger my-5" onClick={() => this.Increse()}>+</button>
                    <button className="btn btn-dark my-5 " onClick={() => this.Decrese()}>-</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Calculate;