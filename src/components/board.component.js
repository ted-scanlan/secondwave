import React, { Component } from 'react';

const Board = props => (

  <tr>
  <td>{props.board.headline} </td>
  <td>{props.board.description} </td>
  <td>{props.board.location} </td>
  <td>{props.board.price} </td>
  <td>{props.board.contact} </td>
    <td>{props.board.createdAt} </td>


  </tr>

)

export default Board;
