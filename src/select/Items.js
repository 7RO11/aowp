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

  for (const prof of profs) {
    if (type === prof) {
      isProf = true;
    }
  }
  let section = [];
  if (isProf) {
    for (const wtype in db) {
      for (const item in db[wtype]) {
        if (db[wtype][item]["versions"]) {
          for (const version of db[wtype][item].versions) {
            if (version.prk) {
              continue;
            }
            for (const prof of version["profs"]) {
              if (prof === type) {
                section.push(version);
              }
            }
          }
        } else {
          for (const prof of db[wtype][item]["profs"]) {
            if (prof === type && !db[wtype][item]["prk"]) {
              section.push(db[wtype][item]);
            }
            if (prof === type && db[wtype][item]["prk"] && props.isPRK) {
              section.push(db[wtype][item]);
            }
          }
        }
      }
    }
  } else {
    section = Object.keys(db[type]).filter((item) => {
      if (db[type][item]["prk"] && props.isPRK) {
        return true;
      }
      if (!db[type][item]["prk"] && props.isPRK) {
        return true;
      }
      if (!db[type][item]["prk"] && !props.isPRK) {
        return true;
      }
      if (db[type][item]["prk"] && !props.isPRK) {
        return false;
      }
    });
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
              to={
                db[type][item].type
                  ? `/item/${db[type][item].type}/${db[type][item].name}`
                  : `/item/${db[type][item]["versions"][0].type}/${db[type][item]["versions"][0].name}`
              }
              className={
                db[type][item].type
                  ? isGray(
                      Number(props.level),
                      db[type][item].min,
                      db[type][item].max
                    )
                    ? "grayed"
                    : "white"
                  : isGray(
                      Number(props.level),
                      db[type][item]["versions"][0].min,
                      db[type][item]["versions"][0].max
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
              to={
                item.type
                  ? `/item/${item.type}/${item.name}`
                  : `/item/${item["versions"][0].type}/${item["versions"][0].name}`
              }
              className={
                item.type
                  ? isGray(Number(props.level), item.min, item.max)
                    ? "grayed"
                    : "white"
                  : isGray(
                      Number(props.level),
                      item["versions"][0].min,
                      item["versions"][0].max
                    )
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
