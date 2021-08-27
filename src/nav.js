import React from "react";
import { Link } from "react-router-dom";



export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.nextPath = this.nextPath.bind(this);
    this.state = {
      linkActive: 0
    };
  }


  componentDidMount() {
    if (!sessionStorage.getItem("login")) {
      this.nextPath('/login')

    }
  }

  nextPath(path) {
    this.props.history.push(path);
  }


  renderNavigationData() {
    console.log('PROPS ==>', this.props);
    const props = this.props;
    if (props.match.params.id === 'profile') {
      return sessionStorage.getItem("profileTitle")
    } else if (props.match.params.id  === 'user') {
      return sessionStorage.getItem("loginEmail")
    }
  }

  onLinkClick(linkCicked) {
    this.setState({linkActive: linkCicked})

  }

  render() {
    return (
      <div data-testid="tst-nav">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{ width: "100%" }} >
            <div className="nav-link" role="tab" aria-controls="nav-home"> <h5> My Account </h5></div>
  
            <Link to={`/account/profile`} className="text-decoration-none" onClick={()=> this.onLinkClick(0)} >
                <button className={`nav-link ${this.state.linkActive === 0 ? 'active' :''}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-user" type="button" role="tab" aria-controls="nav-profile" aria-selected="true" >
                  Profile
                </button>
            </Link>

            <Link to={`/account/user`} className="text-decoration-none" onClick={()=> this.onLinkClick(1)}>
              <button className={`nav-link ${this.state.linkActive === 1 ? 'active' :''}`}  id="nav-user-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-user" aria-selected="true" >
                User
              </button>
            </Link>
          </div>
        </nav>


        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active mt-5" id="nav-user" role="tabpanel" aria-labelledby="nav-profile-tab" >
             <h3>{this.renderNavigationData()}</h3>
          </div>
        </div>
      </div>
    );
  }
}