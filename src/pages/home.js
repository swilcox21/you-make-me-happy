import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
        <h1>You are my Home... </h1>
        <br/>    
        <br/>    
        <br/>    
        <br/>    
        <h1>Forever</h1>
        <Link to="/love-note">
            <button className="love-note">Read Me</button>
        </Link>
    </div>
  );
}

export default Home;