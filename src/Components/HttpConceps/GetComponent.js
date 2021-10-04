import React, { Component } from 'react';
import axios from "axios";
class GetComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
         }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(responce => {
            console.log(responce.data);
            this.setState({
                posts:responce.data
            })
        })
        .catch(err => console.log(err))
    }
    render() { 
        let {posts}=this.state;
        return ( 
            <div>
                <h1>List Of data</h1>
                {posts.map((data)=>  <h3 key={data.id}>{data.title}</h3>
                )}
            </div>
         );
    }
}
 
export default GetComp;