// I basically receive  requests here dispatched from GithubStateAnd Actions file
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  FETCH_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    default:
      break;
  }
};
