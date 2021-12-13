import React from 'react';
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'
import { Redirect } from 'react-router-dom';

interface AuthState {
    setAuth: (active: UserCredential) => void;
}

class Login extends React.Component<AuthState> {
    state = {
        email: '',
        password: '',
        error: false,
        redirect: false,
    };

    onSubmit = () => {
        console.log(this.state.email);
        this.signIn(this.state.email, this.state.password);
    };

    signIn = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                this.setState({ redirect: true });
                this.props.setAuth(userCredential);
                localStorage.setItem("auth", JSON.stringify(userCredential));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                this.setState({ error: true });
                console.log(errorCode, errorMessage);
            });
    };

    render() {
        return <div className="app">
            <Container>
                <Col className="center-align">
                    <img src={recipeforkLogo} alt="Recipe Fork Logo" />
                    <h2>Login</h2>
                    {this.state.error && <h3>Incorrect username or password</h3>}
                </Col>
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
                    <Row>
                        <Col className="left-align">
                            <a className="link" href="/recipeFork/createAccount">Sign up</a>
                        </Col>
                        <Col className="right-align">
                            <a className="link" href="/recipeFork/forgotPassword">Forgot password</a>
                        </Col>
                    </Row>
                    <Row className="mt-3 center-align">
                        <Button onClick={this.onSubmit}>Login</Button>
                        {this.state.redirect ? (<Redirect push to="/recipeFork/home" />) : null}
                    </Row>
                </Form>
            </Container>
        </div>;
    }
}

export default Login