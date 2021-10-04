import React,{Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch, Link} from "react-router-dom";
 //import Username from "./Components/Fun-Class-Components/functionalCompoment.js";     //this functionalCompoment.js code imported
 //import Passowrd from "./Components/Fun-Class-Components/ClassComponent.js";          //this ClassCompoment.js code imported
//import Mobile from "./Components/Props-States/Props";                        //this is the props code 
 //import StateComponent from "./Components/Props-States/StateComponent";            //this is the StateComponent code
// import PlayerList from "./Components/CricketPlayers-State/playerList.jsx";
// import SetState from "./Components/setStateMethod/SetStateMethod.jsx";
// import UpdatingState from "./Components/setStateMethod/UpdatingState.jsx";
// import FackerComponent from "./Components/Facker-Project/faker.jsx";
// import ImageComponent  from "./Components/Facker-Project/imageClick";
//import Calculate from "./Components/calculate-for-BindMethod/calculate";
//import BindComponent from "./Components/BindMethods/BindComponent.jsx";
//import ParentComponent from "./Components/Destruturing/ParentComponent.jsx";
//import OnCilickEvent from "./Components/EventHandling/OnClickEvent.jsx";
//import EventHandlerParent from "./Components/EventHandling/EventHandlerParent.jsx";
//import NormalRefs from "./Components/RefsConcepts/NormalRefs.js";
//import CallBackRefs from "./Components/RefsConcepts/CallBackRefs.js";
//import PortalComponent from "./Components/Portals/portalsComponment.js";
//import ButtonComp from "./Components/HeigherOrderConcepts/ButtonComponent.js";
//import HowerComp from "./Components/HeigherOrderConcepts/HowerComponent.js";
// import ClickComp from "./Components/RederPropsConceps/ClickComponent.js";
// import HoweCom from "./Components/RederPropsConceps/HowerComp.js";
// import RenderPropd from "./Components/RederPropsConceps/RenderProps.js";
// import ComponentA from "./Components/ContextConcepts/ComponentA.js";
// import {UserProvider} from "./Components/ContextConcepts/ContexComp.js";
// import GetComp from "./Components/HttpConceps/GetComponent.js";
import PostComp from "./Components/HttpConceps/PostCom.js";



// ======Routes==========
// import RouterComponent from "./Components/RoutesComponent/RouterComponent.jsx";
// import homepage from "./Components/RoutesComponent/homepage.jsx";
// import LoginComponent from "./Components/RoutesComponent/AuthComponent/LoginComponent.jsx";
// import RegisterComponent from "./Components/RoutesComponent/AuthComponent/RegisterComponent.jsx";
// ======Routes  End==========


class  App extends Component{
  state={                      //here this data connected to PlayersListCompomnent
    //     Players: [
    //   {
    //     name: "Sachin Ramesh Tendulkar",
    //     id: "1",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/128400/128483.1.jpg",
    //     runs: "34347",
    //   },
    //   {
    //     name: "Rahul Sharad Dravid",
    //     id: "2",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/108400/108439.1.jpg",
    //     runs: "24177",
    //   },
    //   {
    //     name: "Sourav Chandidas Ganguly",
    //     id: "3",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/92300/92389.1.jpg",
    //     runs: "18575",
    //   },
    //   {
    //     name: "Brian Charles Lara",
    //     id: "4",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/66100/66199.1.jpg",
    //     runs: "22358",
    //   },
    //   {
    //     name: "Yuvraj Singh",
    //     id: "5",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/202600/202671.1.jpg",
    //     runs: "10601",
    //   },
    //   {
    //     name: "Virat Kohli",
    //     id: "6",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg",
    //     runs: "14503",
    //   },
    //   {
    //     name: "Ricky Thomas Ponting",
    //     id: "7",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/202600/202613.1.jpg",
    //     runs: "27082",
    //   },
    //   {
    //     name: "Jacques Henry Kallis",
    //     id: "8",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/203100/203133.1.jpg",
    //     runs: "24868",
    //   },
    //   {
    //     name: "Mahendra Singh Dhoni",
    //     id: "9",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/263700/263705.20.jpg",
    //     runs: "15583",
    //   },
    //   {
    //     name: "Vangipurappu Venkata Sai Laxman",
    //     id: "10",
    //     photo: "http://p.imgci.com/db/PICTURES/CMS/92300/92394.1.jpg",
    //     runs: "11119",
    //   },
    // ],
  }
  render(){
    return (
      <Fragment>
        <Router>
    <div className="App">
      {/*<Username />*/}           {/* this is related to  functionalCompoment code , and insted of Username we can use anothr name also*/}      
      {/*<Passowrd />*/}           {/* this is related to  ClassCompoment code , and insted of Password we can use anothe name*/}
        {/* <Mobile company="Vivo"  prize="16000" model="y91">  */}
       {/*<p>this is children to the Moblie</p>  </Mobile>*/}      {/* here passing props form parant to child  */}
    {/* <StateComponent/> */}
    {/* <UpdatingState/> */}
    {/* <PlayerList AllPlayers={this.state.Players}/>   */}
    {/* <SetState/> */}
    {/* <FackerComponent/> */}
    {/* <ImageComponent/> */}
   {/* <Calculate/> */}
   {/* <BindComponent/> */}
   {/* <ParentComponent/> */}
   {/* <OnCilickEvent/> */}
   {/* <EventHandlerParent/> */}
   {/* <NormalRefs/> */}
   {/* <CallBackRefs/> */}
   {/* <PortalComponent/> */}
   {/* <ButtonComp/>
   <HowerComp/> */}
   {/*<RenderPropd render={(count, increseCount)=> (
      <ClickComp count={count} increseCount={increseCount}/>)}/>
      <RenderPropd render={(count, increseCount)=> (
      <HoweCom count={count} increseCount={increseCount}/>)}/> */}

      {/* <UserProvider >
        <ComponentA />
      </UserProvider> */}
      {/* <GetComp/> */}
      <PostComp/>

   {/* <header>
      <RouterComponent/>
    </header>
      <main className="container">
        <Route exact path="/"  component={homepage} />
        <Route exact path="/login"  component={LoginComponent} />
        <Route exact path="/register"   component={RegisterComponent} />
      </main> */}
    </div>
     </Router>
    </Fragment>
  );
  }
}

export default App;
