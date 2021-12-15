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
import getImageData from './utilities/image-util';
import './form.scss'
import './explore.scss'

interface AuthState {
    auth: UserCredential;
}

class HomePage extends React.Component<AuthState> {
    state = {
        results: [],
        search: "",
        recipe: true,
        isSearching: false,
        randomRecipe: {
            name: "",
            id: "",
            cookTime: "",
            prepTime: "",
            ingredients: "",
            instructions: ""
        },
        imageData: ''
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
        if (this.state.randomRecipe.name === "") {
            axios.get(`https://recipefork-backend.herokuapp.com/api/recipes`).then(async res => {
                const recipes = res.data.data;
                const selectedRecipe = recipes[Math.floor(Math.random() * recipes.length)];
                this.setState({ randomRecipe: selectedRecipe });

                this.setState({ imageData: await getImageData(selectedRecipe.image) });
            })
            return <div>Loading...</div>
        } else {
            return <div className="app">
                <Container>
                    <Row>
                        <h2 className="left-align">Howdy, {this.props.auth.user.email} !</h2>
                    </Row>
                    <Row>
                        <h4 className="center-align">Search Recipes or Users</h4>
                        <Form>
                            <div className="form">
                                <Form.Group className="mb-3" controlId="control1">
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
                                        <Form.Group controlId="control5" className="mb-3">
                                            <button type="button" className="tag">🧇 Breakfast</button>{' '}
                                            <button type="button" className="tag">🍬 Sweet</button>{' '}
                                            <button type="button" className="tag">🥘 Savory</button>{' '}
                                            <button type="button" className="tag">🍹 Drinks</button>{' '}
                                            <button type="button" className="tag">🥗 Vegetarian</button>{' '}
                                            <button type="button" className="tag">🌱 Vegan</button>{' '}
                                            <button type="button" className="tag">🌾 Gluten Free</button>{' '}
                                            <button type="button" className="tag">☪️ Halal</button>{' '}
                                            <button type="button" className="tag">✡️ Kosher</button>{' '}
                                        </Form.Group>
                                        <Col className="center-align">
                                            <button type="button" className="search" onClick={() => this.search()}>Search</button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </div>
                        </Form>
                        <Row>
                            {this.state.isSearching && <div className="center-align">
                                <h4>Search Results</h4>
                                <ListGroup>
                                    {this.state.results.length == 0 && <ListGroup.Item>No results found</ListGroup.Item>}
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
                        <h4 className="center-align">Try This Recipe!</h4>
                        {/*source: https://codepen.io/klesht/pen/pjjegK*/}
                        <div className="recipe-card">
                            <aside>
                                <img src={this.state.imageData !== '' ? this.state.imageData : k} alt="Chai Oatmeal" />

                                <a href={'#'} className="button"><span className="icon icon-play"></span></a>

                            </aside>

                            <article>
                                <h2>{this.state.randomRecipe.name}</h2>

                                <ul>
                                    <li><span className="icon icon-users"></span><span>Cook time: {this.state.randomRecipe.cookTime}</span></li>
                                    <li><span className="icon icon-clock"></span><span>Prep time: {this.state.randomRecipe.prepTime}</span></li>
                                </ul>

                                <p className="ingredients"><span>Ingredients:&nbsp;</span>{this.state.randomRecipe.ingredients}</p>
                                <p className="ingredients"><span>Instructions:&nbsp;</span>{this.state.randomRecipe.instructions}</p>
                            </article>

                        </div>
                    </Row>
                </Container>
            </div>;
        }
    }
}

export default HomePage