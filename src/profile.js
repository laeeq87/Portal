import "./App.css";
import React from "react";
import { Card, Row, Col } from 'react-bootstrap'

const profileDate = [
{title: "Profile A", text: "Herr Max Mustermann"},
{title: "Profile B", text: "Frau Mina Musterfrau"}];

export default class Profile extends React.Component {

constructor(props) {
    super(props);
    this.nextPath = this.nextPath.bind(this);
    }
    
  
  nextPath(path) {
    this.props.history.push(path);
  }

  onClickCard (profileData) {
    sessionStorage.setItem("profileTitle", profileData.text.toString());
      this.nextPath("/account");
  }

  render() {
    return (
      <div data-testid="tst-profile">
          <Row xs={1} md={4} className="d-flex justify-content-center">
            {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                <Card onClick={()=> this.onClickCard(profileDate[idx])}>
                    <Card.Body>
                    <Card.Title>{profileDate[idx].title}</Card.Title>
                    <Card.Text>
                    {profileDate[idx].text}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>  
      </div>
    );
  }
}
