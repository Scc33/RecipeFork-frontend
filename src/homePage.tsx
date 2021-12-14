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

    openRecipe(id: string) {
        window.location.href = "/recipefork-frontend/recipePage?id=" + id;
    }

    componentDidMount() {
        axios.get(`https://recipefork-backend.herokuapp.com/api/recipes`)
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
                    <h2 className="left-align">Howdy, {this.props.auth.user.email} !</h2>
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
            
                    <h4>Activity</h4>

                    <ul className="no-bullets">
                        <li>asdf</li>
                        <li><img className="profile-thumb" src={k} />asdf</li>
                        <li><img className="profile-thumb" src={k} />asdf</li>
                    </ul>
                
                </Row>
            </Container>
        </div>;
    }
}

export default HomePage