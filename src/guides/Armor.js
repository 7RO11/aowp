import "./Guide.css";
import Stage from "../stage/Stage";
import salvest from "../assets/salvest.png";
import otclothes from "../assets/otclothes.jpg";
import omnimed from "../assets/omnimed.png";
import rhino80 from "../assets/rhino80.png";
import miysmelee from "../assets/miysmelee.png";
import miysnano from "../assets/miysnano.png";
import miysranged from "../assets/miysranged.png";
import miysscary from "../assets/miysscary.png";
import miystank from "../assets/miystank.png";

function Armor() {
  return (
    <Stage>
      <h1>Armors and You</h1>
      <p className="guideText">
        This page seeks to provide acquisition and modifiers for the most
        popular armors on Project Rubi-ka.
      </p>

      <h1>Newcomer's Armor</h1>
      <p className="guideText">
        One of the most well known sets, Newcomer's is significantly weaker than
        you will find on retail AO. You can get yours on ICC Shuttleport either
        completing Manager Travis Molen's missions for QL 5 or buying it from
        Antonio Stacklund at variable QL.
      </p>
      <p className="guideText">
        It does not level up on Project Rubi-ka, nor does have the same
        modifiers. At QL 5 you'll see flat 42 ACs on a full set, which is better
        than the junk armors you'll find on the island.
      </p>

      <h1>Joint Newcomer's Armor</h1>
      <p className="guideText">
        Sided players may upgrade their Newcomer's set. After signing your
        faction's application, you can purchase badges to apply to each piece.
        There is no head piece so you'll need 6 for the whole set. The badge and
        armor is NODROP so it must be made while you are on the island.
      </p>
      <p className="guideText">
        Joint Newcomers upgrades to QL 15 on Project Rubi-ka. Like the unsided
        kind, it will only provide ACs. It will keep you decently insulated from
        most low level dangers like early Subway.
      </p>

      <h1>Salamander Vest</h1>
      <p className="guideText">
        This great starter chest piece is available to everybody. You will have
        to make it on ICC Shuttleport. To craft you'll need to combine an
        "adapted" Rollerrat Intestines and Leather Hide. The leather hide comes
        from reef salamanders. You may refer to{" "}
        <a
          href="https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/antonio-stacklunds-upgrades"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          the AO-Universe crafting guide.
        </a>
      </p>
      <p className="guideText">
        The vest is largely the same as retail, except the name change and Max
        Health modifier. Veteran players will sometimes mix this vest in with an
        Omni-Med suit for their early game armor.
      </p>
      <img
        src={salvest}
        alt="salamander vest stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">
        Pre 18.8.53 Salamander Vest modifiers from Auno
      </p>

      <h1>Omni-Med Suit</h1>
      <p className="guideText">
        This is a common set amongst players pushing through the early game
        quickly. It's also a critical twinking set for implants, so you'll want
        it even if you're not using it as armor. The easiest path of obtaining
        is purchasing it at an Omni store. OT clothes can be found in any of the
        regular stores in Omni-Trade. The terminal won't sell you a full set
        you'll need to shop around a bit.
      </p>
      <img
        src={otclothes}
        alt="ot clothes terminal"
        className="guidePic"
        style={{ width: "30rem", maxHeight: "100rem" }}
      />
      <p className="guideText">
        The hurdle for this is being Omni. If you wish to preserve your time and
        alignment, you can create an Omni alt for buying the set. Otherwise, the
        set is rollable and is rarely sold by Secondhand Peddler in Backyards.
      </p>
      <img
        src={omnimed}
        alt="omni med suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">Omni-Med Suit modifiers from AO Setups</p>
      <p className="guideText">
        Beyond the use for twinking treatment, the med suit allows you to use
        higher QL Stims and Treatment Kits. From personal experience, I've found
        this falls off once you start fighting anything harder than TOTW's
        cultists, even with an Exarch Robe in the back slot. Support builds may
        get more mileage however.
      </p>

      <h1>Rhinoman Leather</h1>
      <p className="guideText">
        This NODROP set is highly prized for it's accessibility and modifiers.
        It drops from Rhinomen, as the name would imply. Drop rate is somewhat
        low, expect a few hours farming for a full set. For locations on
        overworld Rhinomen, I suggest{" "}
        <a
          href="https://www.ao-universe.com/guides/classic-ao/gameplay-guides-6/dyna-camps"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          the AO-Universe dyna guide.
        </a>{" "}
        Rhinoman dynas have Rhinomen adds that rapidly respawn and can be easily
        farmed. The most notable one is a 100 dyna in Varmint Woods, 1860x1100.
        You can farm QL 70-90ish pieces there, with higher QL chest pieces
        sometimes dropping from the boss. Higher level Rhinomen may sometimes be
        found in missions.
      </p>
      <img
        src={rhino80}
        alt="ql 80 rhino leather stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">
        QL 80 Rhino Leather modifiers from AO Setups
      </p>
      <p className="guideText">
        It is a STA/STR requirement set, so nanomages and opifex will have a
        harder time equipping. The modifiers are usually worth it though, for
        melee users especially.
      </p>

      <h1>Miy's</h1>
      <p className="guideText">
        The current end-game set on Project Rubi-ka. Miy's comes in 5 flavors,
        Melee, Nano, Ranged, Scary and Tank. On Project Rubi-ka, there are no
        back slot Miy's pieces. All flavors are dropped by Cyborgs and Drills.
      </p>
      <p className="guideText">
        Drills can be found in the bottom patch of land in Belial Forest, south
        of Hollow Island. They are about level 140-160ish, but are somewhat
        weaker than regular mobs. They are farmed as early as TL3. They can also
        be found rarely in missions.
      </p>
      <p className="guideText">
        Cyborgs populate the edges of Mort crater at level 150-180ish. They can
        also be found in the Cyborg bases in Perpetual Wastelands at level 200.
        Like Rhinoman dynas, the Cyborg dynas have a low chance of dropping QL
        200+ Miy's. You'll want to be in a team of at least TL4 before
        attempting these. Cyborgs can also be found in missions commonly.
      </p>

      <h1>Miy's Melee</h1>
      <p className="guideText">Miy's Melee is SEN/AGI.</p>
      <img
        src={miysmelee}
        alt="Miy's Melee suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">
        QL 200 Miy's Melee modifiers from AO Setups
      </p>

      <h1>Miy's Nano</h1>
      <p className="guideText">Miy's Nano is INT/PSY.</p>
      <img
        src={miysnano}
        alt="Miy's Nano suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">QL 200 Miy's Nano modifiers from AO Setups</p>

      <h1>Miy's Ranged</h1>
      <p className="guideText">Miy's Ranged is AGI/STR.</p>
      <img
        src={miysranged}
        alt="Miy's Ranged suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">
        QL 200 Miy's Ranged modifiers from AO Setups
      </p>

      <h1>Miy's Scary</h1>
      <p className="guideText">Miy's Scary is INT/SEN.</p>
      <img
        src={miysscary}
        alt="Miy's Scary suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">
        QL 200 Miy's Scary modifiers from AO Setups
      </p>

      <h1>Miy's Tank</h1>
      <p className="guideText">Miy's Tank is STA/STR.</p>
      <img
        src={miystank}
        alt="Miy's Tank suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">QL 200 Miy's Tank modifiers from AO Setups</p>
    </Stage>
  );
}

export default Armor;
