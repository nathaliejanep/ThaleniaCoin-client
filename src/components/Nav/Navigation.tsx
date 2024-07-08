import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../../hooks/AuthProvider';
const Navigation: React.FC = () => {
  // OPTIMIZE make it close after click on link
  return (
    <>
      <Navbar
        fixed='top'
        expand='lg'
        className='bg-body-tertiary'
      >
        <Container fluid>
          <Navbar.Brand href='/'>IdTrust</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='ms-auto'>
              <NavLink
                to={'/'}
                className={'nav-link'}
              >
                Home
              </NavLink>

              <NavLink
                to={'login'}
                className={'nav-link'}
              >
                Login
              </NavLink>

              <NavLink
                to={'register'}
                className={'nav-link'}
              >
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
