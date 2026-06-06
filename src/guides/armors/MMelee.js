import "../Guide.css";
import Stage from "../../stage/Stage";
import miysmelee from "../../assets/miysmelee.png";

function MMelee() {
  return (
    <Stage>
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
    </Stage>
  );
}

export default MMelee;
