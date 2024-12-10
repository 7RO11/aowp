import "./Policy.css";
import Stage from "../stage/Stage";

function Policy() {
  return (
    <Stage>
      <h1>AOWP difficulty policy</h1>
      <div className="policyBox">
        <p>
          This poilcy assumes the worst possible conditions. 1 player solo, no
          OSBs, typical drop rates. In cases where it is impossible to solo
          (COH), the difficulty is bumped +1.
        </p>
        <hr />
        <p>
          <span style={{ color: "gray" }}>Gray:</span> Trivial to obtain by
          yourself.
        </p>
        <p>
          <span style={{ color: "rgb(0, 200, 0)" }}>Green:</span> Easy to obtain
          by yourself.
        </p>
        <p>
          <span style={{ color: "greenyellow" }}>Light Green:</span> Easy to
          obtain by yourself, might take some time. Light tradeskills.
        </p>
        <p>
          <span style={{ color: "gold" }}>Yellow:</span> Moderately difficult to
          obtain by yourself, general dungeon mobs. Putting points or time into
          tradeskills.
        </p>
        <p>
          <span style={{ color: "orange" }}>Orange:</span> Difficult to obtain
          by yourself. Dungeon mid-bosses or strong mobs. Rare loot. May require
          finding an outside tradeskiller.
        </p>
        <p>
          <span style={{ color: "red" }}>Red:</span> Very difficult to obtain by
          yourself. Dungeon bosses or raid mobs. Rare/Ultra rare loot. May
          require finding an outside tradeskiller with awkward or very high
          skill checks.
        </p>
        <p>
          <span style={{ color: "firebrick" }}>Dark Red:</span> Nearly
          impossible to obtain by yourself. The strongest of mobs or raid
          bosses. Rare/Ultra rare loot. May require finding an outside
          tradeskiller with awkward or very high skill checks.
        </p>
        <p>
          <span style={{ color: "royalblue" }}>Blue:</span> Weapons that can't
          be measured accurately by this system, such as Solar-Powered Tinker
          Pistol.
        </p>
      </div>
    </Stage>
  );
}

export default Policy;
