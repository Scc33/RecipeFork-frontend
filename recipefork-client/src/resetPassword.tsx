import React from 'react';

class ResetPassword extends React.Component {
  render() {
    return <div>
      <h2>Reset Password</h2>
      Forgot password?
      <form>
        <label>Email</label>
        <input
          type="text" />
      </form>
      <button>Send Password Reset Email</button>

    </div>;
  }
}

export default ResetPassword