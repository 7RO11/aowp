import { Link } from "react-router-dom";
import logo from "./ith.png";
import "./App.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Anarchy Online Weapon Pathing</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="Homelink" to={"/buildprompt"}>
          Build Index
        </Link>
        <Link className="Homelink" to={"/profs"}>
          Profession Index
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
