import React from 'react';
import './App.scss';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class CreateAccnt extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        verifyPassword: '',
        profPic: '',
        match: true,
        redirect: false,
        tooShort: false,
        alreadyExists: false,
    };

    onSubmit = () => {
        console.log(this.state.email);
        if (this.state.password === this.state.verifyPassword) {
            this.setState({ match: true });
            this.createAccount(this.state.email, this.state.password);
            axios.post(`https://recipefork-backend.herokuapp.com/api/users`,
                {
                    username: this.state.username,
                    email: this.state.email,
                    profPic: this.state.profPic,
                    pinnedRecipes: [],
                }).catch(error => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  })
        } else {
            this.setState({ match: false });
        }
    };

    createAccount = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                this.setState({ redirect: true });
                console.log(user);
                this.setState({ redirect: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode === 'auth/email-already-in-use') {
                    this.setState({ alreadyExists: true });
                } else {
                    this.setState({ alreadyExists: false });
                }
                if (errorCode === 'auth/weak-password') {
                    this.setState({ tooShort: true });
                } else {
                    this.setState({ tooShort: false });
                }
            });
    };

    render() {
        return <div className="app">
            <Container>
                <Col className="center-align">
                    <img src={recipeforkLogo} alt="Recipe Fork Logo" />
                    <h2>Create Account</h2>
                </Col>
                <Form>
                    <Form.Group className="mb-3" controlId="control1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                    </Form.Group>
                    {this.state.alreadyExists && <h4 className="center-align">An account with that email already exists</h4>}
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
                    {!this.state.match && <h4 className="center-align">Passwords must match</h4>}
                    {this.state.tooShort && <h4 className="center-align">Passwords must be at least 6 characters</h4>}
                    <Form.Group className="mb-3" controlId="control1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="control1">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="verifyPassword"
                            value={this.state.verifyPassword}
                            onChange={e => this.setState({ verifyPassword: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button
                        onClick={this.onSubmit}>Create account</Button>
                    {this.state.redirect ? (<Redirect push to="/recipefork-frontend/" />) : null}
                </Form>
            </Container>
        </div >;
    }
}

export default CreateAccnt