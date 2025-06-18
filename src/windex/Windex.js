import { Fragment, useState } from "react";
import { v4 } from "uuid";
import "./Windex.css";
import db from "../Itemdb";
import { grammat } from "../utils";
import Stage from "../stage/Stage";
import Section from "./Section";

function Windex() {
  const [sortingControls, setsortingControls] = useState("alp");
  return (
    <Stage>
      <h1>Anarchy Online Weapon Pathing Index</h1>
      <h2>Quick Navigation</h2>
      <div className="qNavBox">
        <div>
          <h1>Melee</h1>
          <a href={"#1h Blunt"}>1 Handed Blunt</a>
          <a href={"#2h Blunt"}>2 Handed Blunt</a>
          <a href={"#1h Edged"}>1 Handed Edged</a>
          <a href={"#2h Edged"}>2 Handed Edged</a>
          <a href={"#Martial arts"}>Martial Arts</a>
          <a href={"#Melee energy"}>Melee Energy</a>
          <a href={"#Piercing"}>Piercing</a>
        </div>
        <div></div>

        <div>
          <h1>Ranged</h1>
          <a href={"#Assault rifle"}>Assault Rifle</a>
          <a href={"#Bow"}>Bow</a>
          <a href={"#Grenade"}>Grenade</a>
          <a href={"#Pistol"}>Pistol</a>
          <a href={"#Rifle"}>Rifle</a>
          <a href={"#Ranged energy"}>Ranged Energy</a>
          <a href={"#Shotgun"}>Shotgun</a>
          <a href={"#Smg"}>Sub-Machine Guns</a>
        </div>
      </div>
      <div className="windy">
        {
          // come on
          // eslint-disable-next-line
          Object.keys(db).map((section) => {
            return (
              <Fragment key={v4()}>
                <div className="controls">
                  <h1 className="sectionHeadWin" id={section}>
                    {grammat(section)}
                  </h1>
                  <span>Sort by...</span>
                  <span onClick={() => setsortingControls("alp")}>
                    Alphabetical:
                  </span>
                  {sortingControls === "alp" ? <span>✓</span> : <span>X</span>}
                  <span onClick={() => setsortingControls("min")}>
                    Level min:
                  </span>
                  {sortingControls === "min" ? <span>✓</span> : <span>X</span>}
                </div>
                <hr></hr>
                <Section section={section} sortingControls={sortingControls} />
              </Fragment>
            );
          })
        }
      </div>
    </Stage>
  );
}

export default Windex;
