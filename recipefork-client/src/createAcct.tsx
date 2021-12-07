import React from 'react';
import './App.css';

class CreateAccnt extends React.Component {
    render() {
        return <div className="app">
            <h2>Create Account</h2>
            <form className="vertical">
                <div className="horizontal">
                    <label>Username</label>
                    <input
                        type="text" />
                </div>
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
                <div className="horizontal">
                    <label>Verify Password</label>
                    <input
                        type="password" />
                </div>
                <button type="submit">Create account</button>
            </form>
        </div>;
    }
}

export default CreateAccnt