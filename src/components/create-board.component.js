import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: '',
      contact: '',
      price: 0,
      date: new Date(),

    }

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);


  }

  componentDidMount() {     //this function runs right before the component loads on the page

  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }


  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      location: this.state.location,
      price: this.state.price,
      date: this.state.date
    }
    console.log(exercise);

    window.location = '/';

  }






render() {

  return (

    <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelect">Select</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelectMulti">Select Multiple</Label>
      <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="exampleText">Text Area</Label>
      <Input type="textarea" name="text" id="exampleText" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleFile">File</Label>
      <Input type="file" name="file" id="exampleFile" />
      <FormText color="muted">
        This is some placeholder block-level help text for the above input.
        It's a bit lighter and easily wraps to a new line.
      </FormText>
    </FormGroup>
    <FormGroup tag="fieldset">
      <legend>Radio Buttons</legend>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          Option one is this and that—be sure to include why it's great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup check disabled>
        <Label check>
          <Input type="radio" name="radio1" disabled />{' '}
          Option three is disabled
        </Label>
      </FormGroup>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" />{' '}
        Check me out
      </Label>
    </FormGroup>
    <Button>Submit</Button>
  </Form>
  );
}
}



export default CreateBoard;
