import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
  const handleSignout=()=>{
    signOut(auth);
  }
  const [user]=useAuthState(auth);
    return (
       
        <>
       
       <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img height={60} width={80} src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Brand as={Link} to="/">
      <p className='fs-2 fw-bold'>Dental Doctor</p>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="home#services"><span className='fs-6 bg-info rounded-pill p-2 text-dark fw-bold'>Services</span></Nav.Link>
    <Nav.Link href="home#dentist"><span className='fs-6 bg-info rounded-pill p-2 text-dark fw-bold'>Dentist</span></Nav.Link>
    </Nav>
    <Nav>
        <Nav.Link className='fs-6  fw-bold' as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className='fs-6  fw-bold' as={Link} to="/about">About</Nav.Link>
        <Nav.Link className='fs-6  fw-bold' as={Link} to="/blogs">Blogs</Nav.Link>
      {
        user ?
        <button className='btn btn-primary text-decoration-none' onClick={handleSignout}>Sign Out</button>

        :
        <Nav.Link as={Link} to="/login">
       Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      
       
      </>
    );
};

export default Header;