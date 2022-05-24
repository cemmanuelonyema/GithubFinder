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

  //get user

  //get repos

  //clear user

  //set loading

  return (
    //Value prop : Anything we want available to the entire app
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}{" "}
    </GithubContext.Provider>
  );
};
export default GIthubState;
