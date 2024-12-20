import { Link } from "react-router-dom";
import "./Home.css";
import Stage from "../stage/Stage";

function Home() {
  return (
    <Stage>
      <h1>Anarchy Online Weapon Pathing</h1>
      <div>
        <p>
          <Link className="homeLink" to={"/buildprompt"}>
            Build List
          </Link>
        </p>
        <p>
          <Link className="homeLink" to={"/profprompt"}>
            Profession List
          </Link>
        </p>
      </div>
    </Stage>
  );
}

export default Home;
