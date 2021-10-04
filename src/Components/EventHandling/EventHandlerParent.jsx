import React, { Component } from 'react';
// import ClasComponent from "./ClasComponent.jsx"
class EventHandlerParent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            uname:"",
            pwd:"",
         }
         this.onChange=this.onChange.bind(this)
         this.SubmitForm=this.SubmitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
        // console.log(e.target.value)
    }
    SubmitForm(e){
        e.preventDefault();
        let {uname,pwd}=this.state;
        console.log(this.state)        
    }
    render() { 
        return ( 
            <div>
                <h1>EventHandlerParent</h1>
                <form action="" onSubmit={this.SubmitForm}>
                    <div>
                        <input type="text" name="uname" value={this.uname} onChange={this.onChange}/>
                    </div>
                    <div>
                        <input type="password" name="pwd"  value={this.pwd} onChange={this.onChange}/>
                    </div>
                    <div>
                        <button >Submit</button>
                    </div>
                </form>
                {/* <ClasComponent/> */}
            </div>
         );
    }
}
 
export default EventHandlerParent;