import "../Guide.css";
import Stage from "../../stage/Stage";
import miystank from "../../assets/miystank.png";

function MTank() {
  return (
    <Stage>
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

export default MTank;
