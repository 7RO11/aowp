import "./Guide.css";
import Stage from "../stage/Stage";
import und from "../assets/und.png";
import fury from "../assets/fury.png";
import voidarr from "../assets/voidarr.png";
import agora from "../assets/agora.png";
import arach from "../assets/arach.png";

function StepsArrows() {
  return (
    <Stage>
      <h1>How to make Steps of Madness Special Arrows</h1>
      <p className="guideText">
        Yet another addition between Season 1 and 1.5, these special arrows were
        made to add some special flare to bows. If you are unfamilar with
        special arrows, they require Bow Special Attack and a bow to be
        equipped. Then you would use them like any other grenade-like item such
        as gumboils.
      </p>

      <p className="guideText">
        These specific arrows are crafted from the ethers found in Steps of
        Madness. The crafting process is similar to the special arrows on
        retail.
      </p>

      <p className="guideText">
        There are 5 different ethers that produce different effects. Once you
        have gathered some, head to your Fair Trade tradeskill department. Find
        the terminal Ranged Weapon Components, inside it you'll want to buy
        Reet-Tech Metaplast Arrowshafts.
      </p>
      <table className="zeroTable">
        <thead>
          <th>Process</th>
          <th>Result</th>
          <th>Effect</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={und} alt="blue arrows craft" className="arrowsPic" />
            </td>
            <td>Undertow</td>
            <td>Health/nano lifetap over time</td>
          </tr>
          <tr>
            <td>
              <img src={fury} alt="red arrows craft" className="arrowsPic" />
            </td>
            <td>Fury's Blaze</td>
            <td>Area of effect damage over time</td>
          </tr>
          <tr>
            <td>
              <img
                src={voidarr}
                alt="black arrows craft"
                className="arrowsPic"
              />
            </td>
            <td>Engulfing Void</td>
            <td>Blind/AAO Debuff</td>
          </tr>
          <tr>
            <td>
              <img
                src={agora}
                alt="purple arrows craft"
                className="arrowsPic"
              />
            </td>
            <td>Agoraphobia</td>
            <td>7 second root</td>
          </tr>
          <tr>
            <td>
              <img src={arach} alt="green arrows craft" className="arrowsPic" />
            </td>
            <td>Arachnophobia</td>
            <td>Instant damage, chance to fear</td>
          </tr>
        </tbody>
      </table>

      <p className="guideContext">
        The Reet-Tech Metaplast Arrowshafts can be any QL.
      </p>
      <p className="guideContext">This process requires no skills.</p>

      <p className="guideText">
        In my personal experience, I've gotten the most use out of Undertow. The
        other arrows are gadgets for specific situations or just not as strong.
        The blue ether seems to drop most often from the Khalum looking ghost
        type mobs.
      </p>
    </Stage>
  );
}

export default StepsArrows;
