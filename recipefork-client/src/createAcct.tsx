import React from 'react';

class CreateAccnt extends React.Component {
    render() {
        return <div>
            <h2>Create Account</h2>
            <form>
                <label>Username</label>
                <input
                    type="text" />
                <label>Email</label>
                <input
                    type="text" />
                <label>Password</label>
                <input
                    type="password" />
                <label>Verify Password</label>
                <input
                    type="password" />
            </form>
        </div>;
    }
}

export default CreateAccnt