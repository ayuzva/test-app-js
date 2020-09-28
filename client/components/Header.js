import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <div className="Header">
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="app">
              <img
                src="./components/embedded.jpg"
                width="20"
                height="20"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav variant="pills">
                <Nav.Link href="app">Home</Nav.Link>
                <Nav.Link href="app/issues">Issues</Nav.Link>
                <Nav.Link href="app/profile">Profile</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default Header;