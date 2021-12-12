import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import k from "./resource/K.png"
import { getAuth, signOut } from "firebase/auth";

class AppNavbar extends React.Component {
    logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
    }

    render() {
        return <div className="app">
            <Navbar fixed="top" bg="light">
                <Navbar.Brand href="/recipeFork/home">RecipeFork</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={<img className="profile-thumb" src={k} alt="Recipe Fork Banner" />} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/recipeFork/userPage">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/recipeFork/settingsPage">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="/recipeFork/createRecipePage">New Recipe</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.logout}>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>;
    }
}

export default AppNavbar