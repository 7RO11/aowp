import "../Guide.css";
import Stage from "../../stage/Stage";
import miysscary from "../../assets/miysscary.png";

function MScary() {
  return (
    <Stage>
      <h1>Miy's Scary</h1>
      <p className="guideText">
        Miy's Scary is INT/SEN. Known to drop from Anvians. Besides missions,
        they scarcely populate the overworld. The helmet provides a unique
        Critical Decrease modifier not found on other Miy's.
      </p>
      <img
        src={miysscary}
        alt="Miy's Scary suit stats"
        className="guidePic"
        style={{ maxHeight: "100rem" }}
      />
      <p className="guideContext">
        QL 200 Miy's Scary modifiers from AO Setups
      </p>
    </Stage>
  );
}

export default MScary;
