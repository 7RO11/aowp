import { Link } from "react-router-dom";

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
              className="bsLink"
              rel="noreferrer"
            >
              {"TOTW "}
            </a>
          );
        }
        if (word === "TOTW.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/location-guides-5/temple-of-three-winds-loot-table"
              className="bsLink"
              rel="noreferrer"
            >
              {"TOTW. "}
            </a>
          );
        }
        if (word === "IS.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/the-inner-sanctum"
              className="bsLink"
              rel="noreferrer"
            >
              {"IS. "}
            </a>
          );
        }
        if (word === "COH.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/mid-level-encounter/the-crypt-of-home"
              className="bsLink"
              rel="noreferrer"
            >
              {"COH. "}
            </a>
          );
        }
        if (word === "Foremans.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/quests-guides-3/biomare-quests-foremans"
              className="bsLink"
              rel="noreferrer"
            >
              {"Foremans. "}
            </a>
          );
        }
        if (word === "Steps_of_Madness.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/steps-of-madness"
              className="bsLink"
              rel="noreferrer"
            >
              {"Steps of Madness. "}
            </a>
          );
        }
        if (word === "Skull_of_Despair.") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Skull of Despair"
              className="bsLink"
            >
              {"Skull of Despair. "}
            </Link>
          );
        }
        if (word === "Skull_of_Misery.") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Skull of Misery"
              className="bsLink"
            >
              {"Skull of Misery. "}
            </Link>
          );
        }
        if (word === "Skull_of_Lamentation") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Skull of Lamentation"
              className="bsLink"
            >
              {"Skull of Lamentation "}
            </Link>
          );
        }
        if (word === "Skull_of_Lamentation.") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Skull of Lamentation"
              className="bsLink"
            >
              {"Skull of Lamentation."}
            </Link>
          );
        }
        if (word === "Howling_Skull.") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Howling Skull"
              className="bsLink"
            >
              {"Howling Skull. "}
            </Link>
          );
        }
        if (word === "Mortiig_Beaters.") {
          return (
            <Link
              key={key}
              to="/item/1h Blunt/Mortiig Beater of Torture"
              className="bsLink"
            >
              {"Mortiig Beaters."}
            </Link>
          );
        }
        if (word === "Skull_of_Woe.") {
          return (
            <Link key={key} to="/item/1h Blunt/Skull of Woe" className="bsLink">
              {"Skull of Woe. "}
            </Link>
          );
        }
        if (word === "built_from_the_starting_solar_powered_pistol.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/improved-solar-powered-pistol"
              className="bsLink"
              rel="noreferrer"
            >
              {"built from the starting solar powered pistol. "}
            </a>
          );
        }
        if (word === "craftable_with_weapon_upgrade_kits.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/the--000-weapon-upgrades"
              className="bsLink"
              rel="noreferrer"
            >
              {"craftable with weapon upgrade kits. "}
            </a>
          );
        }
        if (word === "Subway.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/condemned-subway"
              className="bsLink"
              rel="noreferrer"
            >
              {"Subway. "}
            </a>
          );
        }
        if (word === "Dynas.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/gameplay-guides-6/dyna-camps"
              className="bsLink"
              rel="noreferrer"
            >
              {"Dynas. "}
            </a>
          );
        }
        if (word === "Obediency_Enforcer.") {
          return (
            <a
              target="_blank"
              key={key}
              href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/obediency-enforcer"
              className="bsLink"
              rel="noreferrer"
            >
              {"Obediency Enforcer. "}
            </a>
          );
        }
        if (word === "Frozen_Tear_of_Uklesh.") {
          return (
            <Link
              key={key}
              to="/item/1h Edged/Frozen Tear of Uklesh"
              className="bsLink"
            >
              {"Frozen Tear of Uklesh. "}
            </Link>
          );
        }
        if (word === "Energy_Scythe.") {
          return (
            <Link
              key={key}
              to="/item/2h Edged/Energy Scythe"
              className="bsLink"
            >
              {"Energy Scythe. "}
            </Link>
          );
        }
        if (word === "Frost_Scythe_of_the_Legionnaire.") {
          return (
            <Link
              key={key}
              to="/item/2h Edged/Frost Scythe of the Legionnaire"
              className="bsLink"
            >
              {"Frost Scythe of the Legionnaire. "}
            </Link>
          );
        }
        if (word === "Stygian_Desolator.") {
          return (
            <Link
              key={key}
              to="/item/2h Edged/Stygian Desolator"
              className="bsLink"
            >
              {"Stygian Desolator. "}
            </Link>
          );
        }

        return (
          <span className="ohNo" key={key}>
            {word + " "}
          </span>
        );
      })}
    </div>
  );
}

export default Blurb;
