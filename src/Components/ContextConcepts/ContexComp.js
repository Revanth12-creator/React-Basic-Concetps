import React from 'react';

//use of the contex is provading a value to the multiple compoment 
//1.import context 2.provide contex value 3.consume value in component

let UserContext=React.createContext();
let UserProvider=UserContext.Provider;
let UserConsumer=UserContext.Consumer;
export {UserProvider, UserConsumer};