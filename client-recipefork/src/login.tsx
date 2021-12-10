import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/*const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({email: e.currentTarget.value});
    }

    onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({password: e.currentTarget.value});
    }

    signIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    render() {
        return <div className="app">
            <h2>Login</h2>
            <form className="vertical">
                <div className="horizontal">
                    <label>Email</label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                </div>
                <div className="horizontal">
                    <label>Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                </div>
            </form>
            <div className="horizontal">
                Not a member? <a className="link" href="#">Sign up</a>
                <a>Forgot password</a>
            </div>
            <input 
                type="submit" 
                value="Login" 
                onClick={this.signIn} 
            />
        </div>;
    }
}

export default Login