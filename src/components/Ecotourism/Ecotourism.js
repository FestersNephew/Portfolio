// src/components/Ecotourism/Ecotourism.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Ecotourism.css";
import Particle from "../Particle";
import Slideshow from "./Slideshow";
import rockClimbing from "../../Assets/Ecotourism/rock_climbing.jpg";
import rockClimbing2 from "../../Assets/Ecotourism/rock_climbing2.jpg";
import kayaking from "../../Assets/Ecotourism/kayaking.jpg";
import kayaking2 from "../../Assets/Ecotourism/kayaking2.jpg";
import kayaking3 from "../../Assets/Ecotourism/kayaking3.jpg";
import bahamas from "../../Assets/Ecotourism/bahamas.jpg";
import grandCanyon from "../../Assets/Ecotourism/grand_canyon.jpg";
import universal from "../../Assets/Ecotourism/universal.jpg";
import venice from "../../Assets/Ecotourism/venice.jpg";
import venice2 from "../../Assets/Ecotourism/venice2.jpg";
import camping from "../../Assets/Ecotourism/camping.jpg";
import certifications from "../../Assets/Ecotourism/certifications.jpg";
import awards from "../../Assets/Ecotourism/awards.jpg";
import guiding from "../../Assets/Ecotourism/guiding.jpg";

const kayakingImages = [kayaking, kayaking2, kayaking3];
const rockClimbingImages = [rockClimbing, rockClimbing2];
const travelImages = [bahamas, grandCanyon, universal, venice, venice2, camping];

function Ecotourism() {
  return (
    <Container className="ecotourism-container">
      <Particle />
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="ecotourism-title">Ecotourism and Adventure Travel</h1>
          <p className="ecotourism-description">
            Welcome to my journey through the world of ecotourism and adventure travel. With a degree in Ecotourism and Adventure Travel from Hocking College in Nelsonville, Ohio, in conjunction with Forfar Field Station on Andros Island in the Bahamas and Haliburton Forest in Canada, I have honed my skills and knowledge in this exciting field.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <img src={certifications} alt="Certifications" className="slide-image"/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="ecotourism-name">The Certifications I gained during my time at Hocking College</h3>
          <ul className="ecotourism-text">
            <li>Certified Interpretive Guide, National Association of Interpretive Guides</li>
            <li>Rope Rescue and Advanced Rope Rescue through the National Ranger School</li>
            <li>Wilderness First Responder</li>
            <li>Lifeguard</li>
            <li>CPR and First Aid</li>
            <li>Advanced Open Water Scuba Diver through PADI</li>
            <li>Level 3 Solo Canoe and Level 2 Whitewater Kayak Instructor through the American Canoe Association</li>
          </ul>
          <p className="ecotourism-text">
            I was honored at my graduation with an award for "Most Outstanding Contribution to Cross-Cultural Understanding" for my work in various countries during my college years.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <img src={awards} alt="Awards" className="slide-image"/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="ecotourism-name">My Experience</h3>
          <p className="ecotourism-text">
            After college, I taught outdoor skills, adventure sports, and whitewater instruction at Camp Shohola and with "Wild Rivers Inc.," where I taught whitewater safety and led groups in the Delaware Water Gap.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <img src={guiding} alt="Guiding" className="slide-image"/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="ecotourism-name">Kayaking Adventures</h3>
          <Slideshow images={kayakingImages} autoplaySpeed={3000} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="ecotourism-name">Rock Climbing Adventures</h3>
          <Slideshow images={rockClimbingImages} autoplaySpeed={4000} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="ecotourism-name">Travel Experiences</h3>
          <Slideshow images={travelImages} autoplaySpeed={5000} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="ecotourism-name">My Offerings</h3>
          <p className="ecotourism-text">
            Over the years, I have embarked on numerous trips and made connections with remarkable individuals and organizations around the world. These incredible places, run by passionate and dedicated people, offer experiences that can truly enrich your life. My goal is to connect you with these opportunities so that you can have unforgettable adventures that not only allow you to appreciate what you have but also teach you about different cultures. I aim to put together experiences that provide opportunities for volunteering and engaging with local communities, enabling you to share in and contribute to these wonderful places in meaningful ways.
        </p>
          <p className="ecotourism-text">
            Tell me about your dream vacation, and let's make it a reality. This is the launch pad for my career in tourism, which blends perfectly with my real estate career. Reach out to me and start planning your next adventure!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Ecotourism;
