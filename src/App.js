import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Happy from "./pages/happy";
import Navbar from "./components/navbar";
import Horny from "./pages/horny";
import Hot from "./pages/hot";
import LoveNote from "./pages/love-note";
import SuperHornyGirl from "./pages/super-horny-girl";
import { useEffect, useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    var scroll = window.scrollY;
    const handleScroll = (event) => {
      // setScroll(window.scrollY);
      scroll > window.scrollY || scroll <= 100
        ? setShowNav(true)
        : setShowNav(false);
      scroll = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Navbar showNav={showNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="love-note" element={<LoveNote />} />
        <Route path="happy" element={<Happy />} />
        <Route path="horny" element={<Horny />} />
        <Route path="hot" element={<Hot />} />
        <Route path="sgh" element={<SuperHornyGirl />} />
      </Routes>
    </div>
  );
}

export default App;
