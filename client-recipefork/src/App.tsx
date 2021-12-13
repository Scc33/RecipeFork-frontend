import React from 'react';
import Login from "./login"
import './App.css';
import CreateAccnt from './createAcct';
import ResetPassword from './resetPassword';
import HomePage from "./homePage"
import UserPage from './userPage';
import RecipePage from './recipePage';
import CreateRecipePage from './createRecipePage';
import Settings from './settings';
import {
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserCredential } from 'firebase/auth';
import LandingPage from './landingPage';
import AppNavbar from './navbar';

function App() {
  const [auth, setAuth] = React.useState<UserCredential | null>(null);
  console.log("auth", auth);
  const saved = localStorage.getItem("auth");
  console.log("saved", saved);
  if (!auth && saved) {
    setAuth(JSON.parse(saved));
  }
  console.log("loaded", auth)

  if (!auth) {
    return (
      <div className="App">
        <Route path="/recipeFork/" exact component={LandingPage} />
        <Route path="/recipeFork/login">
          <Login setAuth={setAuth} />;
        </Route>
        <Route path="/recipeFork/createAccount" exact component={CreateAccnt} />
        <Route path="/recipeFork/forgotPassword" exact component={ResetPassword} />
      </div >
    );
  }

  return (
    <div className="App">
      <AppNavbar setAuth={setAuth} />
      <Route path="/recipeFork/home">
        <HomePage auth={auth} />
      </Route>
      <Route path="/recipeFork/userPage">
        <UserPage auth={auth} />
      </Route>
      <Route path="/recipeFork/recipePage" exact component={RecipePage} />
      <Route path="/recipeFork/createRecipePage" exact component={CreateRecipePage} />
      <Route path="/recipeFork/settingsPage">
        <Settings auth={auth} />
      </Route>
    </div >
  );
}

export default App;