import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Topnav = () => {
  const menuData = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/community",
      name: "community",
    },
    {
      path: "/about-us",
      name: "about-us",
    },
    {
      path: "/contact",
      name: "contact",
    },
    {
      path: "/product",
      name: "product",
    },
  ];

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          WhatsPopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-center">
            <Nav className="me-auto">
              {menuData.map((item) => (
                <Link className="nav-link" to={item.path} key={item.path}>
                  {item.name}
                </Link>
              ))}
            </Nav>
          </div>
          <Nav className="ms-auto">
            <button className="btn btn-success" id="btn1">
              Sign Up
            </button>
            <button className="btn btn-success" id="btn2">
              Log In
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
