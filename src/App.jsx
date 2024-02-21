import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./assets/Components/Header";
import Art from "./assets/Pages/Art";
import AboutMe from "./assets/Pages/AboutMe";
import Contact from "./assets/Pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/Art">Art</Link>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Art" element={<Art />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
