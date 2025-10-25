// src/pages/header/Header.js

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong>Employee Management System</strong>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Employee
          </Nav.Link>
          <Nav.Link as={Link} to="/employee" className="nav-link">
            Post Employee
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
