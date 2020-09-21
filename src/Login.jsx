import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";
import { voteAngular, setLoginType } from "./actions";

import Card from "react-bootstrap/Card";

class Login extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.handleVoteAngular = this.handleVoteAngular.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleVoteAngular() {
    this.props.voteAngular(1);
  }

  handleLogin(num) {
    this.props.setLoginType(num);
    this.props.history.push("/dashboard");
    //this.props.setLoginType.bind(this, 1)
  }

  render() {
    return (
      <div className="loginPage">
        <Container fluid style={{ height: "100vh" }}>
          <Row style={{ height: "100%" }} className="align-items-center">
            <Col md={{ span: 4, offset: 4 }}>
              <Card className="loginBox text-center">
                <Card.Header className="bg-primary">
                  <div className="titleHeader d-flex align-items-center justify-content-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-m-white.png"
                      alt="Airlines Reporting Corporation"
                    />{" "}
                    Image Maker
                  </div>
                </Card.Header>

                <Card.Body>
                  <h2 className="font-weight-bold">Sign In</h2>
                  <Card.Text>Chose your department:</Card.Text>
                  <Button
                    onClick={this.handleLogin.bind(this, 0)}
                    variant="primary"
                    size="lg"
                  >
                    Marketing
                  </Button>{" "}
                  <Button
                    onClick={this.handleLogin.bind(this, 1)}
                    variant="secondary"
                    size="lg"
                  >
                    HR
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  voteAngular,
  setLoginType
};

const mapStateToProps = state => ({
  angular: state.angular,
  loginType: state.loginType
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
