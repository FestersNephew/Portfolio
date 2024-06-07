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
          position: relative;
        }
        .nav-link-custom {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.2rem 0.4rem; /* Reduce padding */
          white-space: nowrap;
          width: 100%;
          font-size: 0.9rem; /* Reduce font size */
          position: relative;
        }
        .nav-link-custom:hover .nav-tooltip {
          visibility: visible;
          opacity: 1;
        }
        .nav-icon {
          font-size: 1.1em; /* Adjust icon size */
        }
        .nav-tooltip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: -30px; /* Position above the icon */
          left: 50%;
          transform: translateX(-50%);
          background-color: #6f42c1;
          color: #fff;
          padding: 2px 5px;
          border-radius: 3px;
          font-size: 0.8rem;
          white-space: nowrap;
          transition: visibility 0.2s, opacity 0.2s;
        }
        .fork-btn-inner {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          background-color: #6f42c1;
          border-radius: 8px;
          color: white;
          justify-content: center;
          width: auto;
        }
        .navbar-collapse-custom {
          max-height: calc(100vh - 56px);
          overflow-y: auto;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }
        .navbar {
          padding: 0.5rem 1rem; /* Reduce overall padding */
        }
        .navbar-brand img {
          height: 30px; /* Adjust logo height */
        }
        .sticky {
          padding: 0.25rem 0.5rem; /* Further reduce padding when sticky */
          transition: padding 0.3s ease;
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
            padding: 0.3rem 0; /* Reduce padding for smaller screens */
          }
        }
        @media (max-width: 575px) {
          .nav-link-custom {
            font-size: 0.8rem;
            padding: 0.2rem 0; /* Further reduce padding */
          }
          .nav-icon {
            font-size: 1em;
          }
        }
        @media (max-width: 375px) {
          .nav-link-custom {
            font-size: 0.7rem;
            padding: 0.1rem 0; /* Further reduce padding */
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
