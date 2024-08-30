import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Preloader from "./components/Pre";
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
import ScrollToTop from "./components/ScrollToTop";
import AnimationProvider, { useAnimation } from './components/AnimationProvider';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AppRoutes = () => {
  const location = useLocation();
  const { startTransition, endTransition } = useAnimation();

  useEffect(() => {
    startTransition();
    const timer = setTimeout(() => {
      endTransition();
    }, 1000);
    return () => clearTimeout(timer);
  }, [location, startTransition, endTransition]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<DevProjects />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/farm" element={<Farm />} />
      <Route path="/realestate" element={<RealEstate />} />
      <Route path="/reiki" element={<Reiki />} />
      <Route path="/family" element={<Family />} />
      <Route path="/ecotourism" element={<Ecotourism />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/post/:slug" element={<BlogPost />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <AnimationProvider>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <AppRoutes />
          <Footer />
        </div>
      </AnimationProvider>
    </Router>
  );
}

export default App;
