import "./App.css";
import Footer from "./Footer";

function Description(props) {
  let item = props.item;
  return (
    <div className="App">
      <div className="App-header">
        <h2>{props.item.name}</h2>
        <p className="blurb">{item.blurb}</p>
        {item.stats ? (
          <table className="statsTable">
            <tr>
              <td className={item.stats.ql.quality}>
                QL: {item.stats.ql.value}
              </td>
              <td>
                DMG:{" "}
                <span className={item.stats.minDamage.quality}>
                  {item.stats.minDamage.value}
                </span>
                -
                <span className={item.stats.maxDamage.quality}>
                  {item.stats.maxDamage.value}
                </span>
              </td>
            </tr>
            <tr>
              <td className={item.stats.aSpeed.quality}>
                AS: {item.stats.aSpeed.value}
              </td>
              <td className={item.stats.rSpeed.quality}>
                RS: {item.stats.rSpeed.value}
              </td>
            </tr>
            <tr>
              <td className={item.stats.range.quality}>
                Range: {item.stats.range.value}
              </td>
              <td className={item.stats.init.quality}>
                Init: {item.stats.init.value}
              </td>
            </tr>
            <tr>
              <td className={item.stats.dual.quality}>
                DW?: {item.stats.dual.value}
              </td>
              <td className={item.stats.specials.quality}>
                SPs: {item.stats.specials.value}
              </td>
            </tr>
            <tr>
              <td className={item.stats.attackCap.quality}>
                MBS: {item.stats.attackCap.value}
              </td>
              <td className={item.stats.multi.quality}>
                Multi: {item.stats.multi.value}
              </td>
            </tr>
          </table>
        ) : (
          <p>Fill out the stats bucko</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Description;
