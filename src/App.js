import React from "react";
import AppNavbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import CV from "./pages/cv";
import Projects from "./pages/projects";

function App() {
  return (
    <div>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/personal-website" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
