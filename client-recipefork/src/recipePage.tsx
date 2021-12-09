import React from 'react';
import AppNavbar from './navbar'
import Button from 'react-bootstrap/Button'
import k from "./resource/K.png"

class RecipePage extends React.Component {
  render() {
    return <div className="app vertical">
      <AppNavbar />
      <div className="horizontal">
        <div className="vertical left-align recipes-title">
          <h3>Recipe name</h3>
          <h5>By Username</h5>
          <h5>Forks</h5>
        </div>
        <div className="padding">
          <Button variant="outline-secondary">Fork</Button>{' '}
          <Button variant="outline-secondary">Edit</Button>{' '}
        </div>
      </div>
      <div className="horizontal recipes-info ">
        <img src={k} />
        <div className="vertical left-align">
          <h6>Prep time: 1h20m</h6>
          <h6>Cook time: 2h</h6>
          <h5>Ingredients</h5>
          <p>Lorem...</p>
          <h5>Instructions</h5>
          <p>Lorem...</p>
          <div className="horizontal">
            <div className="padding recipes-tags">
              <Button variant="primary">Primary</Button>{' '}
              <Button variant="secondary">Secondary</Button>{' '}
              <Button variant="success">Success</Button>{' '}
              <Button variant="warning">Warning</Button>{' '}
              <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default RecipePage