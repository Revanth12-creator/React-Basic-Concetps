
//ref is used to acces dom nodes directly in react a
//ex we can fouss of the search btuuron with the help of react refs
import React, { Component } from 'react';
class NormalRefs extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
       this.normalRefs=React.createRef();
       this.display=this.display.bind(this);
    }
    componentDidMount(){
        this.normalRefs.current.focus();
        console.log(this.normalRefs)
    }
    display(){
        let data=this.normalRefs.current.value;
        let valu=this.state.data;
        valu.push(data)
        this.setState({
            data:valu
        })
        // alert(this.normalRefs.current.value)
    }
    render() { 
        return ( 
            <div>
                <h1>Noraml REfs</h1>
                <input type="text" ref={this.normalRefs} /> 
                <button onClick={this.display}>submit</button> 
                <div className="card col-4 mx-auto">
                    {this.state.data.map((data) => <h1>{data}</h1>)}
                </div>                           
            </div>                                          
         );
    }
}
 
export default NormalRefs;