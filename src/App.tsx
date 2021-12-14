import React from 'react';
import Login from "./login"
import './App.scss';
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
      <div>
        <Route path="/recipefork-frontend/" exact component={LandingPage} />
        <Route path="/recipefork-frontend/login">
          <Login setAuth={setAuth} />;
        </Route>
        <Route path="/recipefork-frontend/createAccount" exact component={CreateAccnt} />
        <Route path="/recipefork-frontend/forgotPassword" exact component={ResetPassword} />
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar-light bg-dark">
        <AppNavbar setAuth={setAuth}/>
      </nav>
      <Route path="/recipefork-frontend/home">
        <HomePage auth={auth} />
      </Route>
      <Route path="/recipefork-frontend/userPage">
        <UserPage auth={auth} />
      </Route>
      <Route path="/recipefork-frontend/recipePage" exact component={RecipePage} />
      <Route path="/recipefork-frontend/createRecipePage" exact component={CreateRecipePage} />
      <Route path="/recipefork-frontend/settingsPage">
        <Settings auth={auth} />
      </Route>
    </div>
  );
}

export default App;