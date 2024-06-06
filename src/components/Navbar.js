import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { GiFarmer } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
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
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
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
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <AiOutlineHome className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <AiOutlineUser className="nav-icon" /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <AiOutlineFundProjectionScreen className="nav-icon" /> Dev Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <CgFileDocument className="nav-icon" /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/farm" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <GiFarmer className="nav-icon" /> Farm
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/realestate" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <FaHome className="nav-icon" /> Real Estate
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/reiki" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <FaHome className="nav-icon" /> Reiki
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom fork-btn">
              <Nav.Link as={Link} to="https://github.com/FestersNephew/Portfolio" target="_blank" className="nav-link-custom fork-btn-inner">
                <CgGitFork className="nav-icon" /> <AiFillStar className="nav-icon" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .nav-custom {
          display: flex;
          justify-content: space-between;
          width: 100%;
          flex-wrap: wrap;
        }
        .nav-item-custom {
          flex: 1 1 auto;
          text-align: center;
        }
        .nav-link-custom {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          width: 100%;
        }
        .nav-icon {
          margin-right: 5px;
          font-size: 1.2em;
        }
        .fork-btn-inner {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          background-color: #6f42c1;
          border-radius: 8px;
          color: white;
          justify-content: center;
          width: 100%;
        }
        .navbar-collapse-custom {
          max-height: calc(100vh - 56px);
          overflow-y: auto;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }
        @media (max-width: 767px) {
          .nav-custom {
            flex-direction: column;
            align-items: center;
            margin: 0; /* Remove margins */
          }
          .nav-item-custom {
            width: 100%;
          }
          .nav-link-custom {
            justify-content: center;
            padding: 0.4rem 0; /* Reduce padding for smaller screens */
          }
        }
        @media (max-width: 575px) {
          .nav-link-custom {
            font-size: 0.9rem;
            padding: 0.3rem 0; /* Further reduce padding */
          }
          .nav-icon {
            font-size: 1em;
          }
        }
        @media (max-width: 375px) {
          .nav-link-custom {
            font-size: 0.8rem;
            padding: 0.2rem 0; /* Further reduce padding */
          }
          .nav-icon {
            font-size: 0.9em;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;
