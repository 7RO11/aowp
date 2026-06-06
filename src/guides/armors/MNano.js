import "../Guide.css";
import Stage from "../../stage/Stage";
import miysnano from "../../assets/miysnano.png";

function MNano() {
  return (
    <Stage>
      <h1>Miy's Nano</h1>
      <p className="guideText">
        Miy's Nano is INT/PSY. It is known to drop from Medusas. They can be
        found in the desert of Deep Artery Valley or Southern Foul Hill's Medusa
        Territory. SFH is high level, 160-200 Medusa, DAV is generally lower,
        and has a few significantly lower.
      </p>
      <img
        src={miysnano}
        alt="Miy's Nano suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">QL 200 Miy's Nano modifiers from AO Setups</p>
    </Stage>
  );
}

export default MNano;
