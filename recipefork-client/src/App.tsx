import React from 'react';
import logo from "./resource/recipeFork.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo}/>
      <form>
        <label>emails</label>
        <input
          type="text" />
        <label>password</label>
        <input
          type="password" />
      </form>
      <a>Forgot password</a>
      <button>Login</button>
      Not a member? <a>Sign up</a>
      <header className="App-header">
        Recipes
        Activity
      </header>
    </div>
  );
}

export default App;
