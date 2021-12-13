import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'

class LandingPage extends React.Component {
    render() {
        return <div className="app">
            <Container>
                <Col className="center-align">
                    <img src={recipeforkLogo} alt="Recipe Fork Logo" />
                    <h2><a href="/recipeFork/login">Login</a></h2>
                </Col>
            </Container>
        </div>;
    }
}

export default LandingPage;