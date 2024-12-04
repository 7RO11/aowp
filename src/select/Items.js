import { Link, useParams } from "react-router-dom";
import db from "../Itemdb";

function Items(props) {
  const { type } = useParams();
  const profs = [
    "Adventurer",
    "Agent",
    "Bureaucrat",
    "Doctor",
    "Enforcer",
    "Engineer",
    "Fixer",
    "Keeper",
    "Martial Artist",
    "Meta-Physicist",
    "Nano-technician",
    "Shade",
    "Soldier",
    "Trader",
  ];

  let isProf = false;

  for (let prof of profs) {
    if (type === prof) {
      isProf = true;
    }
  }
  let section = [];
  if (isProf) {
    for (const wtype in db) {
      for (const item in db[wtype]) {
        for (const prof of db[wtype][item]["profs"]) {
          if (prof === type) {
            section.push(db[wtype][item]);
          }
        }
      }
    }
  } else {
    section = Object.keys(db[type]);
  }

  function isGray(level, min, max) {
    if (level >= min && level <= max) {
      return false;
    }
    return true;
  }
  let key = 0;
  return !isProf ? (
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
  ) : (
    <div>
      {section.map((item) => {
        key++;
        return (
          <p key={key}>
            <Link
              to={`/item/${item.type}/${item.name}`}
              className={
                isGray(Number(props.level), item.min, item.max)
                  ? "grayed"
                  : "white"
              }
            >
              {item.name}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default Items;
