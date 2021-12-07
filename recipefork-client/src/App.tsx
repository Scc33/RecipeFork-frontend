import React from 'react';
import logo from "./resource/recipeFork.png"
import k from "./resource/K.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo}/>
      <h1>RecipeFork</h1>
      <form>
        <label>Email</label>
        <input
          type="text" />
        <label>Password</label>
        <input
          type="password" />
      </form>
      <a>Forgot password</a>
      <button>Login</button>
      Not a member? <a>Sign up</a>

      <img src={k}/>
      <h1>RecipeFork</h1>
      <h2>Create Account</h2>
      <form>
        <label>Username</label>
        <input
          type="text" />
        <label>Email</label>
        <input
          type="text" />
        <label>Password</label>
        <input
          type="password" />
        <label>Verify Password</label>
        <input
          type="password" />
      </form>

      <h1>RecipeFork</h1>
      <h2>Reset Password</h2>
      Forgot password?
      <form>
      <label>Email</label>
      <input
        type="text" />
      </form>
      <button>Send Password Reset Email</button>

      Recipes
      Activity

      Username
      Posted Recipes
      Forks
      Pinned Recipes
      Contributions

      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
