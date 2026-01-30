import "./Guide.css";
import Stage from "../stage/Stage";
import fusion from "../assets/fusion.png";
import { Link } from "react-router-dom";

function Ejector() {
  return (
    <Stage>
      <h1>How to make Fusion Ejector</h1>
      <p className="guideText">
        This sub-machine gun was added in the 1.5.2 weapons patch. To craft it
        is simple. Combine your{" "}
        <a
          href="https://prk.tinkeringidiot.com/items/156770"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          Gamma Ejector
        </a>{" "}
        with your{" "}
        <a
          href="https://prk.tinkeringidiot.com/items/500108"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          Beta Ejector.
        </a>
      </p>

      <img src={fusion} alt="ejector craft" className="guidePic" />
      <p className="guideContext">This process requires no skills.</p>
      <p className="guideContext">
        <Link className="aboutLink" to={"/item/Smg/Fusion Ejector"}>
          Internal Fusion Ejector stats
        </Link>
      </p>
      <p className="guideText">
        The primary advantage of this weapon is the lack of profession
        requirements. If you are fixer or soldier, you will likely want to
        pursue{" "}
        <a
          href="https://prk.tinkeringidiot.com/items/246720"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          Blackbird
        </a>{" "}
        instead.
      </p>
    </Stage>
  );
}

export default Ejector;
