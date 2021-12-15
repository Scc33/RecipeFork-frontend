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
    user_id: '',
    username: '',
    can_edit: false,
    pinned: false,
    forkedFrom: '',
  }

  openEdit(id) {
    window.location.href = "/recipefork-frontend/createRecipePage?id=" + id + "&edit=true";
  }

  openFork(id) {
    window.location.href = "/recipefork-frontend/createRecipePage?id=" + id + "&fork=true";
  }

  updatePinned(new_pinned) {
    console.log(this.state.user_id)
    var user = null;
    axios.get(`https://recipefork-backend.herokuapp.com/api/users/${this.state.user_id}`).then(res1 => {
      user = res1.data.data;
      var pinned = user.pinnedRecipes;
      const idx = pinned.indexOf(this.state.id);
      if (idx === -1) {
        pinned.push(this.state.id);
      } else {
        pinned.splice(idx, 1);
      }
      axios.put(`https://recipefork-backend.herokuapp.com/api/users/${this.state.user_id}`, {
        _id: this.state.user_id,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic,
        pinnedRecipes: pinned,
      }).then(res => {
        this.setState({ pinned: new_pinned });
      }).catch(error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      })
    })
  }

  fork() {
    console.log("forking")
    axios.get(`https://recipefork-backend.herokuapp.com/api/recipes/${this.state.id}`).then(res => {
      var recipe = res.data.data;
      console.log("forkedNumber", recipe, this.state.id)
      recipe.forks = recipe.forks + 1;
      console.log("forkedNumber", recipe, this.state.id)
      axios.put(`https://recipefork-backend.herokuapp.com/api/recipes/${this.state.id}`,
        {
          _id: recipe._id,
          userId: recipe.userId,
          name: recipe.name,
          cookTime: recipe.cookTime,
          prepTime: recipe.prepTime,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          tags: recipe.tags,
          image: recipe.image,
          forks: recipe.forks,
          forkOrigin: recipe.forkOrigin
        }).then(data => {
          console.log(data, "forked");
          this.setState({ redirect: true });
          this.openFork(this.state.id);
        }).catch(error => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    }).catch(error => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
  }

  render() {
    if (this.state.id === '') {
      const saved = localStorage.getItem("auth");
      const local_user_data = JSON.parse(saved);
      const local_user_data_email = local_user_data.user.email;
      console.log(local_user_data_email);
      axios.get(`https://recipefork-backend.herokuapp.com/api/users?where={"email":"${local_user_data_email}"}`).then(res1 => {
        console.log(res1);
        const user = res1.data.data;
        const user_id = user[0]._id;
        const username = user[0].username;
        const pinned = user[0].pinnedRecipes;
        console.log("pinned: " + pinned);

        const search = this.props.location.search;
        const url_id = new URLSearchParams(search).get("id");
        axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"_id":"${url_id}"}`)
          .then(res2 => {
            console.log(res2)
            const recipe = res2.data.data;
            const can_id = (user_id === recipe[0].userId);
            if (pinned.includes(url_id)) {
              this.setState({ pinned: true });
            }
            if (recipe[0].forkOrigin !== null) {
              axios.get(`https://recipefork-backend.herokuapp.com/api/recipes?where={"_id":"${recipe[0].forkOrigin}"}`).then(res3 => {
                const forkedFrom = res3.data.data;
                this.setState({ forkedFrom: forkedFrom[0].name });
              }).catch(error => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              })
            }
            axios.get(`https://recipefork-backend.herokuapp.com/api/users/${recipe[0].userId}`).then(res4 => {
              const recipeCreator = res4.data.data.username;
              this.setState({ user_id: recipe[0].userId, id: url_id, recipe: recipe[0], can_edit: can_id, username: recipeCreator });
            }).catch(error => {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            })
          }).catch(error => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          })
      }).catch(error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      })
      return <div className="app">Loading...</div>
    } else {
      console.log("id", this.state.recipe, "pinned", this.state.pinned);
      return <div className="app">
        <Container>
          <Row>
            <Col className="left-align">
              <Row>
                <h3>{this.state.recipe["name"]}</h3>
              </Row>
              <Row>
                <h5>By <a href={"/recipefork-frontend/userPage?id=" + this.state.user_id}>{this.state.username}</a> | {this.state.recipe.forks} Forks </h5>
              </Row>
              <Row>
                {this.state.recipe["forkOrigin"] === null ? <h5>Original Recipe</h5> : <h5>Forked from recipe <a href={"/recipefork-frontend/recipePage?id=" + this.state.recipe["forkOrigin"]}>{this.state.forkedFrom}</a></h5>}
              </Row>
            </Col>
            <Col className="right-align">
              {this.state.can_edit ?
                (this.state.pinned ?
                  <Button variant="secondary" onClick={() => this.updatePinned(!this.state.pinned)}>Pinned</Button> : <Button variant="outline-secondary" onClick={() => this.updatePinned(!this.state.pinned)}>Pin</Button>)
                : ''
              }
              <Button className="margin" variant="outline-secondary" onClick={() => this.fork()}>Fork</Button>
              {this.state.can_edit ? <Button variant="outline-secondary" onClick={() => this.openEdit(this.state.recipe["_id"])}>Edit</Button> : ''}
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
                <Col className="recipes-tags">
                  <Button className="margin" variant="primary">Primary</Button>
                  <Button className="margin" variant="secondary">Secondary</Button>
                  <Button className="margin" variant="success">Success</Button>
                  <Button className="margin" variant="warning">Warning</Button>
                  <Button className="margin" variant="danger">Danger</Button> <Button variant="info">Info</Button>
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