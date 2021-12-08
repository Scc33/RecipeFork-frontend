import React from 'react';
import k from "./resource/K.png"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AppNavbar from './navbar';

class UserPage extends React.Component {
    render() {
        return <div className="app vertical">
            <AppNavbar/>
            <div className="horizontal">
                <img src={k} />
                Search
                Plus Button
                UserIcon
            </div>
            <div className="horizontal">
                <div className="vertical vl">
                    <h3>Username</h3>
                    <h4>Posted Recipes</h4>
                    <h4>Forks</h4>
                </div>
                <div className="vertical">
                    <h4>Pinned Recipes</h4>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <h4>Contributions</h4>
                </div>
            </div>
        </div>;
    }
}

export default UserPage