import React, { Component, Fragment } from "react";
import spinner from "./spinner.gif";

export class Spinner extends Component {
  render() {
    return (
      <Fragment>
        <img src={spinner} alt="loading" style={spinnerStyle} />
      </Fragment>
    );
  }
}

const spinnerStyle = {
  width: "350px",
  margin: "auto",
  display: "block",
};
