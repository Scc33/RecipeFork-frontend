import React from 'react';
import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


class CreateAccnt extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        verifyPassword: '',
    };

    onUserChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ username: e.currentTarget.value });
    }

    onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ email: e.currentTarget.value });
    }

    onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ password: e.currentTarget.value });
    }

    onVerifyChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ verifyPassword: e.currentTarget.value });
    }

    createAccount = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                /*if (user) {
                    window.location = '/';
                }*/
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    render() {
        return <div className="app">
            <h2>Create Account</h2>
            <form className="vertical">
                <div className="horizontal">
                    <label>Username</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.onUserChange}
                    />
                </div>
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
                <div className="horizontal">
                    <label>Verify Password</label>
                    <input
                        type="password"
                        value={this.state.verifyPassword}
                        onChange={this.onVerifyChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Create account"
                    onClick={this.createAccount}
                />
            </form>
        </div >;
    }
}

export default CreateAccnt