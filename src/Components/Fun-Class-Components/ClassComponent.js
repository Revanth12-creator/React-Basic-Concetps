//this class component 
//1.it is called statfull component also
//2.we can use entair file no of times 
//3.class should be extands by the component
//4.this is using for writing any login 
//5.we are calling stateful components also
//6.it has having state which can store private data
//7.it is haviang props

import React, { Component } from "react";

class Passowrd extends Component {
    state={
        name:"",//this is private data 
    }
    render(){
        return <h1> Hello iam the class component</h1>;
    }
}

export default Passowrd;