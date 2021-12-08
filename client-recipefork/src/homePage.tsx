import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import k from "./resource/K.png"
import AppNavbar from './navbar';

class HomePage extends React.Component {
    render() {
        return <div className="app">
            <AppNavbar/>
            <div className="horizontal">
                Search
                Plus Button
                UserIcon
            </div>
            <div className="horizontal">
                <div className="vertical vl">
                    Recipes
                </div>
                <div className="vertical">
                    Activity
                </div>
            </div>
        </div>;
    }
}

export default HomePage