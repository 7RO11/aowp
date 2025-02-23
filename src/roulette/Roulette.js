import { useState } from "react";
import "./Roulette.css";
import Stage from "../stage/Stage";

function Roulette() {
  const [breed, setBreed] = useState("Solitus");
  const [isBreedLocked, setBreedLocked] = useState(false);
  const [profession, setProfession] = useState("Adventurer");
  const [isProfessionLocked, setProfessionLocked] = useState(false);
  const [weaponType, setweaponType] = useState("Pistol");
  const [isWeaponLocked, setWeaponLocked] = useState(false);
  const [goal, setGoal] = useState("Do something");
  const [isGoalLocked, setGoalLocked] = useState(false);
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
  const goals = ["Kill Abmouth", "Kill Aztur", "Kill Lab Director"];
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
            if (!isGoalLocked) {
              setGoal(goals[Math.floor(Math.random() * goals.length)]);
            }
          }}
        >
          Roll It!
        </button>
        <h1>
          Breed <span className="roulLock">Lock in?</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isBreedLocked}
            onClick={() => {
              setBreedLocked(!isBreedLocked);
            }}
          />
        </h1>
        <h2>{breed}</h2>
        <h1>
          Profession <span className="roulLock">Lock in?</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isProfessionLocked}
            onClick={() => {
              setProfessionLocked(!isProfessionLocked);
            }}
          />
        </h1>
        <h2>{profession}</h2>
        <h1>
          Weapon Type <span className="roulLock">Lock in?</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isWeaponLocked}
            onClick={() => {
              setWeaponLocked(!isWeaponLocked);
            }}
          />
        </h1>
        <h2>{weaponType}</h2>
        <h1>
          Goal <span className="roulLock">Lock in?</span>
          <input
            type="checkbox"
            className="roulCheck"
            value={isGoalLocked}
            onClick={() => {
              setGoalLocked(!isGoalLocked);
            }}
          />
        </h1>
        <h2>{goal}</h2>
      </div>
    </Stage>
  );
}

export default Roulette;
