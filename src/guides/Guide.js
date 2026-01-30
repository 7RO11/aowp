import "./Guide.css";
import { Link } from "react-router-dom";
import Stage from "../stage/Stage";

function Guide() {
  return (
    <Stage>
      <h1>Project Rubi-Ka Guides</h1>
      <p>
        <Link className="guideLink" to={"/guides/Sentient Targeting Goggles"}>
          Sentient Targeting Goggles
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Nano Buff Pills"}>
          Nano Buff Pills
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Weapon Data Fragments"}>
          Weapon Data Fragments
        </Link>
      </p>
      <p>
        <Link
          className="guideLink"
          to={"/guides/Steps of Madness Special Arrows"}
        >
          Steps of Madness Special Arrows
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Fusion Ejector"}>
          Fusion Ejector
        </Link>
      </p>
    </Stage>
  );
}

export default Guide;
