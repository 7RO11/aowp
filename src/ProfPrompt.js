import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

function ProfPrompt() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Which Build?</h2>
        <div className="select">
          <Link to={"/select/Adventurer"}>Adventurer</Link>
          <Link to={"/select/Agent"}>Agent</Link>
        </div>
        <div className="select">
          <Link to={"/select/Bureaucrat"}>Bureaucrat</Link>
          <Link to={"/select/Doctor"}>Doctor</Link>
        </div>
        <div className="select">
          <Link to={"/select/Enforcer"}>Enforcer</Link>
          <Link to={"/select/Engineer"}>Engineer</Link>
        </div>
        <div className="select">
          <Link to={"/select/Fixer"}>Fixer</Link>
          <Link to={"/select/Keeper"}>Keeper</Link>
        </div>
        <div className="select">
          <Link to={"/select/Martial Artist"}>Martial Artist</Link>
          <Link to={"/select/Meta-Physicist"}>Meta-Physicist</Link>
        </div>
        <div className="select">
          <Link to={"/select/Nano-technician"}>Nano-technician</Link>
          <Link to={"/select/Shade"}>Shade</Link>
        </div>
        <div className="select">
          <Link to={"/select/Soldier"}>Soldier</Link>
          <Link to={"/select/Trader"}>Trader</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfPrompt;
