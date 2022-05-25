// import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Spinner } from "../utils/spinner/Spinner";
// import { Repos } from "./Repos";

// class User extends Component {
//   static propTypes = {
//     loading: PropTypes.bool,
//     repos: PropTypes.array.isRequired,
//     getUser: PropTypes.func.isRequired,
//     getUserRepo: PropTypes.func.isRequired,
//     user: PropTypes.object.isRequired,
//   };

//   //componentDidMount
//   ///////////////////////////
//   componentDidMount() {
//     //On app load, get the single user data  and its repo  function so that data be pulled from it.
//     this.props.getUser(this.props.match.params.login);
//     this.props.getUserRepo(this.props.match.params.login);
//   }

//   render() {
//     const {
//       name,
//       avatar_url,
//       location,
//       bio,
//       blog,
//       login,
//       html_url,
//       followers,
//       following,
//       public_repos,
//       public_gists,
//       hireable,
//       company,
//     } = this.props.user;

//     const { loading, repos } = this.props;
//     if (loading) return <Spinner />;
// return (
//   <Fragment>
//     <Link to="/" className="btn btn-light">
//       Back to search
//     </Link>
//     Hireable:{" "}
//     {hireable ? (
//       <i className="fas fa-check text-success"></i>
//     ) : (
//       <i className="fas fa-times-circle text-danger"></i>
//     )}
//     <div className="card grid-2">
//       <div className="all-center">
//         <img
//           src={avatar_url}
//           className="round-img"
//           alt="profile img"
//           style={{ width: "150px" }}
//         />
//         <h1>{name}</h1>
//         <p>Location: {location}</p>
//       </div>

//       <div>
//         {bio && (
//           <Fragment>
//             <h3>Bio</h3>
//             <p>{bio}</p>
//           </Fragment>
//         )}
//         <a href={html_url} className="btn btn-dark my-1">
//           visit github profile
//         </a>
//         <ul>
//           <li>
//             {login && (
//               <Fragment>
//                 <h3>Username:</h3>
//                 {login}
//               </Fragment>
//             )}
//           </li>
//           <li>
//             {company && (
//               <Fragment>
//                 <h3>Company:</h3>
//                 {company}
//               </Fragment>
//             )}
//           </li>
//           <li>
//             {blog && (
//               <Fragment>
//                 <h3>Website:</h3>
//                 {blog}
//               </Fragment>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div className="card text-center">
//       <div className="badge badge-primary"> Followers: {followers}</div>
//       <div className="badge badge-success"> Following: {following}</div>
//       <div className="badge badge-light"> Public Repos: {public_repos}</div>
//       <div className="badge badge-dark"> Public Gists: {public_gists}</div>
//     </div>
//     <Repos repos={repos} />
//   </Fragment>
// );
//   }
// }

// export default User;

import React, { useEffect, Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Spinner } from "../utils/spinner/Spinner";
import { Repos } from "./Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ getUserRepo, match, repos }) => {
  const githubContext = useContext(GithubContext);
  const {
    getUser,
    loading,
    user: {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company,
    },
  } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    //eslint because of the console warning about getUser dependencies
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="profile img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>

        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            visit github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <h3>Username:</h3>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <h3>Company:</h3>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <h3>Website:</h3>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary"> Followers: {followers}</div>
        <div className="badge badge-success"> Following: {following}</div>
        <div className="badge badge-light"> Public Repos: {public_repos}</div>
        <div className="badge badge-dark"> Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  repos: PropTypes.array.isRequired,
  getUserRepo: PropTypes.func.isRequired,
};

export default User;
