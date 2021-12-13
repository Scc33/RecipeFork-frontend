import React from 'react';
import { getAuth, signInWithEmailAndPassword, updatePassword, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Redirect } from 'react-router-dom';

const auth = getAuth();

class Settings extends React.Component {
    state = {
        email: '',
        password: '',
        error: false,
        redirect: false,
    };

    onSubmit = () => {
        console.log(this.state.email);
    };

    reauth = () => {
        // TODO(you): prompt the user to re-provide their sign-in credentials
        /*const credential = promptForCredentials();

        reauthenticateWithCredential(user, credential).then(() => {
            // User re-authenticated.
        }).catch((error) => {
            // An error ocurred
            // ...
        });*/
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
                </Col>
                
            </Container>
        </div>;
    }
}

/*<Form>
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
                </Form>*/

export default Settings