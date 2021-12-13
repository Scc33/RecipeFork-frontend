import React from 'react';
import k from "./resource/K.png"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserCredential } from '@firebase/auth';
import axios from 'axios';

interface AuthState {
    auth: UserCredential;
}


class HomePage extends React.Component<AuthState> {
    state = {
        recipes: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/recipes?where={"_id": {"$in": ["61b718bfb4e3958cfa8dc9be","61b718d0b4e3958cfa8dc9c0"]}}&sort={"name": 1}&select={"_id": 0}`)
            .then(res => {
                const recipes = res.data.data;
                console.log(typeof (res.data.data), res.data.data, Object.values(res.data.data));
                this.setState({ recipes });
            })
    }

    render() {
        console.log("recipes", this.state.recipes)
        return <div className="app">
            <Container>
                <Row>
                    <h3 className="left-align">Welcome {this.props.auth.user.email}</h3>
                </Row>
                <Row>
                    <Col>
                        <h4>Recipes</h4>
                        <ListGroup variant="flush">
                            {
                                this.state.recipes.map(
                                    recipe =>
                                        <ListGroup.Item><img className="profile-thumb" src={recipe["image"]} alt="recipe" />{recipe["name"]}</ListGroup.Item>
                                )
                            }
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