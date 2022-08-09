import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Happy from "./pages/happy";
import Navbar from './components/navbar';
import Horny from './pages/horny';
import Hot from './pages/hot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="happy" element={<Happy />} />
        <Route path="horny" element={<Horny />} />
        <Route path="hot" element={<Hot />} />
      </Routes>
    </div>
  );
}

export default App;
