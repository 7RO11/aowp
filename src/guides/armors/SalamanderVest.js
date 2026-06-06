import "./../Guide.css";
import Stage from "../../stage/Stage";
import salvest from "../../assets/salvest.png";

function SalamanderVest() {
  return (
    <Stage>
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
    </Stage>
  );
}

export default SalamanderVest;
