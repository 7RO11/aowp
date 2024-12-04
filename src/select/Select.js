import { useState } from "react";
import Items from "./Items";
import "./Select.css";
import Slider from "./Slider";
import Stage from "../stage/Stage";

function Select() {
  const [level, setLevel] = useState(1);

  return (
    <Stage>
      <Slider level={level} setLevel={setLevel} />
      <Items level={level} />
    </Stage>
  );
}

export default Select;
