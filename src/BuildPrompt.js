import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

function BuildPrompt() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Which Build?</h2>
        <div className="select">
          <Link to={"/select/1hb"}>1 Handed Blunt</Link>
          <Link to={"1hb"}>2 Handed Blunt</Link>
        </div>
        <div className="select">
          <Link to={"1hb"}>1 Handed Edged</Link>
          <Link to={"1hb"}>2 Handed Edged</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuildPrompt;
