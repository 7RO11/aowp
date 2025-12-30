import "./Guide.css";
import Stage from "../stage/Stage";
import derek from "../assets/derek.png";
import pills from "../assets/pills.png";

function Pills() {
  return (
    <Stage>
      <h1>How to make Nano Buff Pills</h1>
      <p className="guideText">
        Nano Buff Pills are a new addiction/addition to Project Rubi-Ka. Added
        between the Season 1 and 1.5 server downtime, these pills were made to
        supplement the need for buffs left behind by the absence of buff bots.
      </p>
      <p className="guideText">
        To get your hands on these pills, you'll want to find Derek Pofier in
        Borealis, outside Fair Trade.
      </p>
      <img src={derek} alt="Derek" className="derekPic" />
      <p className="guideContext">Derek can be found at 650x630 in Borealis.</p>
      <img
        src={pills}
        alt="Pills store"
        className="statsPic"
        style={{ marginTop: "2em" }}
      />
      <p className="guideContext">Pills for sale on December 29, 2025.</p>
      <p className="guideText">
        Derek only sells the empty version of Nano Buff Pills. You'll need to
        find another player with the relevent nanoskills and nanoprogram
        uploaded to make them usable.
      </p>
      <p className="guideText">
        Once you meet the requirements for filling, it's as simple as right
        clicking on the empty pills. The pills will turn into a stack of 3
        consumables.
      </p>
      <p className="guideWarn">
        Make sure you have enough NCU before using the Nano Buff Pill.
      </p>
      <p className="guideText">
        This has been the most common pitfall with these pills. Without enough
        NCU, the pills will activate and waste the charge. The pills effect will
        stop once in combat. They are also prohibitively expensive much before
        TL4 at roughly 100,000 credits per empty pill.
      </p>
      <p className="guideText">
        In my personal experience, I have found the pills to be most useful when
        gathering different buffs you need to use at the same time for
        equipping. If there are strictly no players in your timeslot that can
        cast the buffs, you could acquire filled pills from someone who can find
        a caster.
      </p>
    </Stage>
  );
}

export default Pills;
