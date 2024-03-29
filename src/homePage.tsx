import React from 'react';
import k from "./resource/K.png"
import foodtemp from "./resource/foodtemplate.jpg"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserCredential } from '@firebase/auth';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
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
            _id: "",
            cookTime: "",
            prepTime: "",
            ingredients: "",
            instructions: ""
        },
        imageData: '',
        username: ''
    }

    openRecipe(id: string) {
        window.location.href = "/recipefork-frontend/recipePage?id=" + id;
    }

    handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    };

    search() {
        if (this.state.search === '') {
            this.setState({ isSearching: false });
            return;
        }

        this.setState({ isSearching: true })
        if (this.state.recipe) {
            axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"name": { "$regex": "${this.state.search}", "$options": "i" } }`)
                .then(res => {
                    const recipes = res.data.data;
                    this.setState({ results: recipes });
                }).catch(error => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                })
        } else {
            axios.get(`https://recipefork-backend.herokuapp.com/api/users?where={"username": { "$regex": "${this.state.search}", "$options": "i" } }`)
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

    viewAll() {
        this.setState({ isSearching: true })
        if (this.state.recipe) {
            axios.get(`https://recipefork-backend.herokuapp.com/api/recipes`)
                .then(res => {
                    const recipes = res.data.data;
                    this.setState({ results: recipes });
                }).catch(error => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                })
        } else {
            axios.get(`https://recipefork-backend.herokuapp.com/api/users`)
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
                console.log(selectedRecipe);
                console.log(this.state.randomRecipe);

                this.setState({ imageData: await getImageData(selectedRecipe.image) });
            })
            return <div>Loading...</div>
        } else {
            axios.get(`https://recipefork-backend.herokuapp.com/api/users/?where={"email":"${this.props.auth.user.email}"}`).then(res => {
                const user = res.data.data[0];
                if (user === undefined || user === null) {
                    this.setState({ username: '' });
                } else {
                    this.setState({ username: user.username });
                }
            })

            return <div className="app">
                <Container>
                    { this.state.username === ''
                        ? <></>
                        : <Row>
                            <h2 className="left-align">Howdy, {this.state.username}!</h2>
                        </Row>
                    }
                    
                    <Row>
                        <h4 className="center-align">Search Recipes or Users</h4>
                        <Form onSubmit={this.handleSubmit}>
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
                                        <Col className="center-align">
                                            <button type="button" className="search" onClick={() => this.viewAll()}>View All</button>
                                            {' '}
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
                                    {this.state.results.length === 0 && <ListGroup.Item>No results found</ListGroup.Item>}
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
                    {
                        this.state.isSearching
                        ? <></>
                        : <Row>
                            <h4 className="center-align">Try This Recipe!</h4>
                            {/*source: https://codepen.io/klesht/pen/pjjegK*/}
                            <div className="recipe-card">
                                <aside>
                                    <img id="recipe-img" src={this.state.imageData !== '' ? this.state.imageData : foodtemp} alt={`${this.state.randomRecipe.name}`} />

                                    <a href={`/recipefork-frontend/recipePage?id=${this.state.randomRecipe._id}`} className="button"><span className="icon icon-play"></span></a>
                                </aside>

                                <article>
                                    <h2>{this.state.randomRecipe.name}</h2>

                                    <ul>
                                        <li><span className="icon icon-users"></span><span>{this.state.randomRecipe.cookTime}</span></li>
                                        <li><span className="icon icon-clock"></span><span>{this.state.randomRecipe.prepTime}</span></li>
                                    </ul>

                                    <p className="ingredients"><span>Ingredients:&nbsp;</span>{this.state.randomRecipe.ingredients}</p>
                                    <p className="ingredients"><span>Instructions:&nbsp;</span>{this.state.randomRecipe.instructions}</p>
                                </article>

                            </div>
                        </Row>
                    }  
                </Container>
            </div>;
        }
    }
}

export default HomePage