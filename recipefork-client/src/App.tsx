import React from 'react';
import logo from "./resource/recipeFork.png"
import k from "./resource/K.png"
import Login from "./login"
import './App.css';
import CreateAccnt from './createAcct';
import ResetPassword from './resetPassword';
import HomePage from "./homePage"
import UserPage from './userPage';
import RecipePage from './recipePage';

function App() {
  return (
    <div className="App">
      <img src={logo}/>
      <h1>RecipeFork</h1>
      <Login/>

      <img src={k}/>
      <h1>RecipeFork</h1>
      <CreateAccnt/>

      <h1>RecipeFork</h1>
      <ResetPassword/>

      <HomePage/>

      <UserPage/>

      <RecipePage/>

      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
