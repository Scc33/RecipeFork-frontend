import React from 'react';
import './App.scss';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

class ResetPassword extends React.Component {
  state = {
    email: '',
    sent: false,
  }

  resetPassword = (email: string) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        this.setState({ sent: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  onSubmit = () => {
    console.log(this.state.email);
    this.resetPassword(this.state.email);
    window.open("/", "_blank")
  };

  render() {
    return <div className="app">
      <Container>
        <Col className="center-align">
          <img src={recipeforkLogo} alt="Recipe Fork Logo" />
          <h2>Reset Password</h2>
        </Col>
            <Form>
              <Form.Group className="mb-3" controlId="control1">
                <Form.Label>Forgot password?</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="myemail@email.com" />
              </Form.Group>
              <Button onClick={this.onSubmit}>Send Password Reset Email</Button>
              {this.state.sent && <h3>Password reset email sent!</h3>}
            </Form>
      </Container>
    </div>;
  }
}

export default ResetPassword