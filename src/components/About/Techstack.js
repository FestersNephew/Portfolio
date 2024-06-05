import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.cplusplus.com/" target="_blank" rel="noopener noreferrer">
          <CgCPlusPlus />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://soliditylang.org/" target="_blank" rel="noopener noreferrer">
          <SiSolidity />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <SiNextdotjs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
          <SiFirebase />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://redis.io/" target="_blank" rel="noopener noreferrer">
          <SiRedis />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
          <SiPostgresql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
          <DiJava />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
