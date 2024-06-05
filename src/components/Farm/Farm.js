import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import sheep from "../../Assets/Projects/sheep.png";
// Import other images similarly
import rabbit from "../../Assets/Projects/rabbit.JPEG";
import chicken from "../../Assets/Projects/chicken.png";

function Farm() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Welcome to Our Farm</h1>
          <p>
            Experience the joy and tranquility of our family farm. We take pride in raising rabbits, chickens, and sheep in a sustainable and loving environment.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={rabbit} alt="Rabbits" />
            <Card.Body>
              <Card.Title>Rabbits</Card.Title>
              <Card.Text>
                Our rabbits are raised with care, providing high-quality meat and fur. They live in spacious, clean environments and are fed a nutritious diet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={chicken} alt="Chickens" />
            <Card.Body>
              <Card.Title>Chickens</Card.Title>
              <Card.Text>
                Our free-range chickens lay the freshest eggs and provide delicious meat. They roam freely and are kept in healthy, safe conditions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={sheep} alt="Sheep" />
            <Card.Body>
              <Card.Title>Sheep</Card.Title>
              <Card.Text>
                Our sheep are prized for their wool and meat. We ensure they are well-cared for, with plenty of space to graze and roam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>Our Farming Philosophy</h2>
          <p>
            We believe in sustainable and ethical farming practices. Our animals are raised in humane conditions, with a focus on their well-being and health. We are committed to providing the best products while caring for the environment.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Farm;
