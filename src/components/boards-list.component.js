import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import Board from './board.component.js'
import axios from 'axios';




class BoardsList extends Component {

  constructor(props) {
    super(props);
    this.state = {

      boards: []

    }


  }

  componentDidMount() {
    axios.get('http://localhost:5000/boards')
    .then(response => {
      this.setState({ boards: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  boardslist() {
    console.log(this.state.boards);
    return this.state.boards.map(currentboard => {    //for every item(board) in the array returned from the api request we return a "Board" component.
      return <Board board={currentboard} key={currentboard._id}/>
    })
  }





render() {

  return (
    <Table>
  <thead>
    <tr>
      <th>Headline</th>
      <th>Description</th>
      <th>Location</th>
      <th>Price</th>
      <th>Contact</th>
      <th>Added</th>
    </tr>
  </thead>
  <tbody>
  { this.boardslist() }


  </tbody>
</Table>

  );
}
}



export default BoardsList;
