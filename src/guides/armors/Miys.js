import "../Guide.css";
import Stage from "../../stage/Stage";
import { Link } from "react-router-dom";

function Miys() {
  return (
    <Stage>
      <h1>Miy's</h1>
      <p className="guideText">
        The current end-game set on Project Rubi-ka. Miy's comes in 5 flavors,
        Melee, Nano, Ranged, Scary and Tank. On Project Rubi-ka, there are no
        known drops for back slot Miy's pieces. All flavors are dropped by
        Cyborgs, Drills and Mantis.
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
      <p className="guideText">
        Mantis are found in Perpetual Wastelands, but they might be missing on
        Project Rubi-ka due to{" "}
        <a
          href="https://git.project-rk.com/prk/issues/issues/1650"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          prk/issues#1650
        </a>{" "}
        at the time of writing. They are variable in level and easiest to find
        at dyna camps, see{" "}
        <a
          href="https://www.ao-universe.com/guides/classic-ao/gameplay-guides-6/dyna-camps"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          the AO-Universe dyna guide.
        </a>{" "}
        Mantis in Southern Foul Hill's Mantis Den do not drop Miy's.
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Miys-Melee"}>
          Miy's Melee
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Miys-Nano"}>
          Miy's Nano
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Miys-Ranged"}>
          Miy's Ranged
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Miys-Scary"}>
          Miy's Scary
        </Link>
      </p>
      <p>
        <Link className="guideLink" to={"/guides/Armors/Miys-Tank"}>
          Miy's Tank
        </Link>
      </p>
    </Stage>
  );
}

export default Miys;
