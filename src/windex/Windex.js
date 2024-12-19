import { Fragment } from "react";
import { v4 } from "uuid";
import "./Windex.css";
import db from "../Itemdb";
import Stage from "../stage/Stage";
import Section from "./Section";

function Windex() {
  return (
    <Stage>
      <h1>Anarchy Online Weapon Pathing Index</h1>
      <div className="windy">
        {
          // come on
          // eslint-disable-next-line
          Object.keys(db).map((section) => {
            return (
              <Fragment key={v4()}>
                <h1 className="sectionHead">{section}</h1>
                <hr></hr>
                <Section section={section} />
              </Fragment>
            );
          })
        }
      </div>
    </Stage>
  );
}

export default Windex;
