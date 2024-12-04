import { Link } from "react-router-dom";
import "./Windex.css";
import db from "../Itemdb";
import Stage from "../stage/Stage";

function Windex() {
  let key = 0;
  return (
    <Stage>
      <h2>Anarchy Online Weapon Pathing</h2>
      <div>
        {
          // come on
          // eslint-disable-next-line
          Object.keys(db).map((section) => {
            key++;
            for (const item in db[section]) {
              return (
                <p key={key}>
                  <Link
                    to={`/item/${db[section][item].type}/${db[section][item].name}`}
                    className="indexLink"
                  >
                    {item}
                  </Link>
                </p>
              );
            }
          })
        }
      </div>
    </Stage>
  );
}

export default Windex;
