import { Fragment } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

function Blurb(props) {
  let ohno = props.blurb.split(" ");
  return (
    <div className="bsBox">
      {ohno.map((word) => {
        switch (word) {
          default:
            return (
              <span key={v4()} className="ohNo">
                {word + " "}
              </span>
            );
          // hard links outside aowp
          // dungeons
          case "Subway.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/condemned-subway"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Subway."}
                </a>{" "}
              </Fragment>
            );
          case "TOTW.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/location-guides-5/temple-of-three-winds-loot-table"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"TOTW."}
                </a>{" "}
              </Fragment>
            );
          case "Steps_of_Madness.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/steps-of-madness"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Steps of Madness."}
                </a>{" "}
              </Fragment>
            );
          case "Foremans.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/quests-guides-3/biomare-quests-foremans"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Foremans."}
                </a>{" "}
              </Fragment>
            );
          case "COH.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/mid-level-encounter/the-crypt-of-home"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"COH."}
                </a>{" "}
              </Fragment>
            );
          case "IS.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/the-inner-sanctum"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"IS."}
                </a>{" "}
              </Fragment>
            );
          // encounters
          case "Dynas.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/gameplay-guides-6/dyna-camps"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Dynas."}
                </a>{" "}
              </Fragment>
            );
          case "Obediency_Enforcer.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/obediency-enforcer"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Obediency Enforcer."}
                </a>{" "}
              </Fragment>
            );
          case "Mercenaries_Raid.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/the-mercenaries"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Mercenaries Raid."}
                </a>{" "}
              </Fragment>
            );
          // tradeskills
          case "built_from_the_starting_solar_powered_pistol.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/improved-solar-powered-pistol"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"built from the starting solar powered pistol."}
                </a>{" "}
              </Fragment>
            );
          case "Nano-Charged_weapon_and_a_bunch_of_SL_parts.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/shadowlands/tradeskill-guides-5/weapon-3/perennium-weapons"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Nano-Charged weapon and a bunch of SL parts."}
                </a>{" "}
              </Fragment>
            );

          case "craftable_with_weapon_upgrade_kits.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/the--000-weapon-upgrades"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"craftable with weapon upgrade kits."}
                </a>{" "}
              </Fragment>
            );
          case "sealed_weapon_receptacles.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/sealed-weapon-receptacles"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"sealed weapon receptacles."}
                </a>{" "}
              </Fragment>
            );
          case "Tradeskilled_from_Mausser_Particle_Streamer.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/mausser-chemical-streamer"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Tradeskilled from_Mausser Particle Streamer."}
                </a>{" "}
              </Fragment>
            );
          case "viral_weapon_upgrades_tradeskills.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/tradeskill-guides-3/weapon-2/viral-weapon-upgrades"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"viral weapon upgrades tradeskills."}
                </a>{" "}
              </Fragment>
            );
          // soft links inside aowp
          // 1hb
          case "Howling_Skull.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/1h Blunt/Howling Skull" className="bsLink">
                  {"Howling Skull."}
                </Link>{" "}
              </Fragment>
            );
          case "Skull_of_Woe.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/1h Blunt/Skull of Woe" className="bsLink">
                  {"Skull of Woe."}
                </Link>{" "}
              </Fragment>
            );
          case "Skull_of_Lamentation":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/1h Blunt/Skull of Lamentation"
                  className="bsLink"
                >
                  {"Skull of Lamentation"}
                </Link>{" "}
              </Fragment>
            );
          case "Skull_of_Lamentation.":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/1h Blunt/Skull of Lamentation"
                  className="bsLink"
                >
                  {"Skull of Lamentation."}
                </Link>{" "}
              </Fragment>
            );
          case "Mortiig_Beaters.":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/1h Blunt/Mortiig Beater of Torture"
                  className="bsLink"
                >
                  {"Mortiig Beaters."}
                </Link>{" "}
              </Fragment>
            );
          case "Blood_Bat,":
            return (
              <Fragment key={v4()}>
                <Link to="/item/1h Blunt/Blood Bat" className="bsLink">
                  {"Blood Bat,"}
                </Link>{" "}
              </Fragment>
            );
          case "Skull_of_Despair.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/1h Blunt/Skull of Despair" className="bsLink">
                  {"Skull of Despair."}
                </Link>{" "}
              </Fragment>
            );
          case "Skull_of_Misery.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/1h Blunt/Skull of Misery" className="bsLink">
                  {"Skull of Misery."}
                </Link>{" "}
              </Fragment>
            );
          // 2hb
          // wow
          // 1he
          case "Frozen_Tear_of_Uklesh.":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/1h Edged/Frozen Tear of Uklesh"
                  className="bsLink"
                >
                  {"Frozen Tear of Uklesh."}
                </Link>{" "}
              </Fragment>
            );
          // 2he
          case "Energy_Scythe.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/2h Edged/Energy Scythe" className="bsLink">
                  {"Energy Scythe."}
                </Link>{" "}
              </Fragment>
            );
          case "Frost_Scythe_of_the_Legionnaire.":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/2h Edged/Frost Scythe of the Legionnaire"
                  className="bsLink"
                >
                  {"Frost Scythe of the Legionnaire. "}
                </Link>{" "}
              </Fragment>
            );
          case "Stygian_Desolator.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/2h Edged/Stygian Desolator" className="bsLink">
                  {"Stygian Desolator."}
                </Link>{" "}
              </Fragment>
            );
          // SMG
          case "Light_Suppressor.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Light Suppressor" className="bsLink">
                  {"Light Suppressor."}
                </Link>{" "}
              </Fragment>
            );
          case "Mausser_Chemical_Streamer.":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/Smg/Mausser Chemical Streamer"
                  className="bsLink"
                >
                  {"Mausser Chemical Streamer."}
                </Link>{" "}
              </Fragment>
            );
          case "Mausser_Particle_Streamer":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/Smg/Mausser Particle Streamer"
                  className="bsLink"
                >
                  {"Mausser Particle Streamer"}
                </Link>{" "}
              </Fragment>
            );
          case "Sleekmaster_Classic.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Sleekmaster Classic" className="bsLink">
                  {"Sleekmaster Classic."}
                </Link>{" "}
              </Fragment>
            );
        }
      })}
    </div>
  );
}

export default Blurb;
