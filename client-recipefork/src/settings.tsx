import React from 'react';
import { getAuth, signInWithEmailAndPassword, updatePassword, deleteUser, reauthenticateWithCredential, UserCredential, EmailAuthProvider, User } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Redirect } from 'react-router-dom';

interface AuthState {
    auth: UserCredential;
}

class Settings extends React.Component<AuthState> {
    state = {
        email: '',
        password: '',
        error: false,
        reauth: false,
        redirect: false,
    };

    onSubmit = () => {
        this.reauth();
    };

    reauth = () => {
        const user = this.props.auth.user;
        var credential = EmailAuthProvider.credential(
            this.state.email,
            this.state.password,
        );
        console.log(user, credential);
        reauthenticateWithCredential(user, credential).then(() => {
            // User re-authenticated.
            this.setState({ reauth: true });
            console.log("reauth");
        }).catch((error) => {
            // An error ocurred
            // ...
            console.log(error);
        });
    }

    updatePasswprd = (password: string) => {
        const auth = getAuth();
        const user = auth.currentUser;
        /*const newPassword = getASecureRandomPassword();
        updatePassword(user, newPassword).then(() => {
            // Update successful.
        }).catch((error) => {
            // An error ocurred
            // ...
        });*/
    };

    deleteUser = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        /*deleteUser(user).then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        });*/
    };

    render() {
        return <div className="app">
            <Container>
                <Col className="center-align">
                    <h2>Settings</h2>
                    <h5>Please sign in again to edit settings</h5>
                    {this.state.error && <h5>Incorrect username or password</h5>}
                </Col>
                {
                    !this.state.reauth &&
                    <Form>
                        <Form.Group className="mb-3" controlId="control1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="control2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </Form.Group>
                        <Row className="mt-3 center-align">
                            <Button onClick={this.onSubmit}>Login</Button>
                        </Row>
                    </Form>
                }
                {this.state.redirect ? (<Redirect push to="/recipeFork/home" />) : null}
            </Container>
        </div>;
    }
}

export default Settings