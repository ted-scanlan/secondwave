import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import InputRange from 'react-input-range';

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

    <Form onSubmit={this.onSubmit}>
    <FormGroup row>
      <Label for="exampleText" sm={2} >Headline</Label>
      <Col sm={10}>
        <Input type="textarea" name="text" id="exampleText" maxLength="50"/>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleText" sm={2} >Description</Label>
      <Col sm={10}>
        <Input type="textarea" name="text" id="exampleText" maxLength="300"/>
      </Col>
    </FormGroup>

      <FormGroup row>
        <Label for="exampleText" sm={2} >Location</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" maxLength="300"/>
        </Col>
      </FormGroup>

      <FormGroup>
      <Label for="exampleNumber">Price</Label>
      <Input
        type="number"
        name="number"
        id="exampleNumber"

      />
    </FormGroup>



      <FormGroup row>
        <Label for="exampleFile" sm={2}>Pictures</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Post</Button>
        </Col>
      </FormGroup>
    </Form>


  );
}
}



export default CreateBoard;
