//it is functional component in two ways to destructure
import React from 'react'

// first way: parameters it self
let FunComponent=( {name ,age, city}) => {
    return(
        <div>
            <h1>Functional way destraucring</h1>
            <h1>My name is {name} age {age}   city {city}</h1>
        </div>
    )
}

// second way:inside function 
// let FunComponent=props => {
//     let {name ,age, city}=props;
//     return(
//         <div>
//             <h1>ChildComponent</h1>
//             <h1>My name is {name} age {age}   city {city}</h1>
//         </div>
//     )
// }
export default FunComponent;