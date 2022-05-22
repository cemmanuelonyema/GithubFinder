import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  //note:  states on form inputs are best made component level state.
  state = {
    text: "",
  };
  static defaultProps = {
    placeholder: "Search users",
  };
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    const { placeholder } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder={placeholder}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    );
  }
}

export default Search;
