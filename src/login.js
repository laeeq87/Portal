import "./App.css";
import React from "react";
import Modal from 'react-bootstrap/Modal'
import Profile from "./profile";
import { emailValidator, passwordValidation } from "./helpers/emailValidator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.nextPath = this.nextPath.bind(this);
    this.state = {
      showPorfile: false,
      email: '',
      password: ''
    };
    if (sessionStorage.getItem("login") && sessionStorage.getItem("login") === "true"){
      this.nextPath("/account");
    }
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  notify = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  showPopUp () {
   return (
        <Modal
          show={true}
          onHide={() => this.setState({showPorfile: false})}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size='lg'
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Please select Your Porfile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Profile {...this.props}/>
          </Modal.Body>
        </Modal>
   )
  }

  valid () {
    const { email, password } = this.state
     if (email.length < 1 || password.length < 7 ) {
       return true;
     }
     return false
   }

  onClickLogin() {
    if (!emailValidator(this.state.email)) {
      this.notify("Please provide the valid email")
      return;
    } else if (!passwordValidation(this.state.password)) {
      this.notify("Password must contain minimum eight characters, at least one letter , one number & one symbol")
      return;
    }

    sessionStorage.setItem("login", "true");
    sessionStorage.setItem("loginEmail", this.state.email);
    this.setState({showPorfile: true})
  }

  render() {
    return (
      <div data-testid="tst-login">
        <div
          className="row justify-content-center align-items-center mt-5"
          style={{ height: "70vh" }}
        >
          <div className="col-md-3 pb-5  my-border">
            <div className="row justify-content-center align-items-cente">
              <h4 className="text-center my-5">Login</h4>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(event)=> {this.setState({email: event.target.value})}}
                />
                <label style={{ left: 10 }} data-testid="tst-login-input-email">
                  Email address
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(event)=> {this.setState({password: event.target.value})}}
                />
                <label style={{ left: 10 }}>
                  Password
                </label>
              </div>
              <div className="row justify-content-center align-items-center mt-5">
                <div className="col-6 text-center">
                  <button className="btn btn-primary" data-testid="tst-login-btn" style={{height:50, width:115}} disabled={this.valid()} onClick={() => this.onClickLogin()}>login</button>
                </div>
              </div>
              {this.state.showPorfile === true ? this.showPopUp() : <div></div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
