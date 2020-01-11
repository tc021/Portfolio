import React from "react";
import { Navbar, NavDropdown, Nav} from "react-bootstrap";
import './navbar.css';

const NavBar = props => {
    return (
        <Navbar className="color-nav" variant="dark">
          <Navbar.Brand href="/">Strona głowna</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="./about">O mnie</Nav.Link>
              <Nav.Link href="./education">Edukacja</Nav.Link>
              <Nav.Link href="./experience">Doświadczenie</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}
export default NavBar;