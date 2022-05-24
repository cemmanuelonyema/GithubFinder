import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spinner } from "../utils/spinner/Spinner";

import UserItem from "./UserItem";

import "./usersStyle.css";

export class Users extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
  };

  //   state = {
  //     users: [
  //       {
  //         id: "1",
  //         login: "mojombo1",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //       {
  //         id: "2",
  //         login: "mojombo2",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //       {
  //         id: "3",
  //         login: "mojombo3",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //       {
  //         id: "4",
  //         login: "mojombo4",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //     ],
  //   };

  render() {
    const { users, loading } = this.props;

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

    // return (
    //   <div className="users">
    //     {this.state.users.map((user) => (
    //       <UserItem key={user.id} user={user} />
    //     ))}
    //   </div>
    // );
  }
}

{
  /* {this.state.users.map((user) => (
          <div className="card text-center">
            <img
              alt="profile pic"
              src={user.avatar_url}
              className="round-img"
              style={{ width: "60px" }}
            />
            <h3>{user.login}</h3>
            <div>
              <a className="btn btn-dark btn-sm my-1" href={user.html_url}>
                More{" "}
              </a>
            </div>
          </div>
        ))} */
}
