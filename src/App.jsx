// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header";
import Art from "./assets/Pages/Art";
import Bio from "./assets/Pages/Bio";
import Contact from "./assets/Pages/Contact";
import Landing from "./assets/Pages/Landing";

const routes = [
  { to: "/Art", label: "Art" },
  { to: "/Bio", label: "Bio" },
  { to: "/Contact", label: "Contact" },
];

function App() {
  return (
    <Router>
      <Header routes={routes} />
      <Routes>
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
