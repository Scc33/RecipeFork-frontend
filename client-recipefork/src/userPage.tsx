import React from 'react';
import Card from 'react-bootstrap/Card'
import AppNavbar from './navbar'
import k from "./resource/K.png"
import ListGroup from 'react-bootstrap/ListGroup'

class UserPage extends React.Component {
    render() {
        return <div className="app vertical">
            <AppNavbar />
            <div className="horizontal">
                <div className="vertical">
                    <img className="profile-pic" src={k} />
                    <h3>Username</h3>
                    <h5>24 Posted Recipes</h5>
                    <h5>69 Forks</h5>
                </div>
                <div className="vertical">
                    <h4>Pinned Recipes</h4>
                    <div className="horizontal">
                        <a href="#">
                            <Card style={{ margin: '1rem' }}>
                                <Card.Body className="padding">
                                    <Card.Img src={k} />
                                    <Card.Title>Mac n Cheese</Card.Title>
                                    <Card.Text>
                                        3h20m
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                        <a href="#">
                            <Card style={{ margin: '1rem' }}>
                                <Card.Body>
                                    <Card.Img src={k} />
                                    <Card.Title>Mac n Cheese</Card.Title>
                                    <Card.Text>
                                        3h20m
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                        <a href="#">
                            <Card style={{ margin: '1rem' }}>
                                <Card.Body>
                                    <Card.Img src={k} />
                                    <Card.Title>Mac n Cheese</Card.Title>
                                    <Card.Text>
                                        3h20m
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                    <h4>Contributions</h4>
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>;
    }
}

export default UserPage