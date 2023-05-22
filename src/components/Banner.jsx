import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";
import { voteAngular, setLoginType } from "../actions";

import Card from "react-bootstrap/Card";

function setLogoPosition(pos) {
  var posObj = { bottom: "auto", right: "auto", top: "auto", left: "auto" };
  if (pos.indexOf("bottom") > -1) {
    posObj.bottom = 0;
  }
  if (pos.indexOf("right") > -1) {
    posObj.right = 0;
  }
  if (pos.indexOf("top") > -1) {
    posObj.top = 0;
  }
  if (pos.indexOf("left") > -1) {
    posObj.left = 0;
  }

  return posObj;
}

class Banner extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    var t = this;
    return (
      <div className="dashboardWrapper">
        <div
          id="myImage"
          className={"imageBox " + (this.props.unZoom == true ? "unZoom" : "")}
          style={this.props.imageBoxStyle}
        >
          <div className="textBox" style={this.props.textBoxStyle}>
            <div
              className={
                "textContent " +
                (this.props.textContentCenter == "true"
                  ? "textContentCenter"
                  : "")
              }
              style={this.props.textContentStyle}
            >
              {this.props.textContent &&
                this.props.textContent.map((data, i) => {
                  return (
                    <div key={i} style={data.style}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        dangerouslySetInnerHTML={{ __html: data.text }}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  voteAngular,
  setLoginType,
};

const mapStateToProps = (state) => ({
  angular: state.angular,
  loginType: state.loginType,
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
