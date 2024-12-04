import { Link } from "react-router-dom";
import "./Home.css";
import Stage from "../stage/Stage";

function Home() {
  return (
    <Stage>
      <h1>Anarchy Online Weapon Pathing</h1>
      <Link className="homeLink" to={"/buildprompt"}>
        Build Index
      </Link>
      <Link className="homeLink" to={"/profprompt"}>
        Profession Index
      </Link>
    </Stage>
  );
}

export default Home;
