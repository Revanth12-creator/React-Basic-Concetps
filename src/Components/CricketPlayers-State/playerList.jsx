import React from "react";
import "./playerList.css";
 let PlayerList=(props) => {
  let list=props.AllPlayers;
  // console.log(list)
  return (
    <div>
        <h1>List Of Players</h1>
        <section>
            <div className="playerBlock">
                {list.map((palyer) => (
                  <div className="card">
                    <img className="image-card-top"
                    src={palyer.photo}
                    alt={palyer.name}/>
                    <div  className="card-body">
                       <h1>{palyer.name}</h1>
                       <h3>Runs: {palyer.runs}</h3>
                    </div>
                  </div>
                ))}         
            </div>
        </section>
    </div>
  )
 }
export default PlayerList;
