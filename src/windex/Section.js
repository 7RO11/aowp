import { v4 } from "uuid";
import db from "../Itemdb";
import ItemFragment from "./ItemFragment";

function Section(props) {
  if (props.sortingControls === "min") {
    let weaponObjects = Object.values(db[props.section]);
    weaponObjects.sort((weaponA, weaponB) => {
      let minA;
      let minB;
      if (weaponA["min"]) {
        minA = weaponA["min"];
      } else {
        minA = weaponA["versions"][0]["min"];
      }
      if (weaponB["min"]) {
        minB = weaponB["min"];
      } else {
        minB = weaponB["versions"][0]["min"];
      }
      if (minA < minB) {
        return -1;
      } else if (minA > minB) {
        return 1;
      }
      return 0;
    });
    return weaponObjects.map((item) => {
      return (
        <ItemFragment
          key={v4()}
          item={item["name"] ? item["name"] : item["versions"][0]["name"]}
          section={props.section}
        />
      );
    });
  }
  return Object.keys(db[props.section]).map((item) => {
    return <ItemFragment key={v4()} item={item} section={props.section} />;
  });
}

export default Section;
