import React from 'react';
import k from "./resource/K.png"
import AppNavbar from './navbar';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserCredential } from '@firebase/auth';

interface AuthState {
    auth: UserCredential;
}

class HomePage extends React.Component<AuthState> {
    render() {
        return <div className="app">
            <AppNavbar />
            <Container>
                <Row>
                    <h3 className="left-align">Welcome {this.props.auth.user.email}</h3>
                </Row>
                <Row>
                    <Col>
                        <h4>Recipes</h4>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} alt="recipe" />Cras justo odio</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} alt="recipe" />apibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} alt="recipe" />Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} alt="recipe" />Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} alt="recipe" />Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h4>Activity</h4>
                        <ul className="no-bullets">
                            <li>asdf</li>
                            <li><img className="profile-thumb" src={k} />asdf</li>
                            <li><img className="profile-thumb" src={k} />asdf</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export default HomePage