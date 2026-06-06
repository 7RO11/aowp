import "../Guide.css";
import Stage from "../../stage/Stage";
import rhino80 from "../../assets/rhino80.png";

function Rhino() {
  return (
    <Stage>
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
    </Stage>
  );
}

export default Rhino;
