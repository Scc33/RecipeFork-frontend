import React from 'react';

class Login extends React.Component {
    render() {
        return <div>
            <form>
                <label>Email</label>
                <input
                    type="text" />
                <label>Password</label>
                <input
                    type="password" />
            </form>
            <a>Forgot password</a>
            <button>Login</button>
            Not a member? <a>Sign up</a>
        </div>;
    }
}

export default Login