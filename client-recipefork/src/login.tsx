import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'
import { Formik, Field, Form } from 'formik';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: false,
    };

    onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ email: e.currentTarget.value });
    }

    onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ password: e.currentTarget.value });
    }

    signIn = (email:string, password:string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                this.state.error = true;
                console.log(errorCode, errorMessage);
            });
    };

    render() {
        return (
            <Formik
                initialValues={{ name: '', email: '', password: '', content: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 1000);
                    console.log(values);
                    this.signIn(values.email, values.password);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="form-control" type="text" />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <Field name="email" className="form-control" type="email" />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="subject">Password</label>
                            <Field name="password" className="form-control" type="text" />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <Field name="content" className="form-control" as="textarea" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                        </div>
    
                    </Form>
                )}
            </Formik>
        );
    }
}

 /*return <div className="app">
            <Container>
                <Col className="center-align">
                    <img src={recipeforkLogo} alt="Recipe Fork Logo" />
                    <h2>Login</h2>
                    {this.state.error && <h3>Incorrect username or password</h3>}
                </Col>
                <Formik
                    validationSchema={this.schema}
                    onSubmit={values => console.log(values)}
                    initialValues={{
                        email: '',
                        password: '',
                    }}>
                    {({
                        handleChange,
                        values,
                        handleSubmit,
                    }) => (
                        <Form>
                            <Form.Group className="mb-3" controlId="control1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    value = {values.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="control2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    name="password"
                                    value = {values.password}
                                    onChange={handleChange}
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
                                <Button type="submit">Login</Button>
                            </Row>
                        </Form>)}
                </Formik>
            </Container>
        </div>;*/

export default Login