import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import Form from "react-bootstrap/Form";

import Banner from "./components/Banner";

const htmlToImage = require("html-to-image");
const download = require("downloadjs");

import templatesMarketing from "./templates";

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

function getBorder(value, type) {
  var size = value.split(" ")[0];
  var color = value.split(" ")[2];

  if (type == "size") {
    return size;
  }

  return color;
}

function bgURL(url) {
  var regExp = /\(([^\)]+)\)/;
  var matches = regExp.exec(url);

  if (matches == null) {
    return "";
  }
  return matches[1];
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageBoxStyle: {
        height: "650px",
        width: "1250px",
        backgroundImage:
          "url(https://www2.arccorp.com/globalassets/imageMaker/airplanes/2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        justifyContent: "center"
      },
      textBoxHex: "#189bb0",
      textBoxOpacity: "0.9",
      textBoxStyle: {
        background: "rgba(24, 155, 176,0.9)",
        width: "70%",
        padding: "15px",
        margin: "15px",
        height: "auto",
        borderLeft: "0px solid transparent",
        borderRight: "0px solid transparent",
        borderTop: "12px solid #8AC926",
        borderBottom: "0px solid transparent"
      },
      textContentStyle: { width: "100%", margin: "0 auto", height: "auto" },
      arcLogoStyle: {
        show: "block",
        color: "white",
        position: "bottom right",
        size: "s",
        padding: "15px"
      },
      textContent: [
        {
          style: {
            color: "#8AC926",
            fontWeight: "600",
            fontSize: "30px",
            padding: "10px 15px",
            textAlign: "center"
          },
          text: "Eyebrow Title"
        },
        {
          style: {
            color: "#FFFFFF",
            fontWeight: "400",
            fontSize: "72px",
            padding: "15px",
            textAlign: "center"
          },
          text: "Lorem Ipsum \n<br/>Dolor Sit Amet"
        },
        {
          style: {
            color: "#ffffff",
            fontWeight: "400",
            fontSize: "32px",
            padding: "15px",
            textAlign: "center"
          },
          text: "Date: <strong>08/12/2020</strong>"
        }
      ],
      textContentCenter: false,
      saveImage: false,
      imageCategory: "all",
      backgroundImages: {
        airplanes: [
          {
            name: "Airplane at airport 1",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/1.jpg"
          },
          {
            name: "Airplane at airport 2",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/2.jpg"
          },
          {
            name: "Airplane at airport 3",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/3.jpg"
          },
          {
            name: "Airplane at airport 4",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/4.jpg"
          },
          {
            name: "Airplane at airport 5",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/5.jpg"
          },
          {
            name: "Airplane at airport 6",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/6.jpg"
          },
          {
            name: "Airplane at airport 7",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/7.jpg"
          },
          {
            name: "Airplane at airport 8",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/8.jpg"
          },
          {
            name: "Airplane at airport 9",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/9.jpg"
          },
          {
            name: "Airplane at airport 10",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/10.jpg"
          },
          {
            name: "Airplane at airport 11",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/11.jpg"
          },
          {
            name: "Airplane at airport 12",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/12.jpg"
          },
          {
            name: "Airplane at airport 13",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/13.jpg"
          },
          {
            name: "Airplane at airport 14",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/14.jpg"
          },
          {
            name: "Airplane at airport 15",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/15.jpg"
          },
          {
            name: "Airplane at airport 16",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/16.jpg"
          },
          {
            name: "Airplane at airport 17",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/17.jpg"
          },
          {
            name: "Airplane at airport 18",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/18.jpg"
          },
          {
            name: "Airplane at airport 19",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/19.jpg"
          },
          {
            name: "Airplane at airport 20",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/20.jpg"
          },
          {
            name: "Airplane at airport 21",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/21.jpg"
          },
          {
            name: "Airplane at airport 22",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/22.jpg"
          },
          {
            name: "Airplane at airport 23",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/23.jpg"
          },
          {
            name: "Airplane at airport 24",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/24.jpg"
          },
          {
            name: "Airplane at airport 25",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/25.jpg"
          },
          {
            name: "Airplane at airport 26",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/26.jpg"
          },
          {
            name: "Airplane at airport 27",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/27.jpg"
          },
          {
            name: "Airplane at airport 28",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/28.jpg"
          },
          {
            name: "Airplane at airport 29",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/29.jpg"
          },
          {
            name: "Airplane at airport 30",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/30.jpg"
          },
          {
            name: "Airplane at airport 31",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/31.jpg"
          },
          {
            name: "Airplane at airport 32",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/32.jpg"
          },
          {
            name: "Airplane at airport 33",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/33.jpg"
          },
          {
            name: "Airplane at airport 34",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/34.jpg"
          },
          {
            name: "Airplane at airport 35",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/35.jpg"
          },
          {
            name: "Airplane at airport 36",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/36.jpg"
          },
          {
            name: "Airplane at airport 37",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/37.jpg"
          },
          {
            name: "Airplane at airport 38",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/38.jpg"
          },
          {
            name: "Airplane at airport 39",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/39.jpg"
          },
          {
            name: "Airplane at airport 40",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/40.jpg"
          },
          {
            name: "Airplane at airport 41",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/41.jpg"
          },
          {
            name: "Airplane at airport 42",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/42.jpg"
          },
          {
            name: "Airplane at airport 43",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/airplanes/43.jpg"
          }
        ],
        arc: [
          {
            name: "One Person Focus, Sitting",
            tag: "Richard Gordon",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-1.jpg"
          },
          {
            name: "One Person Focus - Lobby ",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-2.jpg"
          },
          {
            name: "Conversation - Lobby ",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-3.jpg"
          },
          {
            name: "One Person Focus - Smiling ",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-4.jpg"
          },
          {
            name: "Working on laptop",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-5.jpg"
          },
          {
            name: "Working on laptop - Lobby ",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-6.jpg"
          },
          {
            name: "iPad Presenting - Two People",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-7.jpg"
          },
          {
            name: "Meeting Room",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-8.jpg"
          },
          {
            name: "Jovial Meeting",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-4.jpg"
          },
          {
            name: "Clarendon Station",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-10.jpg"
          },
          {
            name: "Outside - Funny",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-11.jpg"
          },
          {
            name: "Outside - Serious ",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-12.jpg"
          },
          {
            name: "Outside - Luggage",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-13.jpg"
          },
          {
            name: "Overhead Meeting Room",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-14.jpg"
          },
          {
            name: "White Meeting Room",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-15.jpg"
          },
          {
            name: "One Person Focus - Thinking",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-15.jpg"
          },
          {
            name: "One Person Focus - Thinking",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-16.jpg"
          },
          {
            name: "One Person Focus - iPad Whiteboard",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-17.jpg"
          },
          {
            name: "Three Person - iPad Presenting",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-18.jpg"
          },
          {
            name: "Multiple Meetings - Glass Divider",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-19.jpg"
          },
          {
            name: "Three Person - Whiteboard",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-20.jpg"
          },
          {
            name: "Three Person - Standing, iPads",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-21.jpg"
          },
          {
            name: "Blue Room Meeting",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-22.jpg"
          },
          {
            name: "Office Meeting - Quote",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-23.jpg"
          },
          {
            name: "Five People - Blue Room",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-24.jpg"
          },
          {
            name: "Lobby - Luggage",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-25.jpg"
          },
          {
            name: "People Co-working",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-26.jpg"
          },
          {
            name: "Rainbow Parachute - Pride",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-27.jpg"
          },
          {
            name: "Monitor with code",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-28.jpg"
          },
          {
            name: "Airport Hallway - Luggage",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-29.jpg"
          },
          {
            name: "Bulletin - Luggage",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-30.jpg"
          },
          {
            name: "Above the Clouds",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-31.jpg"
          },
          {
            name: "Man on Flight",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-32.jpg"
          },
          {
            name: "Sunlight and Clouds",
            image:
              "https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-33.jpg"
          }
        ],
        technology: [
          {
            name: "Computer Typing",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/GettyImages-860310256.jpg"
          },
          {
            name: "Overhead Computer",
            image:
              "https://www2.arccorp.com/globalassets/imageMaker/GettyImages-864246666.jpg"
          },
          {
            name: "Data Grid",
            image:
              "https://www2.arccorp.com/globalassets/homepage/redesign/slides/carousel15.jpg"
          }
        ]
      },
      settingsMenu: "Content",
      unZoom: false
    };

    this.updateImage = this.updateImage.bind(this);
    this.catSelect = this.catSelect.bind(this);
    this.settingsChange = this.settingsChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.templateSizeUpdate = this.templateSizeUpdate.bind(this);
    this.textStyleChange = this.textStyleChange.bind(this);
    this.textBoxChange = this.textBoxChange.bind(this);
    this.bgSelectProp = this.bgSelectProp.bind(this);
    this.textContentStyleChange = this.textContentStyleChange.bind(this);
    this.imageBoxStyleChange = this.imageBoxStyleChange.bind(this);
    this.imageCenter = this.imageCenter.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.setBorder = this.setBorder.bind(this);
    this.setTemplate = this.setTemplate.bind(this);
    this.arcLogoStyleChange = this.arcLogoStyleChange.bind(this);
  }

  bgSelectProp(key) {
    var e = event.target.value;
    var t = this;

    var temp = {
      height: t.state.imageBoxStyle.height,
      width: t.state.imageBoxStyle.width,
      backgroundImage:
        key == "backgroundImage"
          ? "url(" + e + ")"
          : t.state.imageBoxStyle.backgroundImage,
      backgroundSize: t.state.imageBoxStyle.backgroundSize,
      backgroundPosition: t.state.imageBoxStyle.backgroundPosition,
      backgroundRepeat: t.state.imageBoxStyle.backgroundRepeat,
      alignItems: t.state.imageBoxStyle.alignItems,
      justifyContent: t.state.imageBoxStyle.justifyContent
    };

    if (key == "backgroundImage") {
      temp[key] = "url(" + e + ")";
    } else {
      temp[key] = e;
    }

    this.setState({
      imageBoxStyle: temp
    });
  }

  setBorder(borderProperty, key) {
    var currentValue = this.state.textBoxStyle[key];
    var size = this.state.textBoxStyle[key].split(" ")[0];
    var color = this.state.textBoxStyle[key].split(" ")[2];

    var temp = {
      background: this.state.textBoxStyle.background,
      width: this.state.textBoxStyle.width,
      width: this.state.textBoxStyle.width,
      padding: this.state.textBoxStyle.padding,
      margin: this.state.textBoxStyle.margin,
      height: this.state.textBoxStyle.height,
      borderLeft: this.state.textBoxStyle.borderLeft,
      borderRight: this.state.textBoxStyle.borderRight,
      borderTop: this.state.textBoxStyle.borderTop,
      borderBottom: this.state.textBoxStyle.borderBottom
    };

    if (borderProperty == "size") {
      size = event.target.value;
    } else if (borderProperty == "color") {
      color = event.target.value;
    }

    var val = size + " solid " + color;

    temp[key] = val;

    this.setState({ textBoxStyle: temp });
  }

  onFileChange() {
    var file = event.target.files[0];
    var blob = URL.createObjectURL(file);
    var background = blob.split("?")[0];

    this.imageBoxStyleChange({
      backgroundImage: "url(" + background + ")"
    });
  }

  imageCenter() {
    var e = event.target.value;

    this.setState({ textContentCenter: e });
  }

  textContentStyleChange(key) {
    var e = event.target.value;

    var temp = {
      width: "100%",
      margin: "0 auto",
      height: "auto"
    };

    temp[key] = e;

    this.setState({ textContentStyle: temp });
  }

  templateSizeUpdate() {
    var e = event.target.value;
    if (e == "Twitter") {
      this.imageBoxStyleChange({
        width: "1250px",
        height: "650px"
        //paddingBottom: (650.0 / 1250.0) * 100.0 + "%"
      });
    } else if (e == "Facebook") {
      this.imageBoxStyleChange({
        width: "960px",
        height: "720px"
        //paddingBottom: (720.0 / 960.0) * 100.0 + "%"
      });
    } else if (e == "LinkedIn") {
      this.imageBoxStyleChange({
        width: "1024px",
        height: "530px"
        //paddingBottom: (530.0 / 1024.0) * 100.0 + "%"
      });
    } else if (e == "YouTube") {
      this.imageBoxStyleChange({
        width: "1280px",
        height: "720px"
        //paddingBottom: (720.0 / 1280.0) * 100.0 + "%"
      });
    }

    //console.log(this.state.imageBoxStyle);
  }

  imageBoxStyleChange(updateObject) {
    var t = this;

    var temp = {
      height: t.state.imageBoxStyle.height,
      width: t.state.imageBoxStyle.width,
      backgroundImage: t.state.imageBoxStyle.backgroundImage,
      backgroundSize: t.state.imageBoxStyle.backgroundSize,
      backgroundPosition: t.state.imageBoxStyle.backgroundPosition,
      backgroundRepeat: t.state.imageBoxStyle.backgroundRepeat,
      alignItems: t.state.imageBoxStyle.alignItems,
      justifyContent: t.state.imageBoxStyle.justifyContent
    };

    for (const key in updateObject) {
      temp[key] = updateObject[key];
      console.log(updateObject[key]);
    }

    this.setState({
      imageBoxStyle: temp
    });
  }

  arcLogoStyleChange(key) {
    var e = event.target.value;

    var temp = {
      show: this.state.arcLogoStyle.show,
      color: this.state.arcLogoStyle.color,
      position: this.state.arcLogoStyle.position,
      size: this.state.arcLogoStyle.size,
      padding: this.state.arcLogoStyle.padding
    };

    temp[key] = e;

    this.setState({ arcLogoStyle: temp });
  }

  textChange(index) {
    var e = event.target.value;
    var length = this.state.textContent.length;
    var t = this;

    var temp = [];

    for (var i = 0; i < length; i++) {
      temp.push({
        style: t.state.textContent[i].style,
        text: t.state.textContent[i].text
      });
    }

    temp[index].text = e;

    this.setState({ textContent: temp });
  }

  textStyleChange(index, key) {
    var e = event.target.value;
    var length = this.state.textContent.length;
    var t = this;

    var tempStyle = {
      color: this.state.textContent[index].style.color,
      fontWeight: this.state.textContent[index].style.fontWeight,
      fontSize: this.state.textContent[index].style.fontSize,
      padding: this.state.textContent[index].style.padding,
      textAlign: this.state.textContent[index].style.textAlign
    };

    //console.log(tempStyle);

    var temp = [];

    for (var i = 0; i < length; i++) {
      temp.push({
        style: t.state.textContent[i].style,
        text: t.state.textContent[i].text
      });
    }

    tempStyle[key] = e;

    temp[index].style = tempStyle;

    this.setState({ textContent: temp });
  }

  textBoxChange(key) {
    var e = event.target.value;
    var t = this;

    var temp = {
      background: this.state.textBoxStyle.background,
      width: this.state.textBoxStyle.width,
      width: this.state.textBoxStyle.width,
      padding: this.state.textBoxStyle.padding,
      margin: this.state.textBoxStyle.margin,
      height: this.state.textBoxStyle.height,
      borderLeft: this.state.textBoxStyle.borderLeft,
      borderRight: this.state.textBoxStyle.borderRight,
      borderTop: this.state.textBoxStyle.borderTop,
      borderBottom: this.state.textBoxStyle.borderBottom
    };

    var opacity = temp.background.split(",")[3].replace(")", "");
    console.log(opacity);

    if (key == "background") {
      this.setState({ textBoxHex: e });
      var hex = hexToRgb(e);
      e = "rgba(" + hex.r + "," + hex.g + "," + hex.b + "," + opacity + ")";
    }

    //console.log(temp.background);

    if (key == "opacity") {
      this.setState({ textBoxOpacity: e });
      var rgba = temp.background.replace(opacity, e);
      console.log(rgba);
      e = rgba;
      key = "background";
    }

    temp[key] = e;

    console.log(temp);

    this.setState({ textBoxStyle: temp });
  }

  settingsChange(event) {
    //console.log(event);
    this.setState({ settingsMenu: event.replace("/", "").replace("#", "") });
  }

  catSelect(select) {
    var t = this;
    var e = event.target.value;
    this.setState({ imageCategory: e });

    var firstItem = this.state.backgroundImages[e][0].image;

    var temp = {
      height: t.state.imageBoxStyle.height,
      width: t.state.imageBoxStyle.width,
      backgroundImage: "url(" + firstItem + ")",
      backgroundSize: t.state.imageBoxStyle.backgroundSize,
      backgroundPosition: t.state.imageBoxStyle.backgroundPosition,
      backgroundRepeat: t.state.imageBoxStyle.backgroundRepeat,
      alignItems: t.state.imageBoxStyle.alignItems,
      borderLeft: t.state.imageBoxStyle.borderLeft,
      borderRight: t.state.imageBoxStyle.borderRight,
      borderTop: t.state.imageBoxStyle.borderTop,
      borderBottom: t.state.imageBoxStyle.borderBottom,
      justifyContent: t.state.imageBoxStyle.justifyContent
    };

    this.setState({
      imageBoxStyle: temp
    });
  }

  saveImage(imageName) {
    var t = this;
    t.setState({ unZoom: true });
    htmlToImage
      .toJpeg(document.getElementById("myImage"), { quality: 1, pixelRatio: 1 })
      .then(function(dataUrl) {
        download(dataUrl, imageName);
        t.setState({ unZoom: false });
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error);
      });

    this.setState({ unZoom: false });
    console.log(this.state.imageBoxStyle);
  }

  updateImage(imageName) {
    this.setState({ unZoom: true }, this.saveImage(imageName));
  }

  setTemplate(type) {
    var i = event.target.value;

    var template = templatesMarketing;

    if (type == "hr") {
      //temlate = templateHR;
    }

    template[i].template["imageCategory"] = "all";
    template[i].template["settingsMenu"] = "Content";
    template[i].template["unZoom"] = false;
    template[i].template["backgroundImages"] = this.state.backgroundImages;

    console.log(template[i].template);

    this.setState(template[i].template);
  }

  /*componentDidUpdate() {
    var widthVar = this.state.imageBoxStyle.width.replace("px", "");
    var heightVar = this.state.imageBoxStyle.height.replace("px", "");

    var ratio = (heightVar / widthVar) * 100 + "%";

    this.imageBoxStyleChange({ paddingBottom: ratio });
  }*/

  render() {
    //console.log(this.props.loginType);

    var e = this;

    var widthVar = this.state.imageBoxStyle.width.replace("px", "");
    var heightVar = this.state.imageBoxStyle.height.replace("px", "");

    var ratio = (heightVar / widthVar) * 100 + "%";

    //this.imageBoxStyleChange.bind(this, { paddingBottom: ratio });

    return (
      <div>
        <div className="topNav">
          <Row className="align-items-center">
            <Col>
              <div className="topNavBranding d-flex align-items-center">
                <img
                  src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-teal.png"
                  alt="ARC Logo"
                  className="arcLogo"
                />
                Image Maker
              </div>
            </Col>
            <Col className="d-flex justify-content-end">
              <ExportModal stateObj={this.state} />
              <SaveModal
                size={
                  this.state.imageBoxStyle.width +
                  " by " +
                  this.state.imageBoxStyle.height
                }
                saveImage={this.updateImage}
              />
            </Col>
          </Row>
        </div>

        <div className="dashboardPage">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="imageSection">
                  <div className="dashboardControlsTop">
                    <Form>
                      <div className="row">
                      <div className="col-md-6">
                          <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Template</Form.Label>
                            <Form.Control
                              style={{ marginBottom: "10px" }}
                              size="sm"
                              as="select"
                              onChange={this.setTemplate.bind(
                                this,
                                "Marketing"
                              )}
                            >
                              <option>Choose Template</option>
                              {templatesMarketing.map(function(item, i) {
                                return (
                                  <option key={i} value={i}>
                                    {templatesMarketing[i].name}
                                  </option>
                                );
                              })}
                            </Form.Control>

                            <Form.Control
                              size="sm"
                              as="select"
                              onChange={this.templateSizeUpdate}
                            >
                              <option value="Twitter">
                                Twitter (1250x650)
                              </option>
                              <option value="Facebook">
                                Facebook (960x720)
                              </option>
                              <option value="YouTube">
                                YouTube (1280x720)
                              </option>
                              <option value="LinkedIn">
                                LinkedIn (1024x539)
                              </option>
                            </Form.Control>
                          </Form.Group>

                          <Form inline>
                            <Form.Label className="mr-2">Size</Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              className="sizeSelect"
                              value={this.state.imageBoxStyle.width}
                              onChange={this.bgSelectProp.bind(this, "width")}
                            />
                            <Form.Control
                              size="sm"
                              type="text"
                              className="sizeSelect"
                              value={this.state.imageBoxStyle.height}
                              onChange={this.bgSelectProp.bind(this, "height")}
                            />
                          </Form>
                        </div>
                        <div className="col-md-4">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Background Image</Form.Label>
                            <Form.Control
                              size="sm"
                              as="select"
                              //id="bg-image-cat"
                              style={{ marginBottom: "10px" }}
                              onChange={this.catSelect}
                            >
                              <option value="all">All Categories</option>
                              <option value="airplanes">Airplanes</option>
                              <option value="arc">ARC</option>
                              <option value="technology">Technology</option>
                            </Form.Control>

                            <Form.Control
                              size="sm"
                              as="select"
                              //id="bg-image"
                              value={bgURL(
                                this.state.imageBoxStyle.backgroundImage
                              )}
                              onChange={this.bgSelectProp.bind(
                                this,
                                "backgroundImage"
                              )}
                            >
                              {this.state.imageCategory === "all"
                                ? Object.keys(e.state.backgroundImages).map(
                                    function(key, i) {
                                      var options = [];

                                      for (
                                        var j = 0;
                                        j <
                                        e.state.backgroundImages[key].length;
                                        j++
                                      ) {
                                        options.push(
                                          <option
                                            key={j + i}
                                            value={
                                              e.state.backgroundImages[key][j]
                                                .image
                                            }
                                          >
                                            {
                                              e.state.backgroundImages[key][j]
                                                .name
                                            }
                                          </option>
                                        );
                                      }

                                      return options;
                                    }
                                  )
                                : this.state.backgroundImages[
                                    e.state.imageCategory
                                  ].map(function(item, i) {
                                    return (
                                      <option key={i} value={item.image}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                            </Form.Control>
                          </Form.Group>
                          <div className="customUpload form-group mb-0">
                            <input
                              className="form-control-file mb-0"
                              type="file"
                              ref="myFiles"
                              onChange={this.onFileChange}
                            />
                          </div>
                        </div>
                        
                      </div>
                    </Form>
                  </div>

                  <Banner
                    //style={{ width: "100%", paddingBottom: ratio }}
                    imageBoxStyle={this.state.imageBoxStyle}
                    textBoxStyle={this.state.textBoxStyle}
                    textContentStyle={this.state.textContentStyle}
                    textContent={this.state.textContent}
                    textContentCenter={this.state.textContentCenter}
                    arcLogoStyle={this.state.arcLogoStyle}
                    saveImage={false}
                    unZoom={this.state.unZoom}
                  />
                </div>
              </div>
              <div className="col">
                <DropdownButton
                  id="settingsSectionButton"
                  title={this.state.settingsMenu}
                  variant="ghost"
                  style={{ marginTop: "15px" }}
                  onSelect={this.settingsChange}
                >
                  <Dropdown.Item href="#/Content">Content</Dropdown.Item>
                  <Dropdown.Item href="#/Styles">Styles</Dropdown.Item>
                  {/* <Dropdown.Item href="#/Logo">Logo</Dropdown.Item> */}
                </DropdownButton>

                <div className="settingsSection">
                  {this.state.settingsMenu === "Content" && (
                    <div>
                      {this.state.textContent.map((data, i) => {
                        return (
                          <div>
                          <div style={{ marginBottom: "15px" }} key={i}>
                            <Form.Label>Text {i + 1}</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows="3"
                              value={data.text}
                              onChange={this.textChange.bind(this, i)}
                            />
                            <Form inline>
                              <div className="mr-2">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                  size="sm"
                                  as="select"
                                  className="settingsSelect"
                                  value={data.style.color}
                                  onChange={this.textStyleChange.bind(
                                    this,
                                    i,
                                    "color"
                                  )}
                                >
                                  <optgroup label="">
                                    <option value="#FFFFFF">White</option>
                                  </optgroup>

                                  <optgroup label="Primary">
                                    <option value="#189bb0">ARC Teal</option>
                                    <option value="#2a2b2c">Tarmac</option>
                                    <option value="#d4d4d4">
                                      Altitude Gray
                                    </option>
                                  </optgroup>

                                  <optgroup label="Secondary">
                                    <option value="#316677">Concourse</option>
                                    <option value="#c6b593">Flap 3</option>
                                    <option value="#6d6e71">Fuseleage</option>
                                  </optgroup>

                                  <optgroup label="Tertiary">
                                    <option value="#383552">Nightshade</option>
                                    <option value="#f77f00">
                                      Signal Orange
                                    </option>
                                    <option value="#8AC926">Airfield</option>
                                  </optgroup>
                                </Form.Control>
                              </div>

                              <div className="mr-2">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control
                                  size="sm"
                                  as="select"
                                  className="settingsSelect"
                                  value={data.style.fontWeight}
                                  onChange={this.textStyleChange.bind(
                                    this,
                                    i,
                                    "fontWeight"
                                  )}
                                >
                                  <option value="200">Extra Light</option>
                                  <option value="300">Light</option>
                                  <option value="400">Regular</option>
                                  <option value="600">Bold</option>
                                  <option value="700">Black</option>
                                </Form.Control>
                              </div>

                              <div className="mr-2">
                                <Form.Label>Size</Form.Label>
                                <Form.Control
                                  size="sm"
                                  as="select"
                                  className="settingsSelect"
                                  value={data.style.fontSize}
                                  onChange={this.textStyleChange.bind(
                                    this,
                                    i,
                                    "fontSize"
                                  )}
                                >
                                  <option value="72px">72px</option>
                                  <option value="60px">60px</option>
                                  <option value="48px">48px</option>
                                  <option value="36px">36px</option>
                                  <option value="32px">32px</option>
                                  <option value="30px">30px</option>
                                  <option value="28px">28px</option>
                                  <option value="24px">24px</option>
                                  <option value="20px">20px</option>
                                  <option value="16px">16px</option>
                                </Form.Control>
                              </div>

                              <div className="mr-2">
                                <Form.Label>Align</Form.Label>
                                <Form.Control
                                  size="sm"
                                  as="select"
                                  className="settingsSelect"
                                  value={data.style.textAlign}
                                  onChange={this.textStyleChange.bind(
                                    this,
                                    i,
                                    "textAlign"
                                  )}
                                >
                                  <option value="left">Left</option>
                                  <option value="center">Center</option>
                                  <option value="right">right</option>
                                </Form.Control>
                              </div>

                              <div className="mr-2">
                                <Form.Label>Padding</Form.Label>
                                <Form.Control
                                  size="sm"
                                  type="text"
                                  className="settingsSelect"
                                  value={data.style.padding}
                                  onChange={this.textStyleChange.bind(
                                    this,
                                    i,
                                    "padding"
                                  )}
                                />
                              </div>
                            </Form>
                          </div>
                          <hr></hr>
                          <div>
                          <Form.Label>Logo Color</Form.Label>
                          <Form.Control
                            size="sm"
                            as="select"
                            className=""
                            value={this.state.arcLogoStyle.color}
                            onChange={this.arcLogoStyleChange.bind(this, "color")}
                          >
                            <option value="white">White</option>
                            <option value="teal">ARC Teal</option>
                            <option value="black">Black</option>
                            <option value="gray">Gray</option>
                          </Form.Control>
    
                          <Form.Label>Position</Form.Label>
                          <Form.Control
                            size="sm"
                            as="select"
                            className=""
                            value={this.state.arcLogoStyle.position}
                            onChange={this.arcLogoStyleChange.bind(
                              this,
                              "position"
                            )}
                          >
                            <option value="bottom right">Bottom Right</option>
                            <option value="bottom left">Bottom Left</option>
                            <option value="top right">Top Right</option>
                            <option value="top left">Top Left</option>
                          </Form.Control>
    
                          <Form.Label>Size</Form.Label>
                          <Form.Control
                            size="sm"
                            as="select"
                            className=""
                            value={this.state.arcLogoStyle.size}
                            onChange={this.arcLogoStyleChange.bind(this, "size")}
                          >
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                          </Form.Control>
    
                          <Form.Label className="mt-2">Logo Padding</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            className=""
                            value={this.state.arcLogoStyle.padding}
                            onChange={this.arcLogoStyleChange.bind(this, "padding")}
                          />
                        </div>
                        </div>
                        );
                      })}
                    </div>
                  )}
                  {this.state.settingsMenu === "Styles" && (
                    <div>
                      <Form.Label>Background Color</Form.Label>
                      <Form.Control
                        size="sm"
                        as="select"
                        className=""
                        value={this.state.textBoxHex}
                        onChange={this.textBoxChange.bind(this, "background")}
                      >
                        <option value="#FFFFFF">White</option>

                        <optgroup label="Primary">
                          <option value="#189bb0">ARC Teal</option>
                          <option value="#2a2b2c">Tarmac</option>
                          <option value="#d4d4d4">Altitude Gray</option>
                        </optgroup>

                        <optgroup label="Secondary">
                          <option value="#316677">Concourse</option>
                          <option value="#c6b593">Flap 3</option>
                          <option value="#6d6e71">Fuseleage</option>
                        </optgroup>

                        <optgroup label="Tertiary">
                          <option value="#383552">Nightshade</option>
                          <option value="#f77f00">Signal Orange</option>
                          <option value="#8AC926">Airfield</option>
                        </optgroup>
                      </Form.Control>
                      <Form.Label className="mt-2">Opacity</Form.Label>
                      <Form.Control
                        size="sm"
                        as="select"
                        className=""
                        value={this.state.textBoxOpacity}
                        onChange={this.textBoxChange.bind(this, "opacity")}
                      >
                        <option value="0">0</option>
                        <option value="0.1">0.1</option>
                        <option value="0.2">0.2</option>
                        <option value="0.3">0.3</option>
                        <option value="0.4">0.4</option>
                        <option value="0.5">0.5</option>
                        <option value="0.6">0.6</option>
                        <option value="0.7">0.7</option>
                        <option value="0.8">0.8</option>
                        <option value="0.9">0.9</option>
                        <option value="1.0">1.0</option>
                      </Form.Control>
                      <hr />
                      <Form.Label className="mt-2">Text Box Width</Form.Label>
                      <Form.Control
                        size="sm"
                        as="select"
                        className=""
                        value={this.state.textBoxStyle.width}
                        onChange={this.textBoxChange.bind(this, "width")}
                      >
                        <option value="auto">auto</option>{" "}
                        <option value="20%">20%</option>{" "}
                        <option value="25%">25%</option>{" "}
                        <option value="30%">30%</option>{" "}
                        <option value="40%">40%</option>{" "}
                        <option value="50%">50%</option>{" "}
                        <option value="50%">60%</option>{" "}
                        <option value="70%">70%</option>{" "}
                        <option value="75%">75%</option>{" "}
                        <option value="80%">80%</option>{" "}
                        <option value="100%">100%</option>
                      </Form.Control>
                      <Form.Label className="mt-2">Text Box Height</Form.Label>
                      <Form.Control
                        size="sm"
                        as="select"
                        className=""
                        value={this.state.textBoxStyle.height}
                        onChange={this.textBoxChange.bind(this, "height")}
                      >
                        <option value="auto">auto</option>{" "}
                        <option value="20%">20%</option>{" "}
                        <option value="25%">25%</option>{" "}
                        <option value="30%">30%</option>{" "}
                        <option value="40%">40%</option>{" "}
                        <option value="50%">50%</option>{" "}
                        <option value="50%">60%</option>{" "}
                        <option value="70%">70%</option>{" "}
                        <option value="75%">75%</option>{" "}
                        <option value="80%">80%</option>{" "}
                        <option value="100%">100%</option>
                      </Form.Control>
                      <div className="row">
                        {["Left", "Right", "Top", "Bottom"].map(function(
                          dir,
                          i
                        ) {
                          return (
                            <div key={i} className="col">
                              <Form.Label className="mt-2">
                                {dir} Border
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                as="select"
                                className=" mb-2"
                                value={
                                  this.state.textBoxStyle["border" + dir].split(
                                    " "
                                  )[0]
                                }
                                onChange={this.setBorder.bind(
                                  this,
                                  "size",
                                  "border" + dir
                                )}
                              >
                                <option value="0px">0px</option>{" "}
                                <option value="2px">2px</option>{" "}
                                <option value="4px">4px</option>{" "}
                                <option value="6px">6px</option>{" "}
                                <option value="8px">8px</option>{" "}
                                <option value="10px">10px</option>{" "}
                                <option value="12px">12px</option>{" "}
                                <option value="14px">14px</option>{" "}
                                <option value="16px">16px</option>{" "}
                                <option value="18px">18px</option>{" "}
                                <option value="20px">20px</option>
                              </Form.Control>

                              <Form.Control
                                size="sm"
                                as="select"
                                className=""
                                value={
                                  this.state.textBoxStyle["border" + dir].split(
                                    " "
                                  )[2]
                                }
                                onChange={this.setBorder.bind(
                                  this,
                                  "color",
                                  "border" + dir
                                )}
                              >
                                <option value="transparent">Transparent</option>
                                <option value="#FFFFFF">White</option>

                                <optgroup label="Primary">
                                  <option value="#189bb0">ARC Teal</option>
                                  <option value="#2a2b2c">Tarmac</option>
                                  <option value="#d4d4d4">Altitude Gray</option>
                                </optgroup>

                                <optgroup label="Secondary">
                                  <option value="#316677">Concourse</option>
                                  <option value="#c6b593">Flap 3</option>
                                  <option value="#6d6e71">Fuseleage</option>
                                </optgroup>

                                <optgroup label="Tertiary">
                                  <option value="#383552">Nightshade</option>
                                  <option value="#f77f00">Signal Orange</option>
                                  <option value="#8AC926">Airfield</option>
                                </optgroup>
                              </Form.Control>
                            </div>
                          );
                        },
                        this)}
                      </div>
                      <hr />
                      <Form.Label className="mt-2">Text Box Padding</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        className=""
                        value={this.state.textBoxStyle.padding}
                        onChange={this.textBoxChange.bind(this, "padding")}
                      />
                      <Form.Label className="mt-2">Text Box Margin</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        className=""
                        value={this.state.textBoxStyle.margin}
                        onChange={this.textBoxChange.bind(this, "margin")}
                      />
                      <hr />
                      <Form.Label className="mt-2">
                        Vertical Alignment
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        as="select"
                        className=""
                        defaultValue={this.state.imageBoxStyle.alignItems}
                        onChange={this.bgSelectProp.bind(this, "alignItems")}
                      >
                        <option value="flex-start">top</option>{" "}
                        <option value="center">center</option>{" "}
                        <option value="flex-end">bottom</option>{" "}
                      </Form.Control>
                      <Form.Label className="mt-2">
                        Horizontal Alignment
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        as="select"
                        className=""
                        defaultValue={this.state.imageBoxStyle.justifyContent}
                        onChange={this.bgSelectProp.bind(
                          this,
                          "justifyContent"
                        )}
                      >
                        <option value="center">center</option>{" "}
                        <option value="flex-start">left</option>{" "}
                        <option value="flex-end">right</option>{" "}
                      </Form.Control>
                      <Form.Label className="mt-2">
                        Absolute Center (will override alignments)
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        as="select"
                        className=""
                        defaultValue={this.state.textContentCenter}
                        onChange={this.imageCenter}
                      >
                        <option value="true">true</option>{" "}
                        <option value="false">false</option>{" "}
                      </Form.Control>
                    </div>
                  )}
                  {/* {this.state.settingsMenu === "Logo" && (
                    
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function SaveModal(props) {
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState("myImage");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Save Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-weight-bold">Save Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Export Details</strong>
          <ul>
            <li>Size: {props.size}</li>
          </ul>
          <Form.Label className="mt-2">File Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={fileName}
            onChange={e => setFileName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={props.saveImage.bind(this, fileName + ".jpg")}
          >
            Save Image
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function ExportModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="outline-primary" className="mr-2" onClick={handleShow}>
        Export Template
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-weight-bold">
            Export Template
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Export Details</strong>

          <div>
            Copy and email the text below to{" "}
            <a href="mailto:ifajardo@arccorp.com">ifajardo@arccorp.com</a>. In
            the email, please include the name of your desired template.
          </div>
          <div class="copyTemplate">{JSON.stringify(props.stateObj)}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  loginType: state.loginType
});

export default connect(mapStateToProps, null)(Dashboard);
