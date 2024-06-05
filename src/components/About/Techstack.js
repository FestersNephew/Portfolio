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
  SiTypescript,
  SiGraphql,
  SiBlender,
  SiUnity,
  SiIpfs,
  SiReactrouter,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://en.cppreference.com/w/" target="_blank" rel="noopener noreferrer">
          <CgCPlusPlus />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <SiTypescript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://golang.org/" target="_blank" rel="noopener noreferrer">
          <TbBrandGolang />
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
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
          <SiBlender />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
          <SiUnity />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">
          <SiIpfs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
          <SiGraphql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
          <SiReactrouter />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
