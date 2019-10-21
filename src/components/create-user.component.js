import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import axios from 'axios';

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
    username: '',


    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit1 = this.onSubmit1.bind(this)


  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
    console.log(this.state.username);

  }


    onSubmit1(e) {
console.log("dicks");
// e.preventDefault()
      const user = {
         username: this.state.username,
      }

      axios.post('http://localhost:5000/users/add', user)
      .then (res => {
        console.log(res.data);
      })
  
       e.preventDefault()

       // window.location = '/';



    }





render() {

  return (
    <Form onSubmit={ e => this.onSubmit1(e) }>
    <FormGroup row>
      <Label for="exampleText" sm={2} >Enter new username</Label>
      <Col sm={10}>
        <Input type="textarea" name="text" id="exampleText" maxLength="50"
        value={this.state.username}
        onChange={this.onChangeUsername}

          />
      </Col>
    </FormGroup>
    <FormGroup check row>
      <Col sm={{ size: 10, offset: 2 }}>
        <Button>Signup</Button>
      </Col>
    </FormGroup>

    </Form>


  );
}
}



export default CreateUser;
