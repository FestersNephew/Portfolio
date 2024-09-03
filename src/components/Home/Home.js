import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import styles from "./Home.module.css";
import ProfileTransition from "./ProfileTransition";

function Home() {
  return (
    <section className={`${styles.homePage}`}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TRENT KENT STEPHENS</strong>
              </h1>

              <div style={{ padding: "20px 0", textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} className="profile-transition-col">
              <ProfileTransition />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
