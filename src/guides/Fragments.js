import "./Guide.css";
import Stage from "../stage/Stage";
import fragment from "../assets/fragment.png";
import terminals from "../assets/000.png";
import bj from "../assets/bj.png";
import bjo from "../assets/bjo.png";
import bla from "../assets/bla.png";
import glo from "../assets/glo.png";
import beam from "../assets/beam.png";
import tri from "../assets/tri.png";
import joi from "../assets/joi.png";
import keran from "../assets/keran.png";
import bip from "../assets/bip.png";
import pol from "../assets/pol.png";
import ori from "../assets/ori.png";
import vip from "../assets/vip.png";
import dia from "../assets/dia.png";
import hom from "../assets/hom.png";
import mti from "../assets/mti.png";
import ree from "../assets/ree.png";

function Fragments() {
  return (
    <Stage>
      <h1>How to use Weapon Data Fragments</h1>
      <p className="guideText">
        After killing mobs inside the Subway for a while, you'll likely find a
        Weapon Data Fragment. Right clicking the fragment will cause it to
        vanish, and will increment the Data Fragments stat on your character.
      </p>
      <img src={fragment} alt="Fragment icon" className="guidePic" />
      <p className="guideContext">
        It is a common pitfall that using the fragment while selecting certain
        targets will set your Data Fragments to 0. It is a visual bug and known
        by PRK devs.
      </p>
      <p className="guideText">
        You'll also find they drop off mobs in TOTW, primarily cultists it
        seems. If you miss your chance at these, all of the merchandise are
        YESDROP.
      </p>
      <p className="guideText">
        To spend these new tokens, you'll want to find the weapon terminals in
        ICC.
      </p>
      <img src={terminals} alt="000 terminals" className="statsPic" />
      <p className="guideContext">
        000 Terminal Vendors at 3255x855 in ICC/Andromeda.
      </p>
      <p className="guideText">
        The two left-most terminals sell weapons for 1 fragment. The right
        terminal sells upgrade kits for 5 fragments. Both terminals sell in
        interpolated QLs up to 100. Most of the weapons for sale are not
        particularly impressive and worse than your typical best-in-slot
        options. They are most important for weapon lines with incomplete
        progression paths like Grenade, Melee Energy or Bow. There are a few
        standouts however...
      </p>
      <table className="zeroTable">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Type</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={bj} alt="blackjack" className="weaponIcon" />
            </td>
            <td>Blackjack</td>
            <td>1h Blunt</td>
            <td>1% chance stun proc, checks duck-explosions</td>
          </tr>
          <tr>
            <td>
              <img src={bjo} alt="blackjohn" className="weaponIcon" />
            </td>
            <td>Blackjohn</td>
            <td>2h Blunt</td>
            <td>1% chance stun proc</td>
          </tr>
          <tr>
            <td>
              <img src={beam} alt="beam" className="weaponIcon" />
            </td>
            <td>Support Beam</td>
            <td>2h Blunt</td>
            <td>Atrox only, checks duck-explosions</td>
          </tr>
          <tr>
            <td>
              <img src={tri} alt="tripler" className="weaponIcon" />
            </td>
            <td>Tripler</td>
            <td>1h Edged</td>
            <td>1h edged modifier</td>
          </tr>
          <tr>
            <td>
              <img src={bla} alt="bladestaff" className="weaponIcon" />
            </td>
            <td>Bladestaff</td>
            <td>2h Edged</td>
            <td>2h edged modifier</td>
          </tr>
          <tr>
            <td>
              <img src={glo} alt="glove" className="weaponIcon" />
            </td>
            <td>Nano-Charged Stun Glove</td>
            <td>Martial Arts</td>
            <td>MA combined attack</td>
          </tr>

          <tr>
            <td>
              <img src={joi} alt="joint pistol" className="weaponIcon" />
            </td>
            <td>Joint Clans Scout Pistol</td>
            <td>Pistol</td>
            <td>Multi ranged modifier</td>
          </tr>
          <tr>
            <td>
              <img src={pol} alt="pol pistol" className="weaponIcon" />
            </td>
            <td>Polizziotto M200</td>
            <td>Pistol</td>
            <td>Perception modifier</td>
          </tr>
          <tr>
            <td>
              <img src={ori} alt="ori pistol" className="weaponIcon" />
            </td>
            <td>The Original Plasma-Emitter</td>
            <td>Pistol</td>
            <td>Checks duck-explosions</td>
          </tr>
          <tr>
            <td>
              <img src={keran} alt="kerans smg" className="weaponIcon" />
            </td>
            <td>Kerans Automatic Grinner</td>
            <td>Sub-machine Gun</td>
            <td>Hits poison AC</td>
          </tr>
          <tr>
            <td>
              <img src={vip} alt="viper smg" className="weaponIcon" />
            </td>
            <td>Viper IX</td>
            <td>Sub-machine Gun</td>
            <td>Dual wield</td>
          </tr>
          <tr>
            <td>
              <img src={bip} alt="bipower shotgun" className="weaponIcon" />
            </td>
            <td>MTI M Bipower </td>
            <td>Shotgun</td>
            <td>Dual wield, multi ranged modifier</td>
          </tr>
          <tr>
            <td>
              <img src={hom} alt="defender shotgun" className="weaponIcon" />
            </td>
            <td>Home Defender</td>
            <td>Shotgun</td>
            <td>Dual wield, max health modifier</td>
          </tr>
          <tr>
            <td>
              <img src={dia} alt="diablo smg" className="weaponIcon" />
            </td>
            <td>El Diablo</td>
            <td>Ranged Energy</td>
            <td>Dual wield, checks duck-explosions</td>
          </tr>
          <tr>
            <td>
              <img src={mti} alt="mti rifle" className="weaponIcon" />
            </td>
            <td>MTI SL70</td>
            <td>Rifle</td>
            <td>Dodge ranged modifier</td>
          </tr>
          <tr>
            <td>
              <img src={ree} alt="ree crossbow" className="weaponIcon" />
            </td>
            <td>Reet-Tech Crossbow</td>
            <td>Bow</td>
            <td>Dodge ranged modifier</td>
          </tr>
        </tbody>
      </table>
      <p className="guideContext">
        There are a few more that I could list but they start trading between
        inconsequential modifiers or have multiple names for the same line. In
        general, you'll want to pick weapons with dual wield and duck-explosions
        evade check.
      </p>
      <p className="guideText">
        For the upgrades, you should read the{" "}
        <a
          href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/the--000-weapon-upgrades"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          AO-Universe article
        </a>{" "}
        on them. There are 3 differences between retail and PRK however.
      </p>
      <ul className="guideText">
        <li>
          Upgrade kits cannot be purchased from Andre Bottle or Fair Trade.
        </li>
        <li>Premade 40X or 0X0 weapons cannot be purchased from Fair Trade.</li>
        <li>
          The weapon smithing check for upgrades has been lowered to 2.5x QL of
          weapon.
        </li>
      </ul>
      <p className="guideText">
        The weapons pull their stats from retail's database instead of the 18.4
        patch PRK is on.
      </p>
    </Stage>
  );
}

export default Fragments;
