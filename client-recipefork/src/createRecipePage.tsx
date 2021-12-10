import React from 'react';
import AppNavbar from './navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class CreateRecipePage extends React.Component {

  render() {
    return <div className="app vertical">
      <AppNavbar />
      <h3>Create Recipe</h3>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="control1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Mac n Cheese" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="control2">
            <Form.Label>Prep time</Form.Label>
            <Form.Control type="text" placeholder="1h20m" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="control3">
            <Form.Label>Prep time</Form.Label>
            <Form.Control type="text" placeholder="2h15m" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="control4">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control as="textarea" placeholder="Mac and Cheese" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="control4">
            <Form.Label>Instructions</Form.Label>
            <Form.Control as="textarea" placeholder="Mix and cook" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="control5" className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-dark">Dark</Button>
          </Form.Group>
          <Button variant="primary">Publish</Button>{' '}
        </Form>
      </Container>
    </div>;
  }
}

export default CreateRecipePage