import React from 'react';
import Button from 'react-bootstrap/Button'
import k from "./resource/K.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

class RecipePage extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:4000/api/recipes`)
      .then(res => {
        const recipes = res.data.data;
        console.log(typeof (res.data.data), res.data.data, Object.values(res.data.data));
        this.setState({ recipes });
      })
  }

  render() {
    return <div className="app vertical">
      <Container>
        <Row>
          <Col className="left-align">
            <Row>
              <h3>Recipe name</h3>
            </Row>
            <Row>
              <h5>By Username | Forks</h5>
            </Row>
          </Col>
          <Col className="right-align padding">
            <Button variant="outline-secondary">Fork</Button>{' '}
            <Button variant="outline-secondary">Edit</Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="recipe-pic" src={k} />
          </Col>
          <Col className="left-align">
            <h6>Prep time: 1h20m</h6>
            <h6>Cook time: 2h</h6>
            <h5>Ingredients</h5>
            <p>Lorem...</p>
            <h5>Instructions</h5>
            <p>Lorem...</p>
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

export default RecipePage