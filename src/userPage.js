import React from 'react';
import Card from 'react-bootstrap/Card'
import k from "./resource/K.png"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

class UserPage extends React.Component {
    state = {
        email: "",
        username: "",
        profile_pic: "",
        recipes: [],
        pinnedRecipes: [],
    }

    render() {
        if (this.state.email === '') {
            const saved = localStorage.getItem("auth");
            const local_user_data = JSON.parse(saved)
            console.log("mount user page")
            axios.get(`https://recipefork-backend.herokuapp.com/api/users/Sean2`).then(res => {
                console.log(res.data)
                const user = res.data.data;
                this.setState({ email: user.email, username: user.username, profile_pic: user.profile_pic, recipes: user.recipes, pinnedRecipes: user.pinnedRecipes })
            })
            return <div className="app">Loading...</div>
        } else {
            return <div className="app">
                <Container>
                    <Row>
                        <Col xs={4} md={3}>
                            <Row>
                                TODO link to profile pic
                                <img className="profile-pic" src={k} />
                            </Row>
                            <Col>
                                <h3>{this.state.username}</h3>
                                <h5>{this.props.auth.user.email}</h5>
                                <h5>TODO 24 Posted Recipes</h5>
                                <h5>TODO 69 Forks</h5>
                            </Col>
                        </Col>
                        <Col xs={12} md={9}>
                            <Row>
                                <h4>Pinned Recipes</h4>
                            </Row>
                            TODO: map to pinned recipes
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
                                <h4>All Recipes</h4>
                                TODO link to all recipes
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
}

export default UserPage