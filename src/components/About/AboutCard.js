import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Trent Stephens</span> from <span className="purple">West Pawlet, Vermont.</span>
            <br />
            With a background in <span className="purple">Ecotourism and Adventure Travel</span>, I've enjoyed a dynamic career ranging from teaching outdoor sports to managing a 3,000+ acre farm. Currently, I thrive as a <span className="purple">Real Estate Agent</span> in Southern Vermont, utilizing my extensive knowledge of property management and sustainable living.
            <br />
            My passion for technology has led me into <span className="purple">web development and blockchain technology</span>, where I enjoy creating innovative solutions for digital asset management and smart contracts.
            <br />
            I am also known as <span className="purple">Uncle Festers Nephew</span> in the developer community. Reach out if you'd like to collaborate on a project!
            <br />
            <br />
            When I'm not navigating the complexities of real estate or coding, I am:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on our organic farm raising sheep, chickens, and rabbits
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring creative outlets through 3D animation and art
            </li>
            <li className="about-activity">
              <ImPointRight /> Enhancing my skills in modern web technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Uncle Festers Nephew</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
