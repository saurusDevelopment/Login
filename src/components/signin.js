import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './signin.css';

function Login() {
  return (
    <Row xs={12} className="signin">
      <Col>
        <Row xs={12} className="title">
          <Col>
            <strong>Olá, amigo!</strong>
          </Col>
        </Row>
        <Row xs={12} className="subtitle">
          <Col>
            Digite seus dados pessoais e comece
            a jornada conosco
          </Col>
        </Row>
        <Row xs={12} className="buttons">
          <Col>
            <Button variant="primary" size="lg" className="btn-signin" block type="submit">
              Registro
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Login;