import React from "react";
function Mobile(props){
return (
    <div>
        <h1>
            Name of the company {props.company}, Prize {props.prize } and Model {props.model}
            {/* above  props are coming from the app.js component check it 96 line in app.js */}
        </h1>
        {props.children}
    </div>
)
//above line iam calling all props form parant component to child 
}
export default Mobile;