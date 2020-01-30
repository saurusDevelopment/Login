import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Login from '../components/login'
import Signin from '../components/signin'

import './loginAndSigin.css';

function LoginPage() {
  return (
    <Container>
      <Row className="login-page">
        <Col xs={12} md={6}>
          <Login />
        </Col>
        <Col xs={12} md={6}>
          <Signin />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;