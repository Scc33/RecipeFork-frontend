import React from 'react';
import Login from "./login"
import './App.css';
import CreateAccnt from './createAcct';
import ResetPassword from './resetPassword';
import HomePage from "./homePage"
import UserPage from './userPage';
import RecipePage from './recipePage';
import CreateRecipePage from './createRecipePage';
import Settings from './createRecipePage';
import {
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserCredential } from 'firebase/auth';

function App() {
  const [auth, setAuth] = React.useState<UserCredential | null>(null);

  if (!auth) {
    return (
      <div className="App">
        <Route path="/recipeFork/">
          <Login setAuth={setAuth} />;
        </Route>
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
      <Route path="/recipeFork/" exact component={HomePage} />
      <Route path="/recipeFork/home" exact component={HomePage} />
      <Route path="/recipeFork/userPage" exact component={UserPage} />
      <Route path="/recipeFork/recipePage" exact component={RecipePage} />
      <Route path="/recipeFork/createRecipePage" exact component={CreateRecipePage} />
      <Route path="/recipeFork/settingsPAge" exact component={Settings} />
    </div>
  );
}

export default App;