import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class CreateRecipePage extends React.Component {
  state = {
    id: '',
    recipe: {},
    edit: false,
    fork: false,
    checkEdit: false,

    title: '',
    cookTime: '',
    prepTime: '',
    ingredients: '',
    instructions: '',
    tags: [],
    image: '',

    redirect: false,
  }

  onSubmit = () => {
    const saved = localStorage.getItem("auth");
    const local_user_data = JSON.parse(saved);
    const local_user_data_email = local_user_data.user.email;
    var user_id = '';
    axios.get(`https://recipefork-backend.herokuapp.com/api/users?where={"email":"${local_user_data_email}"}`).then(res => {
      console.log(res)
      const user = res.data.data;
      user_id = user[0]._id;
      if (this.state.edit) {
        axios.put(`https://recipefork-backend.herokuapp.com/api/recipes/${this.state.id}`,
          {
            userId: user_id,
            name: this.state.title,
            cookTime: this.state.cookTime,
            prepTime: this.state.prepTime,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            tags: this.state.tags,
            image: this.state.image
          }).then(data => {
            this.setState({ redirect: true });
          }).catch(error => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          })
      } else {
        axios.post(`https://recipefork-backend.herokuapp.com/api/recipes/`,
          {
            userId: user_id,
            name: this.state.title,
            cookTime: this.state.cookTime,
            prepTime: this.state.prepTime,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            tags: this.state.tags,
            image: this.state.image
          }).then(data => {
            this.setState({ redirect: true, id: data.data.data._id });
          }).catch(error => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          })
      }
    })
  };

  render() {
    if (!this.state.checkEdit) {
      const search = this.props.location.search;
      const url_id = new URLSearchParams(search).get("id");
      const edit = new URLSearchParams(search).get("edit");
      const fork = new URLSearchParams(search).get("fork");
      if (edit || fork) {
        axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"_id":"${url_id}"}`)
          .then(res => {
            const recipe = res.data.data;
            console.log(typeof (res.data.data), res.data.data, Object.values(res.data.data));
            this.setState({ id: url_id, recipe: recipe[0], edit: edit, fork: fork, checkEdit: true, title: recipe[0].name, cookTime: recipe[0].cookTime, prepTime: recipe[0].prepTime, ingredients: recipe[0].ingredients, instructions: recipe[0].instructions, tags: recipe[0].tags, image: recipe[0].image });
            console.log("id", url_id, recipe[0])
          })
      } else {
        this.setState({ checkEdit: true });
      }
      return <div className="app">Loading...</div>
    } else {
      return <div className="app">
        <Container>
          <h2 className="center-align">{this.state.edit ? "Edit" : (this.state.fork) ? "Fork" : "Create"} Recipe</h2>
          <Form>
            <Form.Group className="mb-3" controlId="control1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Mac n Cheese"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control2">
              <Form.Label>Cook time</Form.Label>
              <Form.Control
                type="text"
                placeholder="1h20m"
                value={this.state.cookTime}
                onChange={e => this.setState({ cookTime: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control3">
              <Form.Label>Prep time</Form.Label>
              <Form.Control
                type="text"
                placeholder="2h15m"
                value={this.state.prepTime}
                onChange={e => this.setState({ prepTime: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control4">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Mac and Cheese"
                rows={3}
                value={this.state.ingredients}
                onChange={e => this.setState({ ingredients: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="control4">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Mix and cook"
                rows={3}
                value={this.state.instructions}
                onChange={e => this.setState({ instructions: e.target.value })} />
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
            <Button
              onClick={this.onSubmit}>
              Publish
            </Button>
            {this.state.redirect ? (<Redirect push to={"/recipefork-frontend/recipePage?id=" + this.state.id} />) : null}
          </Form>
        </Container>
      </div>;
    }
  }
}

export default CreateRecipePage