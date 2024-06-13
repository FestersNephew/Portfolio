import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Family.css";
import takoda from "../../Assets/Family/takoda.JPEG"; 
import mossie from "../../Assets/Family/mossie.JPEG";
import jme from "../../Assets/Family/jme.JPEG"; 
import Particle from "../Particle";

function Family() {
    return (
      <Container className="family-container">
        <Particle />
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="family-title">My Family</h1>
            <p className="family-description">
              These three are my everything. They are why I do everything and who I do things for.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="family-member">
            <div className="family-thumbnail-container pulsing">
              <img src={takoda} alt="Takoda" className="family-thumbnail-image" />
            </div>
            <h3 className="family-name">Takoda</h3>
            <p className="family-text">
              Takoda, 17, is graduating from high school tomorrow and plans to attend the University of Kent in Canterbury, UK, to study military history. His dedication and passion for history have always been inspiring, and we are incredibly proud of his achievements and ambitions.
            </p>
          </Col>
          <Col md={4} className="family-member">
            <div className="family-thumbnail-container pulsing">
              <img src={mossie} alt="Mossie" className="family-thumbnail-image" />
            </div>
            <h3 className="family-name">Mossie</h3>
            <p className="family-text">
              Mossie, 14, is starting high school next year at Burr and Burton Academy. She has recently developed a keen interest in theater, bringing a new level of creativity and enthusiasm into our lives. Her performances and dedication to her craft are truly a joy to witness.
            </p>
          </Col>
          <Col md={4} className="family-member">
            <div className="family-thumbnail-container pulsing">
              <img src={jme} alt="Jme" className="family-thumbnail-image" />
            </div>
            <h3 className="family-name">Jme</h3>
            <p className="family-text">
              My wife Jme, just five days older than me and also a Taurus, has been my partner since around 2004. Together, we've raised dogs, cats, humans, sheep, rabbits, chickens, snakes, and more. Jme is a music fan and talented violinist, especially loving bluegrass and folk music. She works in management at a local credit union and has a passion for serving and helping people. Her kindness and dedication to both her family and community are truly inspiring.
            </p>
          </Col>
        </Row>
      </Container>
    );
}

export default Family;
