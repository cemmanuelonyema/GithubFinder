import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";

import "./usersStyle.css";
import { Spinner } from "../utils/spinner/Spinner";

export const Users = ({ users, loading }) => {
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

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};
