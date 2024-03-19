import React from 'react'
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';
import './Navbar.css';

const Topnav = () => {

  const menuData = [
    {
      path:'/',
      name: "home"
    },
    {
      path:'/community',
      name: "community"
    },
    {
      path:'/aboutus',
      name: "aboutus"
    },
    {
      path:'/contact',
      name: "contact"
    },
    {
      path:'/product',
      name: "product"
    },
    {
      path:'/',
      name: "home"
    },
  ]
  return (

    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className='brand' >WhatsPopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              menuData.map((item)=>(
                <NavLink to={item.path} key={item.name}>
                  <div className="list_item">{item.name}</div>
                </NavLink>
              ))
            }
          </Nav>
          <Nav className='ms-auto'>
            <button className='btn btn-success' id='btn1'>Sign Up</button>
            <button className='btn btn-success' id='btn2'>Log In</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnav;
