import { Link } from "react-router-dom";
import "./About.css";
import Stage from "../stage/Stage";

function About() {
  return (
    <Stage>
      <h1>What is this?</h1>
      <p className="blurb">
        Anarchy Online Weapon Pathing "aowp" is a web tool to help Anarchy
        Online players decide what weapons they want to use.
      </p>
      <p className="blurb">
        The goal of aowp is a tailored, guided experience that will land a user
        on weapon they can obtain and use. It will exclude a lot of common pool
        options that may be viable, but less than ideal.
      </p>
      <p className="blurb">
        AOWP is an opinion piece more than database dump. Weapon blurbs are
        subjective to my own biases and experiences as a largely froob 1-150
        player. What I may consider "difficult to obtain" could be trivial if
        you have someone or something (ao#, level 200 osbs) hand it to you.
      </p>
      <p className="blurb">
        <Link to={"/policy"} className="policyLink">
          AOWP difficulty policy
        </Link>
      </p>
      <p className="blurb">
        The logo is drawn by me, based off the Atchisson Assault Shotgun.
      </p>
    </Stage>
  );
}

export default About;
