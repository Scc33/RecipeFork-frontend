import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Formik } from 'formik';
import * as yup from 'yup';

class ResetPassword extends React.Component {
  state = {
    email: '',
  }
  schema = yup.object().shape({
    email: yup.string().required(),
  });


  resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, this.state.email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  render() {
    return <div className="app">
      <Container>
        <Col className="center-align">
          <img src={recipeforkLogo} alt="Recipe Fork Logo" />
          <h2>Reset Password</h2>
        </Col>
        <Formik
          validationSchema={this.schema}
          onSubmit={console.log}
          initialValues={{
            email: '',
          }}>
          {({
            handleChange,
            values,
          }) => (
            <Form>
              <Form.Group className="mb-3" controlId="control1">
                <Form.Label>Forgot password?</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value = { values.email }
                  onChange={ handleChange }
                  placeholder="myemail@email.com" />
              </Form.Group>
              <Button type="submit">Send Password Reset Email</Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>;
  }
}

export default ResetPassword