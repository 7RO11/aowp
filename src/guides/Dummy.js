import "./Guide.css";
import Stage from "../stage/Stage";
import derek from "../assets/derek.png";

function Dummy() {
  return (
    <Stage>
      <h1>Theres nothing here</h1>
      <p className="guideText">this is a dummy page to copy pasta</p>

      <img src={derek} alt="dumbo" className="guidePic" />
      <p className="guideContext">heres a dummy</p>
    </Stage>
  );
}

export default Dummy;
