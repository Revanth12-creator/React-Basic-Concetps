import React, { Component,Fragment } from "react";
import faker from "faker";
import "./facker.css"
class ImageComponent extends Component{
    constructor(){
        super()
        this.state={
          image:faker.image.avatar()
        }
        }
        changeImage(){
            this.setState({
                image:faker.image.avatar()
              })
        }
    render(){
        return(
            <Fragment>
                <div className="singleImage">
                    <img src={this.state.image} alt={this.image}/>
                    {/* onClick={() => this.changeImage()}  OR we can use like onClick={this.changeImage.bind(this)}  */}
                    <button className=" my-5 ml-5 " onClick={this.changeImage.bind(this)} >Change Image</button>
                </div>
            </Fragment>
        )
    }
}
export default ImageComponent;