import { useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Blurb from "./Blurb";
import db from "../Itemdb";
import "./Description.css";
import Stage from "../stage/Stage";

function Description() {
  let { item, type } = useParams();
  let itemDisplay = db[type][item];
  let key = 0;
  if (!itemDisplay) {
    return (
      <Stage>
        <h2>who?</h2>
        <p>Fill out the stats bucko</p>
      </Stage>
    );
  }
  let blurb = itemDisplay.blurb;

  return (
    <Stage>
      <div className="header">
        <h1>{itemDisplay.name}</h1>
        <a id="auno" target="_blank" rel="noreferrer" href={itemDisplay.auno}>
          auno
        </a>
      </div>

      <Blurb blurb={blurb} />
      {itemDisplay.stats ? (
        <div>
          <h1>
            Stats
            <span data-tooltip-id="legend" className="legend">
              legend
            </span>
          </h1>
          <Tooltip id="legend" place="bottom">
            <p>White: Nothing of note</p>
            <p className="g">Gold: Excellent</p>
            <p className="r">Red: Important to know/flaw</p>
          </Tooltip>

          <table className="statsTable">
            <tbody>
              <tr>
                <td className={itemDisplay.stats.ql.quality}>
                  QL: {itemDisplay.stats.ql.value}
                </td>
                <td>
                  DMG:
                  <span className={itemDisplay.stats.minDamage.quality}>
                    {itemDisplay.stats.minDamage.value}
                  </span>
                  <span>-</span>
                  <span className={itemDisplay.stats.maxDamage.quality}>
                    {itemDisplay.stats.maxDamage.value}
                  </span>
                  <span className={itemDisplay.stats.critMod.quality}>
                    ({itemDisplay.stats.critMod.value})
                  </span>
                  <sup data-tooltip-id="crit" className="legend">
                    ?
                  </sup>
                  <Tooltip id="crit" place="bottom">
                    <p className="crit">
                      The number in parenthesis is the critical modifier. Crit
                      mods significantly higher than max damage suggest that
                      this may be a crit weapon.
                    </p>
                  </Tooltip>
                </td>
              </tr>

              <tr>
                <td className={itemDisplay.stats.aSpeed.quality}>
                  AS: {itemDisplay.stats.aSpeed.value}
                </td>
                <td className={itemDisplay.stats.rSpeed.quality}>
                  RS: {itemDisplay.stats.rSpeed.value}
                </td>
              </tr>
              <tr>
                <td className={itemDisplay.stats.range.quality}>
                  Range: {itemDisplay.stats.range.value}
                </td>
                <td className={itemDisplay.stats.init.quality}>
                  Init: {itemDisplay.stats.init.value}
                </td>
              </tr>
              <tr>
                <td className={itemDisplay.stats.dual.quality}>
                  DW?: {itemDisplay.stats.dual.value}
                </td>
                <td className={itemDisplay.stats.specials.quality}>
                  SPs: {itemDisplay.stats.specials.value}
                </td>
              </tr>
              <tr>
                <td className={itemDisplay.stats.attackCap.quality}>
                  MBS: {itemDisplay.stats.attackCap.value}
                </td>
                <td className={itemDisplay.stats.multi.quality}>
                  Multi: {itemDisplay.stats.multi.value}
                </td>
              </tr>
            </tbody>
          </table>
          <h1>Requirements</h1>
          <table className="statsTable">
            <tbody>
              {Object.keys(itemDisplay.stats.reqs).map((req) => {
                return (
                  <tr key={key++}>
                    <td className={itemDisplay.stats.reqs[req].quality}>
                      {req}
                    </td>
                    <td className={itemDisplay.stats.reqs[req].quality}>
                      {itemDisplay.stats.reqs[req].value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Fill out the stats bucko</p>
      )}
    </Stage>
  );
}

export default Description;