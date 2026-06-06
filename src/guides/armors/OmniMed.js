import "../Guide.css";
import Stage from "../../stage/Stage";
import otclothes from "../../assets/otclothes.jpg";
import omnimed from "../../assets/omnimed.png";

function OmniMed() {
  return (
    <Stage>
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
    </Stage>
  );
}

export default OmniMed;
