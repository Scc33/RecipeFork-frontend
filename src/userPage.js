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

    /*getName(id) {
        axios.get(`https://recipefork-backend.herokuapp.com/api/recipes/${id}`).then(res => {
            console.log("getName", res.data.data.name)
            return res.data.data.name;
        })
    }*/

    render() {
        if (this.state.email === '') {
            const saved = localStorage.getItem("auth");
            const local_user_data = JSON.parse(saved);
            const local_user_data_email = local_user_data.user.email;
            axios.get(`https://recipefork-backend.herokuapp.com/api/users?where={"email":"${local_user_data_email}"}`).then(res => {
                const user = res.data.data[0];
                axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"userId":"${user._id}"}`).then(res => {
                    const recipes = res.data.data;
                    /*for (let i = 0; i < recipes.length; i++) {
                        if (recipes[i].forkOrigin) {
                            recipes[i].forkOriginName = this.getName(recipes[i].forkOrigin);
                        }
                    }*/
                    this.setState({ email: user.email, username: user.username, profile_pic: user.profile_pic, recipes: recipes })
                    var pinnedRecipes = [];
                    for (let i = 0; i < user.pinnedRecipes.length; i++) {
                        console.log(i, user.pinnedRecipes[i])
                        axios.get(`https://recipefork-backend.herokuapp.com/api/recipes/${user.pinnedRecipes[i]}`).then(res => {
                            console.log(res.data.data)
                            pinnedRecipes.push(res.data.data);
                            this.setState({ pinnedRecipes: pinnedRecipes })
                        }).catch(error => {
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        })
                    }
                    console.log(user.pinnedRecipes, pinnedRecipes)
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
                                <h5>{this.state.recipes.length} Posted Recipes</h5>
                                <h5>TODO 69 Forks</h5>
                            </Col>
                        </Col>
                        <Col xs={12} md={9}>
                            <Row>
                                <h4>Pinned Recipes</h4>
                            </Row>
                            <Row>
                                {this.state.pinnedRecipes.map((recipe) => (
                                        <Col key={recipe._id}>
                                            <a>
                                                <Card>
                                                    <Card.Body>
                                                        <Card.Img src={k} alt="Pinned recipe" />
                                                        <Card.Title>{recipe.name}</Card.Title>
                                                        <Card.Text>
                                                            {recipe.forks}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </Col>
                                ))}
                            </Row>
                            <Row>
                                <h4>All Recipes</h4>
                                <ListGroup>
                                    {this.state.recipes.map((recipe) => (
                                        <ListGroup.Item key={recipe._id}>
                                            <h6><a href={"/recipefork-frontend/recipePage?id=" + recipe._id}>{recipe.name}</a></h6>
                                            Forks: {recipe.forks} <br/>
                                            {recipe.forkOrigin === null ? <div>Original Recipe</div> : <div><a href={"/recipefork-frontend/recipePage?id=" + recipe.forkOrigin}>Forked Recipe</a></div>}
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