import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlus, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './login.css';

function Login() {
  return (
    <Row xs={12} className="login">
      <Col>
        <Row xs={12} className="title">
          <Col>
            <strong>Login</strong>
          </Col>
        </Row>
        <Row xs={12} className="icons">
          <Col className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </Col>
          <Col className="icon">
            <FontAwesomeIcon icon={faGooglePlus} />
          </Col>
          <Col className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Col>
        </Row>
        <Row xs={12} className="subtitle">
          <Col>
            Ou use sua conta
          </Col>
        </Row>
        <Form>
          <Col xs={12}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Row xs={12} className="helper-password">
              <Col>
                Esqueceu sua senha?
              </Col>
            </Row>
            <Row xs={12} className="form-buttons">
              <Col>
                <Button variant="primary" size="lg" className="btn-login" block type="submit">
                  Entrar
                </Button>
              </Col>
            </Row>
          </Col>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;