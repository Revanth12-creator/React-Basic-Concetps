//React Router, and dynamic, client-side routing, allows us to build a single-page web application .
//with navigation without the page refreshing as the user navigates.
//
import React, { Fragment ,Component} from "react";
import "./RouterComponent.css";
import {Link} from "react-router-dom";
class RouterComponent extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return(
            <Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand" href="#">Flip-Card</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav   ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/register">Register</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
            </Fragment>
        )
    }
}
export default RouterComponent;