import React from "react";
import AppNavbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/personal-website";
import About from "./pages/about";
import CV from "./pages/cv";
import Projects from "./pages/projects";

function App() {
  return (
    <div>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
