// DisclosureSection.js
import React from "react";
import { Row, Col } from "react-bootstrap";

function DisclosureSection() {
  return (
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
          Please{" "}
          <a
            className="disclosure-button"
            href="https://forms.gle/eyzEbzdjrMQBwDK86"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accept Disclosures
          </a>
          {" "}to submit your signature.
        </p>
      </Col>
    </Row>
  );
}

export default DisclosureSection;
