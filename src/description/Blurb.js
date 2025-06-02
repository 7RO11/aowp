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
          case "18.8_Subway_raid.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/condemned-subway-raid"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"18.8 Subway raid."}
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
          case "Cyborg_Barracks.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/low-level-encounter/cyborg-barracks"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Cyborg Barracks."}
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
          case "Foremans":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/quests-guides-3/biomare-quests-foremans"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Foremans"}
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
          case "Mantis_Den.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/mid-level-encounter/the-mantis-and-smugglers-den"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Mantis Den."}
                </a>{" "}
              </Fragment>
            );
          case "The_Reck.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/location-guides-5/the-reck"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"The Reck."}
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
                  {"Inner Sanctum."}
                </a>{" "}
              </Fragment>
            );
          case "Home_Pyramid_raid.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/legacy-of-the-xan/encounter-guides-2/dark-pyramid-below"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Home Pyramid raid."}
                </a>{" "}
              </Fragment>
            );
          case "18.8_TOTW_raid.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/temple-of-the-three-winds-raid"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"18.8 TOTW raid."}
                </a>{" "}
              </Fragment>
            );
          case "Tarasque.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/camelot-castle"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Tarasque."}
                </a>{" "}
              </Fragment>
            );
          case "DeValos_loot.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/administrator-devalos"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"DeValos loot."}
                </a>{" "}
              </Fragment>
            );

          // encounters
          case "Dust_Brigade_Generals.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/dust-brigade-generals"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Dust Brigade Generals."}
                </a>{" "}
              </Fragment>
            );

          case "Fiery_Soldier.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/fiery-soldier"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Fiery Soldier."}
                </a>{" "}
              </Fragment>
            );

          case "Notum_Soldier.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/notum-soldier"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Notum Soldier."}
                </a>{" "}
              </Fragment>
            );

          case "3_different_raids.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/legacy-of-the-xan/tradeskill-guides-2/weapons/xan-weapon-upgrade"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"3 different raids."}
                </a>{" "}
              </Fragment>
            );
          case "Xan_weapon_upgrades.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/legacy-of-the-xan/tradeskill-guides-2/weapons/xan-weapon-upgrade"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Xan weapon upgrades."}
                </a>{" "}
              </Fragment>
            );
          case "aliens.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/quests-guides/sector-10-alien-playfield"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"aliens."}
                </a>{" "}
              </Fragment>
            );
          // oh no i did it again
          case "alien_generals.2":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/tradeskill-guides-3/weapon-2/niznos-bomb-blaster"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"alien generals."}
                </a>{" "}
              </Fragment>
            );
          case "alien_generals.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/gameplay-guides-3/alien-raiding-in-your-city"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"alien generals."}
                </a>{" "}
              </Fragment>
            );
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
          case "Dreadloch_camps.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/lost-eden/encounter-guides/high-level-encounter/clan-dreadloch-camps-omni-quests"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Dreadloch camps."}
                </a>{" "}
              </Fragment>
            );

          case "Juggernaut_raid.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/omni-pol-command-juggernauts"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Juggernaut raid."}
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
          case "Diamondine_Soldier.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/diamondine-soldier"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Diamondine Soldier."}
                </a>{" "}
              </Fragment>
            );
          case "Inside_the_Machine.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/encounter-guides-3/high-level-encounter-2/dust-brigade---inside-the-machine-db2"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Inside the Machine."}
                </a>{" "}
              </Fragment>
            );

          case "Sector_07_aliens.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/quests-guides/sector-07-alien-playfield"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Sector 07 aliens."}
                </a>{" "}
              </Fragment>
            );
          case "The_Beast_raid.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/shadowlands/quests-guides-2/pandemonium/pandemonium-2"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"The Beast raid."}
                </a>{" "}
              </Fragment>
            );
          case "shadowlands_boss_drops.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/shadowlands/tradeskill-guides-5/weapon-3/prohibited-hand-mortar-of-bacam-xum"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Shadowlands boss drops."}
                </a>{" "}
              </Fragment>
            );
          case "Tsunayoshi_Smith.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/location-guides-5/tsunayoshi-smith-vendor"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Tsunayoshi Smith."}
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
          case "eye_mutant_loot.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/eyemutant-orb-laser"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"eye mutant loot."}
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
          case "enhanced_further":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/upgrading-mantis-weapons"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"enhanced further"}
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
          case "Weapon_tradeskilled_from_alien_parts.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/tradeskill-guides-3/general-crafting-2/apf-loot-tradeskills"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Weapon tradeskilled from alien parts."}
                </a>{" "}
              </Fragment>
            );

          case "different_special_attacks.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/tradeskill-guides-3/weapon-2/upgrading-alien-weapons"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"different special attacks."}
                </a>{" "}
              </Fragment>
            );
          case "Tradeskilled_from_alien_parts":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/alien-invasion/tradeskill-guides-3/weapon-2/salabim-shotgun"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Tradeskilled from alien parts"}
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
          case "turn_spirit_weapon.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/shadowlands/tradeskill-guides-5/weapon-3/turn-spirit-weapons"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"turn-spirit weapon."}
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
          case "with_alien_materials.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/lost-eden/tradeskill-guides/weapon/upgrading-ofab-weapons"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"with alien materials."}
                </a>{" "}
              </Fragment>
            );
          case "escaped_prisoner_drops.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/shadowlands/tradeskill-guides-5/weapon-3/blade-of-khiones-will"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"escaped prisoner drops."}
                </a>{" "}
              </Fragment>
            );
          case "escaped_prisoners.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/classic-ao/quests-guides-3/escaped-prisoners"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"escaped prisoners."}
                </a>{" "}
              </Fragment>
            );

          // specific mission rewards
          case "Xan_Civilization_Quest.":
            return (
              <Fragment key={v4()}>
                <a
                  target="_blank"
                  href="https://www.ao-universe.com/guides/shadowlands/quests-guides-2/penumbra/xan-civilization-quest"
                  className="bsLink"
                  rel="noreferrer"
                >
                  {"Xan Civilization Quest."}
                </a>{" "}
              </Fragment>
            );

          // soft links inside aowp
          // pistol
          case "Tinker_Pistol.":
            return (
              <Fragment key={v4()}>
                <Link
                  to="/item/Pistol/Solar Powered Tinker Pistol"
                  className="bsLink"
                >
                  {"Tinker Pistol."}
                </Link>{" "}
              </Fragment>
            );
          case "Inamorata_Pistol.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Pistol/Inamorata Pistol" className="bsLink">
                  {"Inamorata Pistol."}
                </Link>{" "}
              </Fragment>
            );
          case "Sacrosanct_Pistol.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Pistol/Sacrosanct Pistol" className="bsLink">
                  {"Sacrosanct Pistol."}
                </Link>{" "}
              </Fragment>
            );
          case "BBI_Faithful_750.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Pistol/BBI Faithful 750" className="bsLink">
                  {"BBI Faithful 750."}
                </Link>{" "}
              </Fragment>
            );
          case "Lord_of_Lust.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Pistol/Lord of Lust" className="bsLink">
                  {"Lord of Lust."}
                </Link>{" "}
              </Fragment>
            );
          case "Lust_of_the_Xan.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Pistol/Lust of the Xan" className="bsLink">
                  {"Lust of the Xan."}
                </Link>{" "}
              </Fragment>
            );
          case "Lust_of_the_Xan":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Pistol/Lust of the Xan" className="bsLink">
                  {"Lust of the Xan"}
                </Link>{" "}
              </Fragment>
            );

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
          // bow
          case "Chaos_of_the_Xan.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Bow/Chaos of the Xan" className="bsLink">
                  {"Chaos of the Xan."}
                </Link>{" "}
              </Fragment>
            );
          case "Lord_of_Chaos.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Bow/Lord of Chaos" className="bsLink">
                  {"Lord of Chaos."}
                </Link>{" "}
              </Fragment>
            );
          // Shotgun
          case "Greed_of_the_Xan.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Shotgun/Greed of the Xan" className="bsLink">
                  {"Greed of the Xan. "}
                </Link>{" "}
              </Fragment>
            );
          case "Home_Defender.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Shotgun/Home Defender" className="bsLink">
                  {"Home Defender."}
                </Link>{" "}
              </Fragment>
            );
          case "Inamorata_Shotgun.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Shotgun/Inamorata Shotgun" className="bsLink">
                  {"Inamorata Shotgun."}
                </Link>{" "}
              </Fragment>
            );
          case "Krutt_Assault":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Shotgun/Krutt Assault 219" className="bsLink">
                  {"Krutt Assault"}
                </Link>{" "}
              </Fragment>
            );
          case "Lord_of_Greed.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Shotgun/Lord of Greed" className="bsLink">
                  {"Lord of Greed."}
                </Link>{" "}
              </Fragment>
            );
          case "Sacrosanct_Shotgun.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Shotgun/Sacrosanct Shotgun" className="bsLink">
                  {"Sacrosanct Shotgun."}
                </Link>{" "}
              </Fragment>
            );
          // SMG
          case "Blackbirds":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Blackbird" className="bsLink">
                  {"Blackbirds"}
                </Link>{" "}
              </Fragment>
            );
          case "Envy_of_the_Xan.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Envy of the Xan" className="bsLink">
                  {"Envy of the Xan."}
                </Link>{" "}
              </Fragment>
            );
          case "Inamorata_Blaster.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Inamorata Blaster" className="bsLink">
                  {"Inamorata Blaster."}
                </Link>{" "}
              </Fragment>
            );
          case "Light_Suppressor.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Light Suppressor" className="bsLink">
                  {"Light Suppressor."}
                </Link>{" "}
              </Fragment>
            );
          case "Lord_of_Envy.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Lord of Envy" className="bsLink">
                  {"Lord of Envy."}
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
          case "Mk_5,":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Ofab Hawk Mk 5" className="bsLink">
                  {"Mk 5,"}
                </Link>{" "}
              </Fragment>
            );
          case "Mk_6,":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Ofab Hawk Mk 6" className="bsLink">
                  {"Mk 6."}
                </Link>{" "}
              </Fragment>
            );
          case "Sacrosanct_Blaster.":
            return (
              <Fragment key={v4()}>
                <Link to="/item/Smg/Sacrosanct Blaster" className="bsLink">
                  {"Sacrosanct Blaster."}
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
