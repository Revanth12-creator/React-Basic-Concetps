//bide is uesd to binding method and object 
//it is creating new method  while binding
//we can 4ways to bind will see below

//==========================================================
import React, { Component, Fragment } from "react";
import faker from "faker";
import "./BindComponent.css"
class BindComponent extends Component{
    constructor(props){
    super()
    this.state={
        image:faker.image.avatar()
    }
}
  updateImage(){
      this.setState({
          image:faker.image.avatar()
      })
  }
    render(){
        return(
            <Fragment>
                <div className="BindComponent">
                    <img src={this.state.image} alt="photos"/>
                    {/* here we are binding with the help of fat arrow function see below */}
                    <button className="btn btn-dark ml-5" onClick={() => this.updateImage()}>Click</button>
                </div>
            </Fragment>
        )
    }
}



//==========================================================
// import React, { Component, Fragment } from "react";
// import faker from "faker";
// import "./BindComponent.css"
// class BindComponent extends Component{
//     constructor(props){
//     super()
//     this.state={
//         image:faker.image.avatar()
//     }
// }
//   updateImage(){
//       this.setState({
//           image:faker.image.avatar()
//       })
//   }
//     render(){
//         return(
//             <Fragment>
//                 <div className="BindComponent">
//                     <img src={this.state.image} alt="photos"/>
//                     {/* here we are binding with the help of Bind(this) function see below */}
//                     <button className="btn btn-dark ml-5" onClick={this.updateImage.bind(this)}>Click</button>
//                 </div>
//             </Fragment>
//         )
//     }
// }




//==========================================================
// import React, { Component, Fragment } from "react";
// import faker from "faker";
// import "./BindComponent.css"
// class BindComponent extends Component{
//     constructor(props){
//     super()
//     this.state={
//         image:faker.image.avatar()
//     }
// }
//   //here we are binding with the help of fat arrow function see below 
//if we are creating a function with help of fat arrow way
//   updateImage= () =>{
//       this.setState({
//           image:faker.image.avatar()
//       })
//   }
//     render(){
//         return(
//             <Fragment>
//                 <div className="BindComponent">
//                     <img src={this.state.image} alt="photos"/>
                   
//                     <button className="btn btn-dark ml-5" onClick={this.updateImage}>Click</button>
//                 </div>
//             </Fragment>
//         )
//     }
// }



//==========================================================
// import React, { Component, Fragment } from "react";
// import faker from "faker";
// import "./BindComponent.css"
// class BindComponent extends Component{
//     constructor(props){
//     super()
//     this.state={
//         image:faker.image.avatar()
//     }
//     this.updateImage=this.updateImage.bind(this);
// }
//   //here we are binding with the help of fat arrow function see below 
//   updateImage(){
//       this.setState({
//           image:faker.image.avatar()
//       })
//   }
//     render(){
//         return(
//             <Fragment>
//                 <div className="BindComponent">
//                     <img src={this.state.image} alt="photos"/>      
//                     <button className="btn btn-dark ml-5" onClick={this.updateImage}>Click</button>
//                 </div>
//             </Fragment>
//         )
//     }
// }
// export default  BindComponent;