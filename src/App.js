import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Users } from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/utils/search/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
  };

  //   state = {
  //     users: [
  //       {
  //         login: "defunkt",
  //         id: 2,
  //         node_id: "MDQ6VXNlcjI=",
  //         avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
  //       },
  //       {
  //         login: "pjhyett",
  //         id: 3,
  //         node_id: "MDQ6VXNlcjM=",
  //         avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
  //       },
  //       {
  //         login: "wycats",
  //         id: 4,
  //         node_id: "MDQ6VXNlcjQ=",
  //         avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
  //       },
  //       {
  //         login: "ezmobius",
  //         id: 5,
  //         node_id: "MDQ6VXNlcjU=",
  //         avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
  //       },
  //       {
  //         login: "ivey",
  //         id: 6,
  //         node_id: "MDQ6VXNlcjY=",
  //         avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
  //       },
  //       {
  //         login: "evanphx",
  //         id: 7,
  //         node_id: "MDQ6VXNlcjc=",
  //         avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
  //       },
  //       {
  //         login: "vanpelt",
  //         id: 8,
  //         node_id: "MDQ6VXNlcjE3",
  //         avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
  //       },
  //       {
  //         login: "wayneeseguin",
  //         id: 9,
  //         node_id: "MDQ6VXNlcjE4",
  //         avatar_url: "https://avatars.githubusercontent.com/u/18?v=4",
  //       },
  //       {
  //         login: "brynary",
  //         id: 10,
  //         node_id: "MDQ6VXNlcjE5",
  //         avatar_url: "https://avatars.githubusercontent.com/u/19?v=4",
  //       },
  //       {
  //         login: "kevinclark",
  //         id: 20,
  //         node_id: "MDQ6VXNlcjIw",
  //         avatar_url: "https://avatars.githubusercontent.com/u/20?v=4",
  //       },
  //     ],
  //     loading: false,
  //     alert: null,
  //   };

  //   async based data fetching
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //get a single github user
  getUser = async (username) => {
    console.log(text);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  //get a user repos
  getUserRepo = async (username) => {
    console.log(text);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  //Search users
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
    const { loading, users, user, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    {" "}
                    {/* placeholder can be changed by passing a 'placeholder' prop into the search comp */}
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    user={user}
                    loading={loading}
                    getUserRepo={this.getUserRepo}
                    getUser={this.getUser}
                    repos={repos}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
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
