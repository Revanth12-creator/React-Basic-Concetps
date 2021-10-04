//we can destructure in a class component in render method 
import React,{Component} from 'react'
class ClassCompomnent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        let {name, age, city}=this.props;
        return ( 
            <div>
                <h1>classComponent way destructuring</h1>
                <h1>My name is {name} age {age}   city {city}</h1>
            </div>
         );
    }
}
 
export default ClassCompomnent;