import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import pdf from "../../Assets/TrentCV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);  // Set the initial width

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);  // Update width on window resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ marginTop: "50px" }}>
        <Particle />
        <Row style={{ justifyContent: "center", paddingBottom: "10px", position: "relative", zIndex: 1 }}>
          <Col md={8} className="text-center">
            <h1>Trent Stephens - Resume</h1>
            <p>Download my CV to learn more about my professional background and skills.</p>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
