import React, { Component } from 'react';
import axios from "axios";
class PostComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            body:"",
            userId:"",
            title:"",
         }
         this.handleChange=this.handleChange.bind(this);
         this.SubmitValue=this.SubmitValue.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    SubmitValue(e){
        e.preventDefault();
        // console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.SubmitValue}>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" onChange={this.handleChange} value={this.state.body}/>
                    </div>
                    <div>
                        <label>userId</label>
                        <input type="text" name="userId" onChange={this.handleChange} value={this.state.userId} />
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                  
                        <button type="submit">Submit</button>
                  
                </form>
            </div>
         );
    }
}
 
export default PostComp;