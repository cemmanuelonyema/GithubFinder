import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          alt="profile pic"
          src={avatar_url}
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>
            More{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default UserItem;
