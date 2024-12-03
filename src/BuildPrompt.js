import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

function BuildPrompt() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Which Build?</h2>
        <div className="select">
          <Link to={"/select/1h Blunt"}>1 Handed Blunt</Link>
          <Link to={"/select/2h Blunt"}>2 Handed Blunt</Link>
        </div>
        <div className="select">
          <Link to={"/select/1h Edged"}>1 Handed Edged</Link>
          <Link to={"/select/2h Edged"}>2 Handed Edged</Link>
        </div>
        <div className="select">
          <Link to={"/select/Shotgun"}>Shotgun</Link>
          <Link to={"/select/Rifle"}>Rifle</Link>
        </div>
        <div className="select">
          <Link to={"/select/Pistol"}>Pistol</Link>
          <Link to={"/select/Smg"}>Smg</Link>
        </div>
        <div className="select">
          <Link to={"/select/Assault rifle"}>Assault rifle</Link>
          <Link to={"/select/Piercing"}>Piercing</Link>
        </div>
        <div className="select">
          <Link to={"/select/Martial arts"}>Martial Arts</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuildPrompt;
