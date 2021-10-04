import React, { Component } from 'react';
class OnCilickEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:"",
            items:[]
          }
          this.handleChamnge=this.handleChamnge.bind(this);
          this.onSubmit=this.onSubmit.bind(this);
    }
    handleChamnge(event){
        this.setState({
             [event.target.name]:event.target.value,
            //  items:this.state.item
        })
        // console.log(this.state.items)
    }
    onSubmit(event){
        event.preventDefault();
        let fitstItem=this.state.item;
        let listItems=this.state.items;
        listItems.push(fitstItem);
        this.setState({
            items:listItems
        })
      
    }
    render() { 
    //  let {items}=this.state;
    //  let data= this.state.items.map( data => {
    //     console.log(data)
    // })
    // let {items}=this.state;
        return ( 
            <div>
                <h1>OnCilickEvent</h1>
                <input type="text" name="item" value={this.item} onChange={this.handleChamnge}/>
                <button onClick={this.onSubmit}>Submit</button>
                <div className="card col-4 mx-auto my-4">{this.state.items.map(data => <h1>{data}</h1>)}</div>
              
                {/* <h1>{this.state.items}</h1> */}
            </div>
         );
    }
}
 
export default OnCilickEvent;