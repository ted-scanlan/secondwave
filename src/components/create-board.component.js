import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import InputRange from 'react-input-range';

class CreateBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      description: '',
      location: '',
      contact: '',
      price: 0,


    }

    this.onSubmit1 = this.onSubmit1.bind(this)
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    // this.onChangeContact = this.onChangeContact.bind(this);



  }

  // componentDidMount() {     //this function runs right before the component loads on the page
  //
  // }
  //
  onChangeHeadline(e) {
    this.setState({
      headline: e.target.value
    })
    console.log(this.state.headline);
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



  onSubmit1(e) {


    const board = {
       headline: this.state.headline,
      description: this.state.description,
      location: this.state.location,
      price: this.state.price,

    }
    console.log("njjdknj");
    console.log(board);
e.preventDefault()

     // window.location = '/';



  }






render() {

  return (

    <Form onSubmit={ e => this.onSubmit1(e) }>
    <FormGroup row>
      <Label for="exampleText" sm={2} >Headline</Label>
      <Col sm={10}>
        <Input type="textarea" name="text" id="exampleText" maxLength="50"
        value={this.state.headline}
        onChange={this.onChangeHeadline}

          />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleText" sm={2} >Description</Label>
      <Col sm={10}>
        <Input type="textarea" name="text" id="exampleText" maxLength="300"
        value={this.state.description}
        onChange={this.onChangeDescription}/>
      </Col>
    </FormGroup>

      <FormGroup row>
        <Label for="exampleText" sm={2} >Location</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" maxLength="300"
          value={this.state.location}
          onChange={this.onChangeLocation}/>
        </Col>
      </FormGroup>

      <FormGroup>
      <Label for="exampleNumber">Price</Label>
      <Input
        type="number"
        name="number"
        id="exampleNumber"
        value={this.state.price}
        onChange={this.onChangePrice}

      />
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
