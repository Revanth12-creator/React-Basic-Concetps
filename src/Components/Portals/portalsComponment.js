//actually in react everything code is being under in the root 
//to break or to write ouside the  root is possible with help of the portals 
//for that we sholud creat another div element in the index.html 

import React, { Component } from 'react';
import ReactDom from "react-dom";
class PortalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ReactDom.createPortal( 
            <div>
                <h1>Portals</h1>
            </div> ,   
            document.getElementById("portals-Root")       
         );
    }
}
 
export default PortalComponent;