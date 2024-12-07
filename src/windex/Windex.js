import "./Windex.css";
import db from "../Itemdb";
import Stage from "../stage/Stage";
import Section from "./Section";

function Windex() {
  let key = 0;
  return (
    <Stage>
      <h1>Anarchy Online Weapon Pathing Index</h1>
      <div className="windy">
        {
          // come on
          // eslint-disable-next-line
          Object.keys(db).map((section) => {
            key++;
            return (
              <>
                <h1 className="sectionHead">{section}</h1>
                <hr></hr>
                <Section key69={key} section={section} />
              </>
            );
          })
        }
      </div>
    </Stage>
  );
}

export default Windex;
