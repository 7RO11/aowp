import { Link } from "react-router-dom";
import "./About.css";
import Stage from "../stage/Stage";

function About() {
  return (
    <Stage>
      <h1>What is this?</h1>
      <p className="blurb">
        Anarchy Online Weapon Pathing "AOWP" is a web tool to help Anarchy
        Online players decide what weapons they want to use.
      </p>
      <p className="blurb">
        The goal of AOWP is a tailored experience that will land a user on
        weapon they can obtain and use. It will exclude a lot of common pool
        options that may be viable, but less than ideal.
      </p>
      <p className="blurb">
        In addition to supporting Anarchy Online items, AOWP will support custom
        Project Rubi-Ka items, whether it is different versions of the same item
        or completely new items. If you don't know what PRK is,{" "}
        <a href="https://project-rk.com/" className="aboutLink">
          click here
        </a>
        .
      </p>
      <p className="blurb">
        AOWP is designed with desktop-first users in mind. I've tried to keep
        the website functional on mobile, but bits of styling might be off.
      </p>
      <hr />
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
      <hr />

      <p className="blurb">
        To contact me, use Discord. footl3sgeckohm on the Project Rubi-Ka
        Discord server and prolly a few others.
      </p>
      <p className="blurb">
        The logo is drawn by me, based off the Atchisson Assault Shotgun.
      </p>
      <p className="blurb">
        I am not officially involved with Anarchy Online, Funcom, or the Project
        Rubi-Ka dev team.
      </p>
    </Stage>
  );
}

export default About;
