import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import GIthubState from "./context/github/GithubState";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Users } from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/utils/search/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  /////////////////////////////////

  //get a user repos
  const getUserRepo = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const displayAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  //   const fetchAllUsers = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://api.github.com/users");
  //     setLoading(false);
  //     setUsers(res.data);
  //   };

  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);

  return (
    <GIthubState>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    {" "}
                    {/* placeholder can be changed by passing a 'placeholder' prop into the search comp */}
                    <Search setAlert={displayAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User getUserRepo={getUserRepo} repos={repos} {...props} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GIthubState>
  );
};

export default App;
