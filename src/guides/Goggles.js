import "./Guide.css";
import Stage from "../stage/Stage";
import gog1 from "../assets/gog1.png";
import gog2 from "../assets/gog2.png";
import gog3 from "../assets/gog3.png";
import gog4 from "../assets/gog4.png";
import gog5 from "../assets/gog5.png";

function Goggles() {
  return (
    <Stage>
      <h1>How to make Sentient Targeting Goggles</h1>
      <p className="guideText">
        This powerful HUD2 item was added at the tail end of season 1, along
        with the Wetware magazine instruction item that drops in the Subway. You
        won't need anything from the Subway, however everything needed to craft
        this piece can be found in Fair Trade. You'll want to set aside at least
        5000 credits to make this and expect to shop around for low QL parts.
      </p>
      <p className="guideText">
        Following the magazine, you'll need to buy a Targeting Scope from Ranged
        Weapons Components in the tradeskill department. Then you'll need a
        Night Vision Goggles from Basic Devices in the main store room.
      </p>
      <img src={gog1} alt="Crafting step part 1" className="guidePic" />
      <p className="guideContext">The Targeting Scope can be any QL.</p>
      <p className="guideContext">This process requires no skills.</p>
      <p className="guideText">
        This leaves you with a different item also called Targeting Scope and
        some vague instructions looking for an analyzer. The item your looking
        for is Bio Analyzing Computer sold in Mechanical and Electrical
        Engineering Components found in the tradeskill department.
      </p>
      <p className="guideText">
        The Bio Analyzing Computer is relatively expensive so you'll want to
        shop around for that part if credits are tight. At 500 CL, a QL 7 cost
        about 2500.
      </p>
      <img src={gog2} alt="Crafting step part 2" className="guidePic" />
      <p className="guideContext">The Bio Analyzing Computer can be any QL.</p>
      <p className="guideContext">This process requires no skills.</p>
      <p className="guideText">
        You'll now have a Bio-Analyzing Targeting Goggles which calls for a
        mystery serum. The serum is called XU-11 Serum and can be found in
        Pharmacy and Chemistry Components next to the previous shop terminal.
      </p>
      <img src={gog3} alt="Crafting step part 3" className="guidePic" />
      <p className="guideContext">The XU-11 Serum can be any QL.</p>
      <p className="guideContext">This process requires no skills.</p>
      <p className="guideText">
        You should now have a Activated Bio-Analyzing Targeting Goggles. The
        last step is more straight forward, since it lists the item needed in
        the description. Nano Circuitry Wire can be found in General Components.
      </p>
      <img src={gog4} alt="Crafting step part 4" className="guidePic" />
      <p className="guideContext">The Nano Circuitry Wire can be any QL.</p>
      <p className="guideContext">This process requires no skills.</p>
      <p className="guideText">
        Your Sentient Targeting Goggles are now complete. Each step of the
        process and the product are NODROP, but all of the ingredients are not.
      </p>
      <img src={gog5} alt="Goggles stats" className="statsPic" />
      <p className="guideContext">
        Modifiers of Sentient Targeting Goggles from Ithaca's portal on December
        29, 2025.
      </p>
      <p className="guideText">
        The most notable modifier is the +15 critical increase. This scope is a
        must-have for any shotgun or rifle users as they regularly have high
        critical modifiers. It should be noted that weapons such as Diamondine
        Kick Pistol which use shotgun and pistol will not be viable due to the
        -4000 in all non-shotgun/rifle weapon skills. Burst is neither debuffed
        or buffed.
      </p>
    </Stage>
  );
}

export default Goggles;
