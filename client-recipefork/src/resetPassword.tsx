import React from 'react';
import './App.css';

class ResetPassword extends React.Component {
  render() {
    return <div className="app">
      <h2>Reset Password</h2>
      Forgot password?
      <form className="vertical">
        <div className="horizontal">
          <label>Email</label>
          <input
            type="text" />
        </div>
        <button type="submit">Send Password Reset Email</button>
      </form>
    </div>;
  }
}

export default ResetPassword