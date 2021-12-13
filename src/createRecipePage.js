import React from 'react';
import AppNavbar from './navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

class CreateRecipePage extends React.Component{
  state = {
    id: '',
    recipe: {},
    edit: false,
    checkEdit: false,
  }

  render() {
    if (!this.state.checkEdit) {
      const search = this.props.location.search;
      const url_id = new URLSearchParams(search).get("id");
      const edit = new URLSearchParams(search).get("edit");
      if (edit) {
        axios.get(`http://localhost:4000/api/recipes?where={"_id":"${url_id}"}`)
        .then(res => {
          const recipe = res.data.data;
          console.log(typeof (res.data.data), res.data.data, Object.values(res.data.data));
          this.setState({ id: url_id, recipe: recipe[0] , edit: true, checkEdit: true});
          console.log("id", url_id, recipe[0])
        })
      } else {
        this.setState({ checkEdit: true });
      }
      return <div className="app">Loading...</div>
    } else {
      return <div className="app">
        <Container>
          <h2 className="center-align">Create Recipe</h2>
          <Form>
            <Form.Group className="mb-3" controlId="control1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Mac n Cheese"
                value={this.state.edit ? this.state.recipe.name : ""} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control2">
              <Form.Label>Prep time</Form.Label>
              <Form.Control
                type="text"
                placeholder="1h20m"
                value={this.state.edit ? this.state.recipe.cookTime : ""} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control3">
              <Form.Label>Prep time</Form.Label>
              <Form.Control
                type="text"
                placeholder="2h15m"
                value={this.state.edit ? this.state.recipe.prepTime : ""} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control4">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Mac and Cheese"
                rows={3}
                value={this.state.edit ? this.state.recipe.ingredients : ""} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control4">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Mix and cook"
                rows={3}
                value={this.state.edit ? this.state.recipe.instructions : ""} />
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
            <Button type="submit">Publish</Button>
          </Form>
        </Container>
      </div>;
    }
  }
}

export default CreateRecipePage