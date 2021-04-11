import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <i className="fas fa-bell text-success"></i>
        </Navbar.Text>
        <Navbar.Text>
          <i className="fas fa-user text-success"></i>
        </Navbar.Text>
        <Navbar.Text>Log Out</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
