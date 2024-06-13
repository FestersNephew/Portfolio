// src/components/Projects/Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ArtSlideshow from "./ArtSlideshow";
import myconet from "../../Assets/Projects/myconet.png";
import uniqueFungi from "../../Assets/Projects/uniqueFungi.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects, other than this page, that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myconet}
              isBlog={false}
              title="MycoNet"
              description="Myconet, Bittensor Validation Group staking page.  I created this page for the group and made it functional to connect your bittensor wallet and stake with the Myconet Group. "
              ghLink="https://festersnephew.github.io/MycoNetStaking/"
              demoLink="https://www.myconet.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uniqueFungi}
              isBlog={false}
              title="UniqueFungi NFT Project"
              description="Polygon NFT's art and smart contracts, and minting page all designed, coded and animated by me."
              ghLink="https://github.com/FestersNephew/hashlips_nft_minting_dapp"
              demoLink="https://uniquefungi.surge.sh/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <h2 className="project-heading">
              3D Art <strong className="purple">Slideshow</strong>
            </h2>
            <ArtSlideshow />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
