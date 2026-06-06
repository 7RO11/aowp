import "./Guide.css";
import Stage from "../stage/Stage";
import { Link } from "react-router-dom";

function Armor() {
  return (
    <Stage>
      <h1>Armors and You</h1>
      <p className="guideText">
        This page seeks to provide acquisition and modifiers for the most
        popular armors on Project Rubi-ka.
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Newcomers"}>
          Newcomer's Armor
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Salamander-Vest"}>
          Salamander Vest
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Omni-Med"}>
          Omni-Med
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Rhinoman-Leather"}>
          Rhinoman Leather
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Miys"}>
          Miy's
        </Link>
      </p>
    </Stage>
  );
}

export default Armor;
