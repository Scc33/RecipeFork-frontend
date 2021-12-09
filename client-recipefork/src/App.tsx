import React from 'react';
import logo from "./resource/recipeFork.png"
import Login from "./login"
import './App.css';
import CreateAccnt from './createAcct';
import ResetPassword from './resetPassword';
import HomePage from "./homePage"
import UserPage from './userPage';
import RecipePage from './recipePage';
import {
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Route path="/recipeFork/" exact component={Login} />
        <Route path="/recipeFork/login" exact component={Login} />
        <Route path="/recipeFork/createAccount" exact component={CreateAccnt} />
        <Route path="/recipeFork/forgotPassword" exact component={ResetPassword} />
        <Route path="/recipeFork/home" exact component={HomePage} />
        <Route path="/recipeFork/userPage" exact component={UserPage} />
        <Route path="/recipeFork/recipePage" exact component={RecipePage} />
    </div>
  );
}

export default App;