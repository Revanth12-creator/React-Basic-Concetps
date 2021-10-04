// A setState() method is used to updating the value which is avalable in state objects

// example1===============================
// import React, { Component } from "react";
// class SetState extends Component{
//     constructor(){
//         super()
//     this.state={
//         message:"welcome to fullstack"
       
//     }
// }
// // =====================this changing message
//      ChangeMessage(){
//         this.setState({
//             message:"thank for subscibing"
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=>this.ChangeMessage()}>subscribe</button>   {/* this for chaneging message */}
//             </div>
//         )
//     }
// }



// // example2============================================
// import React, { Component } from "react";
// class SetState extends Component{
//     constructor(){
//         super()
//     this.state={
//         date:" "
//     }
//     this.ChangeDate();
// }    
// //=====================this changing message
//      ChangeDate(){
//          setInterval(() => {
//              let date=new Date().toLocaleTimeString();
//             this.setState({
//                 date:date
//             })
//          }, 1000);
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Clock Time</h1>
//                 <h1 >{this.state.date}</h1>
//             </div>
//         )
//     }
// }


// example3=============here insted of div i am using FRAGMENT===============================
//1.the use of Fragment to write multiple lines of code we should Fragment
//2.it is act like a parant
//3.we are actually using div as a parent but it is taking memory so that we are using Fragent  
import React, { Component, Fragment } from "react";
class SetState extends Component{
    constructor(){
        super()
    this.state={
       randamNumber:" "
    }
}    
changeValue(){
  let value=Math.random();
    this.setState({
        randamNumber:value
    })
}
//=====================this changing message
   
    render(){
        return(
            <Fragment>
                <h1>{this.state.randamNumber}</h1>
               <button onClick={() =>this.changeValue()}>click</button>
            </Fragment>
        )
    }
}
export default SetState;