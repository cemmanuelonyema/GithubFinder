import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="loading" style={spinnerStyle} />
    </Fragment>
  );
};

const spinnerStyle = {
  width: "250px",
  margin: "auto",
  display: "block",
};
