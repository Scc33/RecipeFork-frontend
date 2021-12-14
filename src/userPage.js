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
            const local_user_data = JSON.parse(saved);
            const local_user_data_email = local_user_data.user.email;
            axios.get(`https://recipefork-backend.herokuapp.com/api/users?where={"email":"${local_user_data_email}"}`).then(res => {
                const user = res.data.data[0];
                axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"userId":"${user._id}"}`).then(res => {
                    const recipes = res.data.data;
                    this.setState({ email: user.email, username: user.username, profile_pic: user.profile_pic, recipes: recipes, pinnedRecipes: user.pinnedRecipes })
                }).catch(error => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                })
            }).catch(error => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            })
            return <div className="app">Loading...</div>
        } else {
            console.log(this.state)
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
                            <Row>
                                TODO: map to pinned recipes
                                {this.state.pinnedRecipes.map((recipe) => (
                                    <ListGroup.Item key={recipe._id}>
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
                                    </ListGroup.Item>
                                ))}
                            </Row>
                            <Row>
                                <h4>All Recipes</h4>
                                <ListGroup>
                                    {this.state.recipes.map((recipe) => (
                                        <ListGroup.Item key={recipe._id}>
                                            <h6><a href={"/recipefork-frontend/recipePage?id=" + recipe._id}>{recipe.name}</a></h6>
                                            Forks: {recipe.forks}
                                        </ListGroup.Item>
                                    ))}
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