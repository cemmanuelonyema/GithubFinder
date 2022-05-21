import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "../utils/spinner/Spinner.js";
import UserItem from "./UserItem";
import "./usersStyle.css";

const Users = ({ loading, users }) => {
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

export default Users;
