import React from 'react';
import LoginPage from './containers/loginAndSigin'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './app.css';

function App() {
  return (
    <Container>
      <Row xs={12} className="app">
        <Col>
          <LoginPage />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
