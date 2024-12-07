import db from "../Itemdb";
import ItemFragment from "./Fragment";

function Section(props) {
  return Object.keys(db[props.section]).map((item) => {
    // who did this
    return (
      <ItemFragment
        key={props.key}
        key69={props.key}
        item={item}
        section={props.section}
      />
    );
  });
}

export default Section;
