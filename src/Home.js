import { Link } from "react-router-dom";
import logo from "./ith.png";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Anarchy Online Weapon Pathing</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <p>What are you looking for?</p>
        <Link className="Homelink" to={"builds"}>
          Build recommendation?
        </Link>
        <Link className="Homelink" to={"profs"}>
          Profession recommendation?
        </Link>
      </div>
      <div className="footer">
        <Link className="Homelink" to={"about"}>
          About
        </Link>
        <Link className="Homelink" to={"index"}>
          Index
        </Link>
      </div>
    </div>
  );
}

export default Home;
