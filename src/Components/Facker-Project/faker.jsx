//Facker is like API it is gives fack data which is already wriiten in facker API 
//it is uesd to genarate fake data in your application 
//it used mainly for learnig purpass
//
import React from "react";
import faker from "faker";//here we are installing faker module
import "./facker.css";
import { Component, Fragment } from "react";

class FackerComponent extends Component{
    constructor(props){
        super(props)
        this.state={
        };
    }
    render(){
        return(
            <Fragment>
                <div className="totalblock">
                 
        <h1>Faker Data</h1>
        <div>  
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h3>{faker.name.firstName()}</h3>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        <div>
        <h4>{faker.name.firstName()}</h4>
        <img src={faker.image.avatar()} alt={faker.name}/>
        </div>
        </div>
            </Fragment>
        )
    }
}
export default FackerComponent;