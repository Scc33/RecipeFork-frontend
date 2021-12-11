import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'

class ResetPassword extends React.Component {
  render() {
    return <div className="app">
      <Container>
        <Col className="center-align">
          <img src={recipeforkLogo} />
          <h2>Reset Password</h2>
        </Col>
        <Form>
          <Form.Group className="mb-3" controlId="control1">
            <Form.Label>Forgot password?</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="myemail@email.com" />
          </Form.Group>
          <Button type="submit">Send Password Reset Email</Button>
        </Form>
      </Container>
    </div>;
  }
}

export default ResetPassword