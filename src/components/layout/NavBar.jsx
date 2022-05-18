import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class NavBar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Fragment>
        <nav className="navbar bg-primary">
          <h1>
            {" "}
            <i className={this.props.icon}></i>
            {this.props.title}
          </h1>
        </nav>
      </Fragment>
    );
  }
}
