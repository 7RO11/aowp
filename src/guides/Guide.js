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
    </Stage>
  );
}

export default Guide;
