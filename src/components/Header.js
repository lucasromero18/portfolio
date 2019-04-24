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
      borderBottom: "1px solid #00ffff",
      display: 'flex',
      justifyContent: 'center',
      position: "fixed",
      zIndex: "1000",
      width: "100%",
      top: "0"
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
                <a href="#home"><NavbarBrand style={navLinks.styles}>Home</NavbarBrand></a>
            </NavItem>
            <NavItem>
            <a href="#aboutme"><NavbarBrand style={navLinks.styles}>About</NavbarBrand></a>
            </NavItem>
            <NavItem>
            <a href="#applications"><NavbarBrand style={navLinks.styles}>Projects</NavbarBrand></a>
            </NavItem>
            <NavItem>
            <a href="#tsSkills"><NavbarBrand style={navLinks.styles}>Skills</NavbarBrand></a>
            </NavItem>
            <NavItem>
            <a href="#contactInfo"><NavbarBrand style={navLinks.styles}>Contact</NavbarBrand></a>
            </NavItem>
          </Nav>
        </Navbar>
        </>
      );
    }
  }
  
  export default Header;