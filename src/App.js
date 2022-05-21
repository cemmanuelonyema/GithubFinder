import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Users } from "./components/users/Users";

export default class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  //async based data fetching
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ user: res.data, loading: false });
    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

//promise based
//   componentDidMount() {
//     axios
//       .get("https://api.github.com/users")
//       .then((res) => console.log(res.data));
//   }
