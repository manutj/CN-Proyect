import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <Navbar 
        className="navbar navbar-dark bg-dark" 
        //style={{backgroundColor:"black"}}
        light expand="md">
          <NavbarBrand tag={Link} to="/">Mi aplicacion</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
              <NavLink tag={Link} to="/login/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signup/">Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
  
  export default Example;