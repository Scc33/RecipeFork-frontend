import React from 'react';
import AppNavbar from './navbar'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import './createRecipePage.scss'

class CreateRecipePage extends React.Component {

  render() {
    return <div className="app">
      <Container>
        <h2 className="center-align">Create Recipe</h2>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="control1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Mac n Cheese" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control2">
              <Form.Label>Prep time</Form.Label>
              <Form.Control
                type="text"
                placeholder="1h20m" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control3">
              <Form.Label>Prep time</Form.Label>
              <Form.Control
                type="text"
                placeholder="2h15m" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control4">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Mac and Cheese"
                rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control4">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Mix and cook"
                rows={3} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="control5" className="mb-3">
              <Form.Label>Tags</Form.Label>
              <button className="tag">🧇 Breakfast</button>{' '}
              <button className="tag">🍬 Sweet</button>{' '}
              <button className="tag">🥘 Savory</button>{' '}
              <button className="tag">🍹 Drinks</button>{' '}
              <button className="tag">🥗 Vegetarian</button>{' '}
              <button className="tag">🌱 Vegan</button>{' '}
              <button className="tag">🌾 Gluten Free</button>{' '}
              <button className="tag">☪️ Halal</button>{' '}
              <button className="tag">✡️ Kosher</button>{' '}
            </Form.Group>
            <div className="center-button">
              <button className="submit">Publish</button>
            </div>
          </Form>
          </div>
        </Container>
    </div>;
  }
}

export default CreateRecipePage