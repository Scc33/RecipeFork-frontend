import React from 'react';
import AppNavbar from './navbar'
import Form from 'react-bootstrap/Form'
import { TimeDurationInput } from 'react-time-duration-input'


class CreateRecipePage extends React.Component {

  render() {
    return <div className="app vertical">
      <AppNavbar />
      <TimeDurationInput
         />      
        <div className="horizontal">
        <Form>
          <Form.Group className="mb-3" controlId="control1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Mac n Cheese" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="control1">
            <Form.Label>Prep time</Form.Label>
            <Form.Control type="text" placeholder="1h" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>;
  }
}

export default CreateRecipePage