import React,{Component} from "react";
// import FunComponent from "./FunComponent.jsx";
import ClassCompomnent from "./ClasComponent.jsx";
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <h1>ParentComponent</h1>
                {/* <FunComponent name="Revanth" age="23" city="bangaluru"/> */}
                 <ClassCompomnent name="Revanth" age="22" city="bangaluru"/>              
            </div>
        );
    }
}
export default ParentComponent;