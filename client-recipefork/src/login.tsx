import React from 'react';

class Login extends React.Component {
    render() {
        return <div className="app">
            <h2>Login</h2>
            <form className="vertical">
                <div className="horizontal">
                    <label>Email</label>
                    <input
                        type="text" />
                </div>
                <div className="horizontal">
                    <label>Password</label>
                    <input
                        type="password" />
                </div>
            </form>
            <div className="horizontal">
                Not a member? <a className="link" href="#">Sign up</a>
                <a>Forgot password</a>
            </div>
            <button>Login</button>
        </div>;
    }
}

export default Login