import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Blurb from "./Blurb";
import db from "../Itemdb";
import "./Description.css";
import Stage from "../stage/Stage";

function Description() {
  const { item, type } = useParams();
  const [isPRK, setPRK] = useState(false);
  let itemDisplay;
  try {
    itemDisplay = db[type][item];
  } catch (error) {
    itemDisplay = false;
  }

  let key = 0;

  if (!itemDisplay) {
    return (
      <Stage>
        <h2>who?</h2>
        <p>Fill out the stats bucko</p>
      </Stage>
    );
  }

  if (itemDisplay.versions) {
    for (const item of itemDisplay.versions) {
      if (item.prk === isPRK) {
        itemDisplay = item;
      }
    }
  }
  let blurb = itemDisplay.blurb;
  function getColor(diff) {
    switch (diff) {
      default:
        return "royalblue";
      case 0:
        return "gray";
      case 1:
        return "rgb(0, 200, 0)";
      case 2:
        return "greenyellow";
      case 3:
        return "gold";
      case 4:
        return "orange";
      case 5:
        return "red";
      case 6:
        return "firebrick";
      case 69:
        return "royalblue";
    }
  }
  return (
    <Stage>
      <div className="header">
        <h1>{itemDisplay.name}</h1>
        <span
          className={"swords"}
          style={{ color: getColor(itemDisplay.diff) }}
          data-tooltip-id="diff"
        >
          ⚔
        </span>
        <Tooltip id="diff" place="bottom">
          <div className="colors"></div>
          <div className="diffBox">
            <span className="easy">Easy</span>{" "}
            <span className="hard">Hard</span>
          </div>
        </Tooltip>
        {itemDisplay.auno ? (
          <a id="auno" target="_blank" rel="noreferrer" href={itemDisplay.auno}>
            auno
          </a>
        ) : (
          <></>
        )}
        {db[type][item].versions ? (
          <>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => {
                  setPRK(!isPRK);
                }}
              />
              <span className="sliderPRK round"></span>
            </label>
            <span id="PRK">PRK?</span>
          </>
        ) : (
          <></>
        )}
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
                  <Tooltip id="ql" place="bottom">
                    <div className="colors"></div>
                    <div className="diffBox">
                      Stats are of the highest QL unless stated otherwise above.
                    </div>
                  </Tooltip>
                  <sup data-tooltip-id="ql" className="question">
                    ?
                  </sup>
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
                  <sup data-tooltip-id="crit" className="question">
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
          <table className="statsTable bottom">
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
