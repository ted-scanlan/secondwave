import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Navbar1 = (props) => {         // this is a function component rather than the normal class component, as this allows us to use hooks. this function could also be written as: function Example(props) {}. these were originally stateless components but we can not "hook" into React feautures such as state . useState is a Hook that lets you add React state to a function compoenent. https://reactjs.org/docs/hooks-state.html
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">SecondWave</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user">Sign up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/create">Post a board</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar1;
