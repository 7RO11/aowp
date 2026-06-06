import "../Guide.css";
import Stage from "../../stage/Stage";
import miysranged from "../../assets/miysranged.png";

function MRanged() {
  return (
    <Stage>
      <h1>Miy's Ranged</h1>
      <p className="guideText">
        Miy's Ranged is AGI/STR. It is known to drop from Aquaans. A low level
        Aquaan dyna can be found in Omni Forest, see{" "}
        <a
          href="https://www.ao-universe.com/guides/classic-ao/gameplay-guides-6/dyna-camps"
          className="aboutLink"
          target="_blank"
          rel="noreferrer"
        >
          the AO-Universe dyna guide.
        </a>{" "}
        Otherwise, you rarely find them outside missions.
      </p>
      <img
        src={miysranged}
        alt="Miy's Ranged suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">
        QL 200 Miy's Ranged modifiers from AO Setups
      </p>
    </Stage>
  );
}

export default MRanged;
