import { Link } from "react-router-dom";
import Stage from "../stage/Stage";

function ProfPrompt() {
  return (
    <Stage>
      <h1>Which Build?</h1>
      <div className="select">
        <Link to={"/select/Adventurer"}>Adventurer</Link>
        <Link to={"/select/Agent"}>Agent</Link>
        <Link to={"/select/Bureaucrat"}>Bureaucrat</Link>
        <Link to={"/select/Doctor"}>Doctor</Link>
        <Link to={"/select/Enforcer"}>Enforcer</Link>
        <Link to={"/select/Engineer"}>Engineer</Link>
        <Link to={"/select/Fixer"}>Fixer</Link>
        <Link to={"/select/Keeper"}>Keeper</Link>
        <Link to={"/select/Martial Artist"}>Martial Artist</Link>
        <Link to={"/select/Meta-Physicist"}>Meta-Physicist</Link>
        <Link to={"/select/Nano-technician"}>Nano-technician</Link>
        <Link to={"/select/Shade"}>Shade</Link>
        <Link to={"/select/Soldier"}>Soldier</Link>
        <Link to={"/select/Trader"}>Trader</Link>
      </div>
    </Stage>
  );
}

export default ProfPrompt;
