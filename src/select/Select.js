import { useState } from "react";
import Items from "./Items";
import "./Select.css";
import Slider from "./Slider";
import Stage from "../stage/Stage";

function Select() {
  const [isPRK, setPRK] = useState(false);
  const [level, setLevel] = useState(1);

  return (
    <Stage>
      <Slider level={level} setLevel={setLevel} isPRK={isPRK} setPRK={setPRK} />
      <Items level={level} isPRK={isPRK} />
    </Stage>
  );
}

export default Select;
