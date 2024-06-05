import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import sheep from "../../Assets/Projects/sheep.png";
import rabbit from "../../Assets/Projects/rabbit.JPEG";
import chicken from "../../Assets/Projects/chicken.png";

function Farm() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 style={{ color: "#fff", marginBottom: "20px" }}>Welcome to Flannel Fields Farm</h1>
          <p style={{ color: "#ccc" }}>
            Nestled in the serene landscapes of West Pawlet, Vermont, Flannel Fields Farm is a haven of tranquility and sustainable living. Our family takes pride in raising rabbits, chickens, and sheep in a nurturing and eco-friendly environment.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4" style={{ backgroundColor: "#333", color: "#fff" }}>
            <Card.Img variant="top" src={rabbit} alt="Rabbits" />
            <Card.Body>
              <Card.Title>Rabbits</Card.Title>
              <Card.Text>
                Our rabbits are raised on grass using "bunny tractors" that we move twice a day. This method provides them with fresh food while protecting them from natural predators. This approach ensures the rabbits receive the best nutrition in a safe and sustainable manner, fostering both their well-being and the health of our land.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4" style={{ backgroundColor: "#333", color: "#fff" }}>
            <Card.Img variant="top" src={chicken} alt="Chickens" />
            <Card.Body>
              <Card.Title>Chickens</Card.Title>
              <Card.Text>
                Our chickens are kept within electric net fencing, and their mobile coop, or "chicken tractor," is moved regularly. This system allows them to forage extensively, often following the other animals to feed on insects attracted to the manure. This natural behavior enhances their diet and ensures healthier chickens, while also contributing to our farm's ecological balance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4" style={{ backgroundColor: "#333", color: "#fff" }}>
            <Card.Img variant="top" src={sheep} alt="Sheep" />
            <Card.Body>
              <Card.Title>Sheep</Card.Title>
              <Card.Text>
                Our sheep are intensively rotationally grazed using electric net fencing powered by solar chargers. This method ensures they graze on the right grass at the right time, promoting optimal health for the animals and the land. This practice supports soil regeneration and maintains biodiversity, embodying our commitment to sustainable farming.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 style={{ color: "#fff" }}>Our Farming Philosophy</h2>
          <p style={{ color: "#ccc" }}>
            At Flannel Fields Farm, we believe in providing our animals with the best food and the least stress, all while fostering an environment that brings peace to us. We slaughter all our animals on the farm and butcher them for our family's food. This deep connection to the cycle of life is intense and emotional, but it brings a profound understanding of nature's rhythms and our role within it.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Farm;
