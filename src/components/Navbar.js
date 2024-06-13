import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { GiFarmer } from "react-icons/gi";
import { FaHome, FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    document.body.style.overflow = expand ? 'hidden' : 'auto';
  }, [expand]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  function handleToggle() {
    updateExpanded(!expand);
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar ${navColour ? "sticky" : ""}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse-custom">
          <Nav className="ms-auto nav-custom">
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Home">
                <AiOutlineHome className="nav-icon" />
                <span className="nav-tooltip">Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} className="nav-link-custom" title="About">
                <AiOutlineUser className="nav-icon" />
                <span className="nav-tooltip">About</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Dev Projects">
                <AiOutlineFundProjectionScreen className="nav-icon" />
                <span className="nav-tooltip">Dev Projects</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Resume">
                <CgFileDocument className="nav-icon" />
                <span className="nav-tooltip">Resume</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/farm" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Farm">
                <GiFarmer className="nav-icon" />
                <span className="nav-tooltip">Farm</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/realestate" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Real Estate">
                <FaHome className="nav-icon" />
                <span className="nav-tooltip">Real Estate</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/reiki" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Reiki">
                <FaHandHoldingHeart className="nav-icon" />
                <span className="nav-tooltip">Reiki</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/family" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Family">
                <FaUsers className="nav-icon" />
                <span className="nav-tooltip">Family</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/ecotourism" onClick={() => updateExpanded(false)} className="nav-link-custom" title="Ecotourism">
                <AiFillStar className="nav-icon" />
                <span className="nav-tooltip">Ecotourism</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="fork-btn">
            <Nav.Item>
              <Nav.Link as={Link} to="https://github.com/FestersNephew/Portfolio" target="_blank" className="nav-link-custom fork-btn-inner" title="GitHub">
                <CgGitFork className="nav-icon" /> <AiFillStar className="nav-icon" />
                <span className="nav-tooltip">GitHub</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
