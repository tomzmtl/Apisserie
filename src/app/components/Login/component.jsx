import React from 'react';
// import PropTypes from 'prop-types';


const Login = () => (
  <div className="Login">
    <div className="Header__logo Header__logo--light">
      list<span>&</span>go
    </div>
    <a className="Login__google-signin" href="/auth/google">
      <img src="/public/images/google-signin@2x.png" alt="Google sign-in" />
    </a>
  </div>
);

// Header.defaultProps = {
//   userName: null,
// };
//
// Header.propTypes = {
//   userName: PropTypes.string,
// };

export default Login;
