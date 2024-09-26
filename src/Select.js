import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Items from "./Items";

function Select(props) {
  const [level, setLevel] = useState(1);

  return (
    <div className="App">
      <div className="App-header">
        <h2>Slide to adjust level</h2>
        <div class="slidecontainer">
          <input
            type="range"
            min="1"
            max="220"
            value={level}
            class="slider"
            id="myRange"
            onChange={(event) => {
              setLevel(event.target.value);
            }}
          />
        </div>
        <p>{level}</p>
        <Items level={level} />
      </div>
      <Footer />
    </div>
  );
}

export default Select;
