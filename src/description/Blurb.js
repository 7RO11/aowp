import { Link } from "react-router-dom";

function Blurb(props) {
  let ohno = props.blurb.split(" ");
  let key = 0;
  return (
    <div className="bsBox">
      {ohno.map((word) => {
        key++;
        switch (word) {
          default:
            return (
              <span className="ohNo" key={key}>
                {word + " "}
              </span>
            );
          // hard links outside aowp
          // dungeons
          case "Subway.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/condemned-subway"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Subway."}
                </a>{" "}
              </>
            );
          case "TOTW.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/location-guides-5/temple-of-three-winds-loot-table"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"TOTW."}
                </a>{" "}
              </>
            );
          case "Steps_of_Madness.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/steps-of-madness"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Steps of Madness."}
                </a>{" "}
              </>
            );
          case "Foremans.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/quests-guides-3/biomare-quests-foremans"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Foremans."}
                </a>{" "}
              </>
            );
          case "COH.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/mid-level-encounter/the-crypt-of-home"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"COH."}
                </a>{" "}
              </>
            );
          case "IS.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/the-inner-sanctum"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"IS."}
                </a>{" "}
              </>
            );
          // encounters
          case "Dynas.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/gameplay-guides-6/dyna-camps"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Dynas."}
                </a>{" "}
              </>
            );
          case "Obediency_Enforcer.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/obediency-enforcer"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Obediency Enforcer."}
                </a>{" "}
              </>
            );
          // tradeskills
          case "built_from_the_starting_solar_powered_pistol.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/improved-solar-powered-pistol"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"built from the starting solar powered pistol."}
                </a>{" "}
              </>
            );
          case "craftable_with_weapon_upgrade_kits.":
            return (
              <>
                <a
                  target="_blank"
                  key={key}
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/the--000-weapon-upgrades"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"craftable with weapon upgrade kits."}
                </a>{" "}
              </>
            );
          // soft links inside aowp
          // 1hb
          case "Howling_Skull.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Blunt/Howling Skull"
                  className="bsLink"
                >
                  {"Howling Skull."}
                </Link>{" "}
              </>
            );
          case "Skull_of_Woe.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Blunt/Skull of Woe"
                  className="bsLink"
                >
                  {"Skull of Woe."}
                </Link>{" "}
              </>
            );
          case "Skull_of_Lamentation":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Blunt/Skull of Lamentation"
                  className="bsLink"
                >
                  {"Skull of Lamentation"}
                </Link>{" "}
              </>
            );
          case "Skull_of_Lamentation.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Blunt/Skull of Lamentation"
                  className="bsLink"
                >
                  {"Skull of Lamentation."}
                </Link>{" "}
              </>
            );
          case "Mortiig_Beaters.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Blunt/Mortiig Beater of Torture"
                  className="bsLink"
                >
                  {"Mortiig Beaters."}
                </Link>{" "}
              </>
            );
          case "Skull_of_Despair.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Blunt/Skull of Despair"
                  className="bsLink"
                >
                  {"Skull of Despair."}
                </Link>{" "}
              </>
            );
          case "Skull_of_Misery.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Blunt/Skull of Misery"
                  className="bsLink"
                >
                  {"Skull of Misery."}
                </Link>{" "}
              </>
            );
          // 2hb
          // wow
          // 1he
          case "Frozen_Tear_of_Uklesh.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/1h Edged/Frozen Tear of Uklesh"
                  className="bsLink"
                >
                  {"Frozen Tear of Uklesh."}
                </Link>{" "}
              </>
            );
          // 2he
          case "Energy_Scythe.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/2h Edged/Energy Scythe"
                  className="bsLink"
                >
                  {"Energy Scythe."}
                </Link>{" "}
              </>
            );
          case "Frost_Scythe_of_the_Legionnaire.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/2h Edged/Frost Scythe of the Legionnaire"
                  className="bsLink"
                >
                  {"Frost Scythe of the Legionnaire. "}
                </Link>{" "}
              </>
            );
          case "Stygian_Desolator.":
            return (
              <>
                <Link
                  key={key}
                  to="/item/2h Edged/Stygian Desolator"
                  className="bsLink"
                >
                  {"Stygian Desolator."}
                </Link>{" "}
              </>
            );
        }
      })}
    </div>
  );
}

export default Blurb;
