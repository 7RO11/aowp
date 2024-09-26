import { Link } from "react-router-dom";
import "./App.css";

function About() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Anarchy Online Weapon Pathing</h2>
        <p className="blurb">
          Anarchy Online Weapon Pathing "aowp" is a web tool to help Anarchy
          Online players decide what weapons they want to use.
        </p>
        <p className="blurb">
          The goal of aowp is a tailored, guided experience that will land a
          user on weapon they can obtain and use. It will exclude a lot of
          common pool options that may be viable, but less than ideal.
        </p>
      </div>
      <div className="footer">
        <Link className="Homelink" to={"/"}>
          Home
        </Link>
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

export default About;
