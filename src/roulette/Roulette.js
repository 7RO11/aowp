import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "./Roulette.css";
import db from "../Itemdb";
import Stage from "../stage/Stage";
import { grammatReverse } from "../utils";

function Roulette() {
  const [breed, setBreed] = useState("Solitus");
  const [isBreedLocked, setBreedLocked] = useState(false);
  const [profession, setProfession] = useState("Adventurer");
  const [isProfessionLocked, setProfessionLocked] = useState(false);
  const [weaponType, setweaponType] = useState("Pistol");
  const [isWeaponLocked, setWeaponLocked] = useState(false);
  const [goal, setGoal] = useState("Do something");
  const [isGoalLocked, setGoalLocked] = useState(false);
  const [isWeaponSpecific, setIsWeaponSpecific] = useState(false);
  const [weaponSpecific, setWeaponSpecific] = useState("Something");
  const [isRaids, setRaids] = useState(false);
  const [isSanityCheck, setSanityCheck] = useState(false);
  const breeds = ["Solitus", "Opifex", "Atrox", "Nanomage"];
  const profs = [
    "Adventurer",
    "Agent",
    "Bureaucrat",
    "Doctor",
    "Enforcer",
    "Engineer",
    "Fixer",
    "Keeper",
    "Martial Artist",
    "Meta-Physicist",
    "Nano-technician",
    "Shade",
    "Soldier",
    "Trader",
  ];
  const weaponTypes = [
    "1 Handed Blunt",
    "2 Handed Blunt",
    "1 Handed Edged",
    "2 Handed Edged",
    "Martial Arts",
    "Melee Energy",
    "Piercing",
    "Assault Rifle",
    "Bow",
    "Grenade",
    "Pistol",
    "Rifle",
    "Ranged Energy",
    "Shotgun",
    "Sub-Machine Gun",
  ];
  const goals = [
    "Kill Vergil Aeneid",
    "Kill Abmouth",
    "Kill Lien",
    "Kill Nemetet",
    "Kill Aztur",
    "Kill Neleb",
    "Kill Prototype Inferno",
    "Kill Commander Jocasta",
    "Kill Lab Director",
    "Kill Cerubin",
    "Kill Trash King",
  ];
  const raids = [
    "Kill Mantis Queen",
    "Kill Administrator DeValos",
    "Kill Tarasque",
    "Kill Hezak",
    "Kill The Brood Mother",
    "Kill Diamondine Soldier",
    "Kill Ian Warr",
    "Kill Obediency Enforcer",
  ];

  useEffect(() => {
    let weaponSection = Object.keys(db[grammatReverse(weaponType)]);
    weaponSection = weaponSection.filter((item) => {
      // check for prk
      if (db[grammatReverse(weaponType)][item].versions) {
        if (
          db[grammatReverse(weaponType)][item]["versions"][0]["stats"]["reqs"][
            "Profession"
          ]
        ) {
          if (
            db[grammatReverse(weaponType)][item]["versions"][0]["stats"][
              "reqs"
            ]["Profession"] !== profession
          ) {
            return false;
          }
        }
        if (
          (db[grammatReverse(weaponType)][item]["versions"][0].min === 1 &&
            db[grammatReverse(weaponType)][item]["versions"][0].max === 200) ||
          isSanityCheck
        ) {
          return true;
        }
        return false;
      }
      // then do it again for regular
      if (db[grammatReverse(weaponType)][item]["stats"]["reqs"]["Profession"]) {
        if (
          db[grammatReverse(weaponType)][item]["stats"]["reqs"][
            "Profession"
          ] !== profession
        ) {
          return false;
        }
      }
      if (
        (db[grammatReverse(weaponType)][item].min === 1 &&
          db[grammatReverse(weaponType)][item].max === 200) ||
        isSanityCheck
      ) {
        return true;
      }
      return false;
    });
    let randomChoice =
      weaponSection[Math.floor(Math.random() * weaponSection.length)];
    setWeaponSpecific(randomChoice);
    return;
  }, [weaponType, profession, isSanityCheck]);

  return (
    <Stage>
      <h1>Anarchy Online Roulette</h1>
      <div>
        <h2>The "Rules"</h2>
        <p className="rulesText">
          User will get randomized breed, profession, weapon choice, and an
          optional goal. Since this is just a website, everything in game is
          self-enforced.
        </p>
        <button
          className="roulButton"
          onClick={() => {
            if (!isBreedLocked) {
              setBreed(breeds[Math.floor(Math.random() * breeds.length)]);
            }
            if (!isProfessionLocked) {
              setProfession(profs[Math.floor(Math.random() * profs.length)]);
            }
            if (!isWeaponLocked) {
              setweaponType(
                weaponTypes[Math.floor(Math.random() * weaponTypes.length)]
              );
            }
            if (!isGoalLocked && isRaids) {
              let doubleTrouble = goals.concat(raids);
              setGoal(
                doubleTrouble[Math.floor(Math.random() * doubleTrouble.length)]
              );
            } else if (!isGoalLocked) {
              setGoal(goals[Math.floor(Math.random() * goals.length)]);
            }
          }}
        >
          Roll It!
        </button>
        <br />
        <span className="holderRoul">
          <span className="goalRoul">{goal}</span>
          <span className="geneRoul">with a(n)</span>
          <span className="weaponRoul">
            {isWeaponSpecific ? weaponSpecific : weaponType}
          </span>
          <span className="geneRoul">as a(n)</span>
          <span className="breedRoul">{breed}</span>
          <span className="profRoul">{profession}</span>
        </span>
        <h1>
          Breed <span className="roulLock">Lock in</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isBreedLocked}
            onClick={() => {
              setBreedLocked(!isBreedLocked);
            }}
          />
        </h1>
        <select
          value={breed}
          onChange={(event) => {
            setBreed(event.target.value);
          }}
        >
          <option value={"Solitus"}>Solitus</option>
          <option value={"Opifex"}>Opifex</option>
          <option value={"Atrox"}>Atrox</option>
          <option value={"Nanomage"}>Nanomage</option>
        </select>
        <h1>
          Profession <span className="roulLock">Lock in</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isProfessionLocked}
            onClick={() => {
              setProfessionLocked(!isProfessionLocked);
            }}
          />
        </h1>
        <select
          value={profession}
          onChange={(event) => {
            setProfession(event.target.value);
          }}
        >
          <option value={"Adventurer"}>Adventurer</option>
          <option value={"Agent"}>Agent</option>
          <option value={"Bureaucrat"}>Bureaucrat</option>
          <option value={"Doctor"}>Doctor</option>
          <option value={"Enforcer"}>Enforcer</option>
          <option value={"Engineer"}>Engineer</option>
          <option value={"Fixer"}>Fixer</option>
          <option value={"Martial Artist"}>Martial Artist</option>
          <option value={"Meta-Physicist"}>Meta-Physicist</option>
          <option value={"Nano-technician"}>Nano-technician</option>
          <option value={"Shade"}>Shade</option>
          <option value={"Soldier"}>Soldier</option>
          <option value={"Trader"}>Trader</option>
        </select>
        <h1>
          Weapon Type <span className="roulLock">Lock in</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isWeaponLocked}
            onClick={() => {
              setWeaponLocked(!isWeaponLocked);
            }}
          />
          <span>Specific</span>
          <input
            type="checkbox"
            className="roulSCheck"
            value={isWeaponLocked}
            onClick={() => {
              setIsWeaponSpecific(!isWeaponSpecific);
            }}
          />
          <span>Sanity Check</span>
          <Tooltip id="warning" place="bottom">
            <div className="colors"></div>
            <div className="diffBox">
              Add/Remove the level relevency condition.
            </div>
          </Tooltip>
          <sup data-tooltip-id="warning" className="question">
            ?
          </sup>
          <input
            defaultChecked
            type="checkbox"
            className="roulSCheck"
            value={isSanityCheck}
            onClick={() => {
              setSanityCheck(!isSanityCheck);
            }}
          />
        </h1>
        <select
          value={weaponType}
          onChange={(event) => {
            setweaponType(event.target.value);
          }}
        >
          <option value={"1 Handed Blunt"}>1 Handed Blunt</option>
          <option value={"2 Handed Blunt"}>2 Handed Blunt</option>
          <option value={"1 Handed Edged"}>1 Handed Edged</option>
          <option value={"2 Handed Edged"}>2 Handed Edged</option>
          <option value={"Martial Arts"}>Martial Arts</option>
          <option value={"Melee Energy"}>Melee Energy</option>
          <option value={"Piercing"}>Piercing</option>
          <option value={"Assault Rifle"}>Assault Rifle</option>
          <option value={"Bow"}>Bow</option>
          <option value={"Grenade"}>Grenade</option>
          <option value={"Pistol"}>Pistol</option>
          <option value={"Ranged Energy"}>Ranged Energy</option>
          <option value={"Rifle"}>Rifle</option>
          <option value={"Shotgun"}>Shotgun</option>
          <option value={"Sub-Machine Gun"}>Sub-Machine Gun</option>
        </select>
        <h1>
          Goal <span className="roulLock">Lock in</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isGoalLocked}
            onClick={() => {
              setGoalLocked(!isGoalLocked);
            }}
          />
          <span>Raids?</span>
          <input
            type="checkbox"
            className="roulSCheck"
            value={isRaids}
            onClick={() => {
              setRaids(!isRaids);
            }}
          />
        </h1>
        <select
          value={goal}
          onChange={(event) => {
            setGoal(event.target.value);
          }}
        >
          <option value={"Kill Vergil Aeneid"}>Kill Vergil Aeneid</option>
          <option value={"Kill Abmouth"}>Kill Abmouth</option>
          <option value={"Kill Lien"}>Kill Lien</option>
          <option value={"Kill Nemetet"}>Kill Nemetet</option>
          <option value={"Kill Aztur"}>Kill Aztur</option>
          <option value={"Kill Neleb"}>Kill Neleb</option>
          <option value={"Kill Prototype Inferno"}>
            Kill Prototype Inferno
          </option>
          <option value={"Kill Commander Jocasta"}>
            Kill Commander Jocasta
          </option>
          <option value={"Kill Lab Director"}>Kill Lab Director</option>
          <option value={"Kill Trash King"}>Kill Trash King</option>
          <option value={"Kill Mantis Queen"}>Kill Mantis Queen</option>
          <option value={"Kill Administrator DeValos"}>
            Kill Administrator DeValos
          </option>
          <option value={"Kill Tarasque"}>Kill Tarasque</option>
          <option value={"Kill Hezak"}>Kill Hezak</option>
          <option value={"Kill The Brood Mother"}>Kill The Brood Mother</option>
          <option value={"Kill Diamondine Soldier"}>
            Kill Diamondine Soldier
          </option>
          <option value={"Kill Ian Warr"}>Kill Ian Warr</option>
          <option value={"Kill Obediency Enforcer"}>
            Kill Obediency Enforcer
          </option>
        </select>
      </div>
    </Stage>
  );
}

export default Roulette;
