import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

  const navBar = {
    styles: {
      backgroundColor: "#2a2a2a",
      borderTop: "1px solid #00ffff",
      marginTop: '-5px',
      display: 'flex',
      justifyContent: 'center'
    }
  }

  const navLinks = {
    styles: {
      fontFamily: 'Montserrat, sans-serif',
      color: "white",
      
    }
  }



class Header extends Component {
    render() {
      return (
        <>
        <Navbar style={navBar.styles} expand="md">
          <Nav navbar className="mx-auto">
            <NavItem>
                <NavbarBrand style={navLinks.styles}>Home</NavbarBrand>
            </NavItem>
            <NavItem>
                <NavbarBrand style={navLinks.styles}>About</NavbarBrand>
            </NavItem>
            <NavItem>
                <NavbarBrand style={navLinks.styles}>Projects</NavbarBrand>
            </NavItem>
            <NavItem>
                <NavbarBrand style={navLinks.styles}>Skills</NavbarBrand>
            </NavItem>
            <NavItem>
                <NavbarBrand style={navLinks.styles}>Contact</NavbarBrand>
            </NavItem>
          </Nav>
        </Navbar>
        </>
      );
    }
  }
  
  export default Header;