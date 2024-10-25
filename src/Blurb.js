import { Link } from "react-router-dom";
import "./App.css";

function Blurb(props) {
  let ohno = props.blurb.split(" ");
  let key = 0;
  return (
    <div className="bsBox">
      {ohno.map((word) => {
        key++;
        if (word === "TOTW") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/location-guides-5/temple-of-three-winds-loot-table"
              className="Homelink"
            >
              TOTW
            </a>
          );
        }
        if (word === "TOTW.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/location-guides-5/temple-of-three-winds-loot-table"
              className="Homelink"
            >
              TOTW.
            </a>
          );
        }
        if (word === "IS.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/the-inner-sanctum"
              className="Homelink"
            >
              IS.
            </a>
          );
        }
        if (word === "COH.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/mid-level-encounter/the-crypt-of-home"
              className="Homelink"
            >
              COH.
            </a>
          );
        }
        if (word === "Skull_of_Despair.") {
          return (
            <Link
              key={key}
              to="/item/1hb/Skull of Despair"
              className="Homelinknospac"
            >
              Skull of Despair.
            </Link>
          );
        }

        return (
          <span className="ohNo" key={key}>
            {word}
          </span>
        );
      })}
    </div>
  );
}

export default Blurb;
