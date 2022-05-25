import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../../context/github/githubContext";

const Search = ({ placeholder, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  /////////////////////
  //functions
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search input", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-block btn-light"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.defaultProps = {
  placeholder: "Search users",
};
Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
