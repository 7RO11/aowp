import { v4 } from "uuid";
import db from "../Itemdb";
import ItemFragment from "./ItemFragment";

function Section(props) {
  return Object.keys(db[props.section]).map((item) => {
    return <ItemFragment key={v4()} item={item} section={props.section} />;
  });
}

export default Section;
