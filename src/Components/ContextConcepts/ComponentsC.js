import React, { Component } from 'react';
import {UserConsumer} from "./ContexComp.js"
class ComponentC extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <div>
               <UserConsumer>
               {(Username)=> {
                   return <h1>Hello {Username}</h1>
               }}
           </UserConsumer>
           </div>
         );
    }
}
 
export default ComponentC;