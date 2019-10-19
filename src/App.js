import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar1 from "./components/navbar.component";
import BoardsList from "./components/boards-list.component";
import CreateBoard from "./components/create-board.component";
import CreateUser from "./components/create-user.component";




function App() {
  return (
    <Router>
    <div className="container">
      <Navbar1 />
      <br/>
      <Route path="/" exact component={BoardsList} />
      <Route path="/create" exact component={CreateBoard} />
      <Route path="/user" exact component={CreateUser} />
    </div>

    </Router>
  );
}

export default App;
