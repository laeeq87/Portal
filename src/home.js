import React, { Component } from "react";
import Nav from "./nav";

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div data-testid="tst-home">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-11" data-testid="tst-home-nav">
              <Nav {...this.props}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
