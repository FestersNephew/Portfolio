import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChakraSection from "./ChakraSection";
import "./Reiki.css";
import certificate from "../../Assets/Reiki/reiki_certification.png";
import license from "../../Assets/Reiki/vermont_license.png";
import reiki1 from "../../Assets/Reiki/reiki1.JPEG";
import reiki2 from "../../Assets/Reiki/reiki2.JPEG";
import reiki3 from "../../Assets/Reiki/reiki3.JPEG";
import Particle from "../Particle";

function Reiki() {
  return (
    <div className="reiki-background">
      <Container className="reiki-container">
        <Particle />
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
        <ChakraSection />

        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <h2 className="reiki-title">Required Disclosures</h2>
            <p className="reiki-description">
              Please review the following important disclosures before your first treatment:
            </p>
            <ul>
              <li>Actions that constitute unprofessional conduct. <a href="https://legislature.vermont.gov/statutes/section/26/105/05427" target="_blank" rel="noopener noreferrer">26 V.S.A. Section 5427</a>, <a href="https://legislature.vermont.gov/statutes/section/03/005/00129a" target="_blank" rel="noopener noreferrer">3 V.S.A. Section 129a</a></li>
              <li>How to file a complaint with OPR. <a href="https://sos.vermont.gov/opr/complaints-conduct-discipline/" target="_blank" rel="noopener noreferrer">File a Complaint</a></li>
              <li>How to get more information about the profession and registered professionals from OPR. <a href="https://sos.vermont.gov/massage-therapists-bodyworkers-and-touch-professionals/" target="_blank" rel="noopener noreferrer">More Information</a></li>
            </ul>
            <p>
              Please <a className="disclosure-link" href="https://forms.gle/eyzEbzdjrMQBwDK86" target="_blank" rel="noopener noreferrer">click here</a> to acknowledge these disclosures and submit your signature.
            </p>

          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="reiki-member">
            <div className="reiki-thumbnail-container pulsing">
              <img src={certificate} alt="Reiki Certification" className="reiki-thumbnail-image" />
            </div>
            <h3 className="reiki-name">Reiki Certification</h3>
          </Col>
          <Col md={4} className="reiki-member">
            <div className="reiki-thumbnail-container pulsing">
              <img src={license} alt="Vermont Practice License" className="reiki-thumbnail-image" />
            </div>
            <h3 className="reiki-name">Vermont Practice License</h3>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="reiki-member">
            <div className="reiki-thumbnail-container pulsing">
              <img src={reiki1} alt="Reiki Practice 1" className="reiki-thumbnail-image" />
            </div>
          </Col>
          <Col md={4} className="reiki-member">
            <div className="reiki-thumbnail-container pulsing">
              <img src={reiki2} alt="Reiki Practice 2" className="reiki-thumbnail-image" />
            </div>
          </Col>
          <Col md={4} className="reiki-member">
            <div className="reiki-thumbnail-container pulsing">
              <img src={reiki3} alt="Reiki Practice 3" className="reiki-thumbnail-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reiki;
