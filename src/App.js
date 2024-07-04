import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import DevProjects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Farm from "./components/Farm/Farm";
import RealEstate from "./components/RealEstate/RealEstatePage";
import Reiki from "./components/Reiki/Reiki";
import Family from "./components/Family/Family";
import Ecotourism from "./components/Ecotourism/Ecotourism";
import Blog from "./components/Blog/Blog";
import BlogPost from './components/Blog/BlogPost';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<DevProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/realestate" element={<RealEstate/>} />
          <Route path="/reiki" element={<Reiki/>} />
          <Route path="/family" element={<Family/>} />
          <Route path="/ecotourism" element={<Ecotourism/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/post/:slug" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
