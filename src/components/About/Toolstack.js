import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.apple.com/macos/" target="_blank" rel="noopener noreferrer">
          <SiMacos />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
          <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">
          <SiSlack />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <SiVercel />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
