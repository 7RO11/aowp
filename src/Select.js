import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Items from "./Items";
import Description from "./Description";
import db from "./Itemdb";
import Slider from "./Slider";

function Select(props) {
  const [level, setLevel] = useState(1);
  const [isDesc, setDesc] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  if (isDesc) {
    console.log(type, name);
    return <Description item={db[type][name]} />;
  } else {
    return (
      <div className="App">
        <div className="App-header">
          <Slider level={level} setLevel={setLevel} />
          <Items
            level={level}
            setDesc={setDesc}
            setType={setType}
            setName={setName}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Select;
