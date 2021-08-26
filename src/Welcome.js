import "./App.css";
import React from "react";
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.nextPath = this.nextPath.bind(this);
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("login") === 'true') {
      this.setState({isLogin:true })
    }
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  loginTextRender() {
    return this.state.isLogin === true ? <h5>Welcome back: {sessionStorage.getItem("profileTitle")}</h5> : <h5>Please Go to Login :</h5>;
  }

  loginButtonRender() {
    return this.state.isLogin === true ? <button className="btn btn-primary" onClick={() => this.nextPath("/account")} > My Account </button> : <button className="btn btn-primary" onClick={() => this.nextPath("/login")} > Login </button>
  }

  render() {

    return (
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center align-items-cente">
            <div className="col-6 text-center my-5 my-border">
              <div className="row justify-content-center my-5 align-items-cente">
                <div className="col-md-12 text-center ">
                  <h3> Welcome to our Portal</h3>
                </div>
                <div className="col-md-8 text-center mt-4">
                  {this.loginTextRender()}
                  {this.loginButtonRender()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
