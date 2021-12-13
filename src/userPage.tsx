import React from 'react';
import Card from 'react-bootstrap/Card'
import k from "./resource/K.png"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserCredential } from 'firebase/auth';

interface AuthState {
    auth: UserCredential;
}

class UserPage extends React.Component<AuthState> {
    render() {
        return <div className="app vertical">
            <Container>
                <Row>
                    <Col xs={4} md={3}>
                        <Row>
                            <img className="profile-pic" src={k} />
                        </Row>
                        <Col>
                            <h3>Username</h3>
                            <h5>Email: {this.props.auth.user.email}</h5>
                            <h5>24 Posted Recipes</h5>
                            <h5>69 Forks</h5>
                        </Col>
                    </Col>
                    <Col xs={12} md={9}>
                        <Row>
                            <h4>Pinned Recipes</h4>
                        </Row>
                        <Row>
                            <Col>
                                <a>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img src={k} alt="Pinned recipe" />
                                            <Card.Title>Mac n Cheese</Card.Title>
                                            <Card.Text>
                                                3h20m
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col>
                                <a>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img src={k} alt="Pinned recipe" />
                                            <Card.Title>Mac n Cheese</Card.Title>
                                            <Card.Text>
                                                3h20m
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col>
                                <a>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img src={k} alt="Pinned recipe" />
                                            <Card.Title>Mac n Cheese</Card.Title>
                                            <Card.Text>
                                                3h20m
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <h4>Contributions</h4>
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export default UserPage