import React from 'react';
import Button from 'react-bootstrap/Button'
import k from "./resource/K.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

class RecipePage extends React.Component {
  state = {
    id: '',
    recipe: null,
  }

  openEdit(id) {
    window.location.href = "/recipefork-frontend/createRecipePage?id=" + id + "&edit=true";
  }

  openFork(id) {
    window.location.href = "/recipefork-frontend/createRecipePage?id=" + id + "&fork=true";
  }

  render() {
    if (this.state.id === '') {
      const search = this.props.location.search;
      const url_id = new URLSearchParams(search).get("id");
      axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"_id":"${url_id}"}`)
        .then(res => {
          const recipe = res.data.data;
          console.log(typeof (res.data.data), res.data.data, Object.values(res.data.data));
          this.setState({ id: url_id, recipe: recipe[0] });
          console.log("id", url_id, recipe[0])
        })
      return <div className="app">Loading...</div>
    } else {
      console.log("id", this.state.recipe)
      return <div className="app">
        <Container>
          <Row>
            <Col className="left-align">
              <Row>
                <h3>{this.state.recipe["name"]}</h3>
              </Row>
              <Row>
                <h5>By Username | Forks</h5>
              </Row>
            </Col>
            <Col className="right-align padding">
              <Button variant="outline-secondary">Fork</Button>{' '}
              <Button variant="outline-secondary" onClick={() => this.openEdit(this.state.recipe["_id"])}>Edit</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="recipe-pic" src={k} />
            </Col>
            <Col className="left-align">
              <h6>Prep time: {this.state.recipe.cookTime}</h6>
              <h6>Cook time: {this.state.recipe.prepTime}</h6>
              <h5>Ingredients</h5>
              <p>{this.state.recipe.ingredients}</p>
              <h5>Instructions</h5>
              <p>{this.state.recipe.instructions}</p>
              <Row>
                <Col className="padding recipes-tags">
                  <Button variant="primary">Primary</Button>{' '}
                  <Button variant="secondary">Secondary</Button>{' '}
                  <Button variant="success">Success</Button>{' '}
                  <Button variant="warning">Warning</Button>{' '}
                  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>;
    }
  }
}

export default RecipePage