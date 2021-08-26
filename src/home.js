import React, { Component } from "react";
import Nav from "./nav";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-11">
              <Nav />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
