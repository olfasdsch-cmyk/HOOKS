import { Link } from "react-router-dom";
import "./Navbarr.css";

const Navbarr = () => {
  return (
    <div className="navbar">
      <h1>🎬 Movie App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="Contact">Contact</Link></li>
        <li><Link to="TopRated">Top Rated</Link></li>
      </ul>
    </div>
  );
};

export default Navbarr;
