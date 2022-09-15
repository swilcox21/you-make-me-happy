import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="mavBox">
        <div className="mrMaverick"></div>
      </div>
      <h1>You are my Home... </h1>
      <h1>FOREVER</h1>
      <br />
      <br />
      <Link to="/sgh">
        <button className="love-note-button">The adventures of...</button>
      </Link>
      <br />
      <br />
      <Link to="/love-note">
        <button className="love-note-button">LoveNote 1</button>
      </Link>
    </div>
  );
}

export default Home;
