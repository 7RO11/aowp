import { Link, useParams } from "react-router-dom";
import "./App.css";
import db from "./Itemdb";

function Items(props) {
  const { type } = useParams();

  function isGray(level, min, max) {
    if (level >= min && level <= max) {
      return false;
    }
    return true;
  }
  let key = 0;
  let section = Object.keys(db[type]);
  return (
    <div>
      {section.map((item) => {
        key++;
        return (
          <p
            onClick={() => {
              console.log(item);
              props.setDesc(true);
              props.setType(db[type][item].type);
              props.setName(item);
            }}
            className={
              isGray(
                Number(props.level),
                db[type][item].min,
                db[type][item].max
              )
                ? "grayed"
                : "white"
            }
            key={key}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default Items;
