import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Items from "./Items";
import Slider from "./Slider";

function Select() {
  const [level, setLevel] = useState(1);

  return (
    <div className="App">
      <div className="App-header">
        <Slider level={level} setLevel={setLevel} />
        <Items level={level} />
      </div>
      <Footer />
    </div>
  );
}

export default Select;
