import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav/Navigation';
import './Root.css';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Root: React.FC = () => {
  return (
    <>
      <Nav />

      <Container>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <div id='root-child'>
            {/* We need to tell the root route where we want it to render its child routes. */}
            <Outlet />
          </div>
        </Col>
      </Container>
    </>
  );
};

export default Root;
