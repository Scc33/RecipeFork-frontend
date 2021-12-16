import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import k from "./resource/K.png"
import { getAuth, signOut, UserCredential } from "firebase/auth";
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import getImageData from './utilities/image-util';
import "./navbar.css"

class AppNavbar extends React.Component {
    state = {
        redirect: false,
        personal_id: '',
        imageData: ''
    }

    logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.clear();
            this.setState({ redirect: true });
            this.props.setAuth(null);
            window.location.reload();
        }).catch((error) => {
            // An error happened.
        })
    }

    render() {
        if (this.state.personal_id === '') {
            const saved = localStorage.getItem("auth");
            console.log(saved);
            const local_user_data = JSON.parse(saved);
            console.log("local", local_user_data);
            const local_user_data_email = local_user_data.user.email;
            axios.get(`https://recipefork-backend.herokuapp.com/api/users?where={"email":"${local_user_data_email}"}`).then(res => {
                const user = res.data.data[0];
                console.log(user);
                this.setState({ personal_id: user._id });
                axios.get(`https://recipefork-backend.herokuapp.com/api/users/${user._id}`).then(async res => {
                    const user = res.data.data;
                    this.setState({ imageData: await getImageData(user.profilePic) });
                });
            });
            return <div className="app">Loading...</div>
        }
        else {
            return <div className="app">
                <Navbar fixed="top" bg="dark">
                    <Navbar.Brand href="/recipefork-frontend/home">RecipeFork</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title={<img className="profile-thumb" src={this.state.imageData !== '' ? this.state.imageData : k} alt="Recipe Fork Banner" />} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/recipefork-frontend/home">Home</NavDropdown.Item>
                                {/* <NavDropdown.Item href="/recipefork-frontend/explore">Explore</NavDropdown.Item> */}
                                <NavDropdown.Item href={"/recipefork-frontend/userPage?id=" + this.state.personal_id}>Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/recipefork-frontend/createRecipePage">New Recipe</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.logout}>Sign Out</NavDropdown.Item>
                                {this.state.redirect ? (<Redirect push to="/recipefork-frontend/" />) : null}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>;
        }

    }
}

//                                <NavDropdown.Item href="/recipefork-frontend/settingsPage">Settings</NavDropdown.Item>

export default AppNavbar