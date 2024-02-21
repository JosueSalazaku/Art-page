// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header";
import Art from "./assets/Pages/Art";
import AboutMe from "./assets/Pages/AboutMe";
import Contact from "./assets/Pages/Contact";
import MainPage from "./assets/Pages/MainPage";

const routes = [
  { to: "/Art", label: "Art" },
  { to: "/AboutMe", label: "About Me" },
  { to: "/Contact", label: "Contact" },
];

function App() {
  return (
    <Router>
      <Header routes={routes} />
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
