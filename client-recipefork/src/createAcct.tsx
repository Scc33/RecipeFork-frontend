import React from 'react';
import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'

class CreateAccnt extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        verifyPassword: '',
    };

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
            <Container>
                <Col className="center-align">
                    <img src={recipeforkLogo} />
                    <h2>Create Account</h2>
                </Col>
                <Form>
                    <Form.Group className="mb-3" controlId="control1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="control1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="control1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="control1">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                        />
                    </Form.Group>
                    <Button
                        type="submit"
                        onClick={this.createAccount}>Create account</Button>
                </Form>
            </Container>
        </div >;
    }
}

export default CreateAccnt