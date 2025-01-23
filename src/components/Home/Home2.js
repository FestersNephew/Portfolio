import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO <span className="purple"> MY WORLD </span>
            </h1>
            <p className="home-about-body">
              I’m <span className="purple">Trent Stephens</span>, and this website is where all the many sides of me come together. 
              <br />
              <div style={{ position: "relative", zIndex: 1 }}>
              <p className="home-about-body">
                By day, I’m a dedicated 
                <a 
                  href="https://trentkent.com/realestate" 
                  className="purple" 
                  style={{ textDecoration: "none" }}
                >
                  real estate agent
                </a>, helping people navigate one of life’s biggest decisions—buying or selling a home. Real estate keeps me connected to my community, grounded in the real world, and focused on building genuine relationships.
              </p>
              </div>
              <br />
              By night (and sometimes day!), I’m a passionate <b className="purple">full-stack developer</b>, crafting custom front-end and back-end solutions. My expertise spans:
              <ul>
                <li>
                  <b className="purple">Web and App Development</b> with cutting-edge frameworks like <b>React.js</b> and <b>Next.js</b>.
                </li>
                <li>
                  <b className="purple">Server Solutions</b> and <b>Database Management</b> for seamless integration.
                </li>
                <li>
                  <b className="purple">Blockchain Technology</b> and <b>Solidity</b> for decentralized solutions.
                </li>
              </ul>
              <br />
              This website is more than a portfolio—it’s a living, breathing showcase of the projects I’ve built and the passions that drive me. From developing virtual spaces on the web to staying deeply engaged in my community, I’m always exploring new ways to blend technology with human connection.
              <br />
              <br />
              I invite you to explore, collaborate, and join me on this journey. Whether you're looking for a custom solution, a real estate partner, or just someone to bounce ideas off of, I’m here to help you bring your vision to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Let’s <span className="purple">build something amazing</span> together
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FestersNephew"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/FSnephew"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/trent-stephens-vermont-real-estate/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/phatyfoods/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
