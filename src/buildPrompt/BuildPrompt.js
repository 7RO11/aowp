import { Link } from "react-router-dom";
import "./BuildPrompt.css";
import Stage from "../stage/Stage";

function BuildPrompt() {
  return (
    <Stage>
      <h1>Which Build?</h1>
      <div className="select">
        <h1>Melee</h1>
        <Link to={"/select/1h Blunt"}>1 Handed Blunt</Link>
        <Link to={"/select/2h Blunt"}>2 Handed Blunt</Link>
        <Link to={"/select/1h Edged"}>1 Handed Edged</Link>
        <Link to={"/select/2h Edged"}>2 Handed Edged</Link>
        <Link to={"/select/Martial arts"}>Martial Arts</Link>
        <Link to={"/select/Melee energy"}>Melee Energy</Link>
        <Link to={"/select/Piercing"}>Piercing</Link>
        <h1>Ranged</h1>
        <Link to={"/select/Assault rifle"}>Assault Rifle</Link>
        <Link to={"/select/Bow"}>Bow</Link>
        <Link to={"/select/Grenade"}>Grenade</Link>
        <Link to={"/select/Pistol"}>Pistol</Link>
        <Link to={"/select/Rifle"}>Rifle</Link>
        <Link to={"/select/Ranged energy"}>Ranged Energy</Link>
        <Link to={"/select/Shotgun"}>Shotgun</Link>
        <Link to={"/select/Smg"}>Sub-Machine Gun</Link>
      </div>
    </Stage>
  );
}

export default BuildPrompt;
