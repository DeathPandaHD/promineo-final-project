import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <div>
            <div>
              <h2>Contact Manager</h2>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Header;
