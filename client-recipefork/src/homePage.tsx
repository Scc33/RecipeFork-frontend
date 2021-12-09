import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import k from "./resource/K.png"
import AppNavbar from './navbar';
import ListGroup from 'react-bootstrap/ListGroup'

class HomePage extends React.Component {
    render() {
        return <div className="app">
            <AppNavbar />
            <div className="vertical">
                <h3 className="left-align full-width">Welcome Username</h3>
                <div className="horizontal">
                    <div className="vertical recipes">
                        <h4>Recipes</h4>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} />Cras justo odio</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} />apibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} />Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} />Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item action href="#link1"><img className="profile-thumb" src={k} />Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="vertical activity">
                        <h4>Activity</h4>
                        <ul className="no-bullets">
                            <li>asdf</li>
                            <li><img className="profile-thumb" src={k} />asdf</li>
                            <li><img className="profile-thumb" src={k} />asdf</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default HomePage