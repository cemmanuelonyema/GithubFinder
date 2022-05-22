import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Users } from "./components/users/Users";
import Search from "./components/utils/search/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  static propTypes = {
    searchUsers: PropTypes.string.isRequired,
  };

  //async based data fetching
  //   async componentDidMount() {
  //     this.setState({ loading: true });
  //     const res = await axios.get("https://api.github.com/users");
  //     this.setState({ users: res.data, loading: false });
  //   }

  searchUsers = async (text) => {
    console.log(text);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          {/* placeholder can be changed by passing a 'placeholder' prop into the search comp */}
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
//promise based
//   componentDidMount() {
//     axios
//       .get("https://api.github.com/users")
//       .then((res) => console.log(res.data));
//   }
