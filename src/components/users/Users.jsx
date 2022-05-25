import React, { useContext } from "react";
// import PropTypes from "prop-types";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

import "./usersStyle.css";
import { Spinner } from "../utils/spinner/Spinner";

export const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
