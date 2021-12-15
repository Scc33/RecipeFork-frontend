import React from 'react';
import k from "./resource/K.png"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserCredential } from '@firebase/auth';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface AuthState {
    auth: UserCredential;
}

class HomePage extends React.Component<AuthState> {
    state = {
        results: [],
        search: "",
        recipe: true,
        isSearching: false
    }

    openRecipe(id: string) {
        window.location.href = "/recipefork-frontend/recipePage?id=" + id;
    }

    search() {
        this.setState({ isSearching: true })
        if (this.state.recipe) {
            axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"name":"${this.state.search}"}`)
                .then(res => {
                    const recipes = res.data.data;
                    this.setState({ results: recipes });
                }).catch(error => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                })
        } else {
            axios.get(`https://recipefork-backend.herokuapp.com/api/users?where={"username":"${this.state.search}"}`)
                .then(res => {
                    const users = res.data.data;
                    this.setState({ results: users });
                }).catch(error => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                })
        }
    }

    render() {
        return <div className="app">
            <Container>
                <Row>
                    <h2 className="left-align">Howdy, {this.props.auth.user.email} !</h2>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="control1">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Mac n Cheese"
                                value={this.state.search}
                                onChange={e => this.setState({ search: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="control2">
                            <Row>
                                <Col className="center-align">
                                    <Form.Check
                                        inline
                                        defaultChecked
                                        label="Recipes"
                                        name="group1"
                                        type="radio"
                                        id={`inline-radio-1`}
                                        onChange={() => this.setState({ recipe: true })}
                                    />
                                    <Form.Check
                                        inline
                                        label="Users"
                                        name="group1"
                                        type="radio"
                                        id={`inline-radio-2`}
                                        onChange={() => this.setState({ recipe: false })}
                                    />
                                </Col>
                                <Col className="center-align">
                                    <Button onClick={() => this.search()}>Search</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    <Row>
                        {this.state.isSearching && <div className="center-align">
                            <h4>Search Results</h4>
                            <ListGroup>
                                {this.state.results.map((r: any) => {
                                    return (
                                        <ListGroup.Item key={r._id}>
                                            {this.state.recipe ? <a href={"/recipefork-frontend/recipePage?id=" + r._id}>{r.name}</a> : <a href={"/recipefork-frontend/userPage?id=" + r._id}>{r.username}</a>}
                                        </ListGroup.Item>)
                                })}
                            </ListGroup>
                        </div>}
                    </Row>
                </Row>
                <Row>
                    <h4>Recipes</h4>
                    {/*source: https://codepen.io/klesht/pen/pjjegK*/}
                    <div className="recipe-card">
                        <aside>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg" alt="Chai Oatmeal" />

                            <a href="#" className="button"><span className="icon icon-play"></span></a>

                        </aside>

                        <article>
                            <h2>Chai Oatmeal</h2>

                            <ul>
                                <li><span className="icon icon-users"></span><span>1</span></li>
                                <li><span className="icon icon-clock"></span><span>15 min</span></li>
                            </ul>

                            <ul>
                                <li className='tag'><span>Vegan</span></li>
                                <li className='tag'><span>Breakfast</span></li>
                            </ul>

                            <p className="ingredients"><span>Ingredients:&nbsp;</span>Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.</p>
                        </article>

                    </div>
                </Row>
            </Container>
        </div>;
    }
}

export default HomePage