import "../App.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div
      className={
        props.showNav ? "navbar-container" : "navbar-container hideNav"
      }
    >
      <Link to="/">
        <div className="nav-link-image">
          <img
            src="https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true"
            alt=""
          />
        </div>
      </Link>
      <Link to="/happy">
        <div className="nav-link">HAPPY</div>
      </Link>
      <Link to="/horny">
        <div className="nav-link">HORNY</div>
      </Link>
      <Link to="/hot">
        <div className="nav-link">HOT</div>
      </Link>
      <div className="nav-link"></div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  showNav: PropTypes.bool,
};
