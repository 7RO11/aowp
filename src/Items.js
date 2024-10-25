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
          <p key={key}>
            <Link
              to={`/item/${db[type][item].type}/${db[type][item].name}`}
              className={
                isGray(
                  Number(props.level),
                  db[type][item].min,
                  db[type][item].max
                )
                  ? "grayed"
                  : "white"
              }
            >
              {item}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default Items;
