import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Reiki.css";
import certificate from "../../Assets/Projects/reiki_certification.png";
import license from "../../Assets/Projects/vermont_license.png";
import reiki1 from "../../Assets/Projects/reiki1.JPEG";
import reiki2 from "../../Assets/Projects/reiki2.JPEG";
import reiki3 from "../../Assets/Projects/reiki3.JPEG";

function Reiki() {
  return (
    <Container className="reiki-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="reiki-title">My Reiki Practice</h1>
          <p className="reiki-description">
            Reiki is an ancient healing art that channels universal life force energy to promote physical, emotional, and spiritual well-being. My journey with Reiki has been deeply personal and transformative. It’s a connection that feels both comforting and familiar, even if not fully understood.
          </p>
          <p className="reiki-description">
            I offer in-person Reiki sessions, either at your location or in a safe and comfortable space provided by me. I request a minimum donation of $30 for each session, with the hope that you will experience profound healing and comfort through my practice.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <div className="expandable-thumbnail-container">
              <Card.Img variant="top" src={certificate} alt="Reiki Certification" className="expandable-thumbnail-image" />
            </div>
            <Card.Body>
              <Card.Title className="card-title">Reiki Certification</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <div className="expandable-thumbnail-container">
              <Card.Img variant="top" src={license} alt="Vermont Practice License" className="expandable-thumbnail-image" />
            </div>
            <Card.Body>
              <Card.Title className="card-title">Vermont Practice License</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <div className="thumbnail-container">
              <Card.Img variant="top" src={reiki1} alt="Reiki Practice 1" className="thumbnail-image" />
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <div className="thumbnail-container">
              <Card.Img variant="top" src={reiki2} alt="Reiki Practice 2" className="thumbnail-image" />
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <div className="thumbnail-container">
              <Card.Img variant="top" src={reiki3} alt="Reiki Practice 3" className="thumbnail-image" />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Reiki;
