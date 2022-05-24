//file for states and actions
// I basically make a requests here and dispatch the result to my reducer

import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GitHubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USERS,
} from "../types";

const GIthubState = (props) => {
  // Initial global state for everything connected to github
  const InitialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  //dispaatch to the (reducerfile), content to be dispatched
  const [state, dispatch] = useReducer(GitHubReducer, InitialState);

  ///////Action methods
  //Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // setUsers(res.data.item);
    dispatch({ type: SEARCH_USERS, payload: res.data.item });
    // setLoading(false);
  };
  //get user

  //get repos

  //clear user

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING }); // dispatch an object that has the type TYPE to the reducer pulled from the useReducer

  return (
    //Value prop : Anything we want available to the entire app
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}{" "}
    </GithubContext.Provider>
  );
};
export default GIthubState;
