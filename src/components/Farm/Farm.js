import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import sheep from "../../Assets/Farm/sheep.png";
import rabbit from "../../Assets/Farm/rabbit.JPEG";
import chicken from "../../Assets/Farm/chicken.png";
import plant from "../../Assets/Farm/plant.png";
import "./Farm.css"; // Ensure this import is present
import Particle from "../Particle";

function Farm() {
  return (
    <div className="farm-layout">
      <div className="farm-sidebar">
        {/* Your animation component can go here */}
        <div id="animation-container"></div>
      </div>
      <div className="farm-content">
        <Container className="farm-container">
          <Particle />
          <Row className="justify-content-center">
            <Col md={8} className="text-center farm-text-center">
              <h1>Welcome to Flannel Fields Farm</h1>
              <p>
                Nestled in the serene landscapes of West Pawlet, Vermont, Flannel Fields Farm is a haven of tranquility and sustainable living. Our family takes pride in raising rabbits, chickens, and sheep in a nurturing and eco-friendly environment.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="mb-4 farm-card">
                <Card.Img variant="top" src={rabbit} alt="Rabbits" className="card-img-top"/>
                <Card.Body>
                  <Card.Title className="farm-card-title">Rabbits</Card.Title>
                  <Card.Text className="farm-card-text">
                    Our rabbits are raised on grass using "bunny tractors" that we move twice a day. This method provides them with fresh food while protecting them from natural predators. This approach ensures the rabbits receive the best nutrition in a safe and sustainable manner, fostering both their well-being and the health of our land.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 farm-card">
                <Card.Img variant="top" src={chicken} alt="Chickens" className="card-img-top"/>
                <Card.Body>
                  <Card.Title className="farm-card-title">Chickens</Card.Title>
                  <Card.Text className="farm-card-text">
                    Our chickens are kept within electric net fencing, and their mobile coop, or "chicken tractor," is moved regularly. This system allows them to forage extensively, often following the other animals to feed on insects attracted to the manure. This natural behavior enhances their diet and ensures healthier chickens, while also contributing to our farm's ecological balance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 farm-card">
                <Card.Img variant="top" src={sheep} alt="Sheep" className="card-img-top"/>
                <Card.Body>
                  <Card.Title className="farm-card-title">Sheep</Card.Title>
                  <Card.Text className="farm-card-text">
                    Our sheep are intensively rotationally grazed using electric net fencing powered by solar chargers. This method ensures they graze on the right grass at the right time, promoting optimal health for the animals and the land. This practice supports soil regeneration and maintains biodiversity, embodying our commitment to sustainable farming.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} className="text-center farm-text-center">
              <h2>Our Farming Philosophy</h2>
              <p>
                At Flannel Fields Farm, we believe in providing our animals with the best food and the least stress, all while fostering an environment that brings peace to us. We slaughter all our animals on the farm and butcher them for our family's food. This deep connection to the cycle of life is intense and emotional, but it brings a profound understanding of nature's rhythms and our role within it.
              </p>
            </Col>
          </Row>
          <div className="farm-plant-container">
            <img src={plant} alt="Growing Plant" className="farm-growing-plant" />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Farm;
