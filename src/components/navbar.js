import '../App.css';
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="navbar-container">
        <Link to="/">
            <div className="nav-link-image">
                <img src='https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true' alt=''/>
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