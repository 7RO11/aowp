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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
            >
              COH.
            </a>
          );
        }
        if (word === "Foremans.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/quests-guides-3/biomare-quests-foremans"
              className="Homelink"
              rel="noreferrer"
            >
              Foremans.
            </a>
          );
        }
        if (word === "Steps_of_Madness.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/steps-of-madness"
              className="Homelink"
              rel="noreferrer"
            >
              Steps of Madness.
            </a>
          );
        }
        if (word === "Skull_of_Despair.") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Skull of Despair"
              className="Homelinknospac"
            >
              Skull of Despair.
            </Link>
          );
        }
        if (word === "Skull_of_Lamentation") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Skull of Lamentation"
              className="Homelinknospac"
            >
              Skull of Lamentation
            </Link>
          );
        }
        if (word === "Skull_of_Woe.") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Skull of Woe"
              className="Homelinknospac"
            >
              Skull of Woe.
            </Link>
          );
        }
        if (word === "built_from_the_starting_solar_powered_pistol.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/improved-solar-powered-pistol"
              className="Homelink"
              rel="noreferrer"
            >
              built from the starting solar powered pistol.
            </a>
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