import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import db from "./Itemdb";

function Windex() {
  let key = 0;
  return (
    <div className="App">
      <div className="App-header">
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
                      className={"white"}
                    >
                      {item}
                    </Link>
                  </p>
                );
              }
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Windex;
