import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        this.setState({ email: e.currentTarget.value });
    }

    onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ password: e.currentTarget.value });
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
            <Container>
                <h2>Login</h2>
                <Form>
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
                    <Row>
                        <Col className="left-align">
                            <a className="link" href="/recipeFork/createAccount">Sign up</a>
                        </Col>
                        <Col className="right-align">
                            <a className="link" href="/recipeFork/forgotPassword">Forgot password</a>
                        </Col>
                    </Row>
                    <Button type="submit" onClick={this.signIn}>Login</Button>
                </Form>
            </Container>
        </div>;
    }
}

export default Login