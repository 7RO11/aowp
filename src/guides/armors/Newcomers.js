import "../Guide.css";
import Stage from "../../stage/Stage";

function Newcomers() {
  return (
    <Stage>
      <h1>Newcomer's Armor</h1>
      <p className="guideText">
        One of the most well known sets, Newcomer's is significantly weaker than
        you will find on retail AO. You can get yours on ICC Shuttleport either
        completing Manager Travis Molen's missions for QL 5 or buying it from
        Antonio Stacklund at variable QL.
      </p>
      <p className="guideText">
        It does not level up on Project Rubi-ka, nor does have the same
        modifiers. At QL 5 you'll see flat 42 ACs on a full set, which is better
        than the junk armors you'll find on the island.
      </p>

      <h1>Joint Newcomer's Armor</h1>
      <p className="guideText">
        Sided players may upgrade their Newcomer's set. After signing your
        faction's application, you can purchase badges to apply to each piece.
        There is no head piece so you'll need 6 for the whole set. The badge and
        armor is NODROP so it must be made while you are on the island.
      </p>
      <p className="guideText">
        Joint Newcomers upgrades to QL 15 on Project Rubi-ka. Like the unsided
        kind, it will only provide ACs. It will keep you decently insulated from
        most low level dangers like early Subway.
      </p>
    </Stage>
  );
}

export default Newcomers;
