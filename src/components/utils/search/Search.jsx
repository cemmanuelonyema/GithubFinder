// import React, { Component } from "react";
// import PropTypes from "prop-types";
// class Search extends Component {
//   //note:  states on form inputs are best made component level state.
//   state = {
//     text: "",
//   };
//   static defaultProps = {
//     placeholder: "Search users",
//   };
//   static propTypes = {
//     placeholder: PropTypes.string.isRequired,
//     searchUsers: PropTypes.func.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired,
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.text === "") {
//       this.props.setAlert("Please enter a search input", "light");
//     } else {
//       this.props.searchUsers(this.state.text);
//       this.setState({ text: "" });
//     }
//   };
//   render() {
//     const { placeholder, showClear, clearUsers } = this.props;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="text"
//             placeholder={placeholder}
//             value={this.state.text}
//             onChange={this.handleChange}
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-dark btn-block"
//           />
//         </form>
//         {showClear && (
//           <button className="btn btn-block btn-light" onClick={clearUsers}>
//             Clear
//           </button>
//         )}
//       </div>
//     );
//   }
// }

// export default Search;

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../../context/github/githubContext";

const Search = ({ placeholder, showClear, clearUsers, setAlert }) => {
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
      {showClear && (
        <button className="btn btn-block btn-light" onClick={clearUsers}>
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
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
