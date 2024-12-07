import { Link } from "react-router-dom";
import db from "../Itemdb";

function ItemFragment(props) {
  return (
    <p key={props.key69}>
      <Link
        to={
          db[props.section][props.item].type
            ? `/item/${db[props.section][props.item].type}/${
                db[props.section][props.item].name
              }`
            : `/item/${db[props.section][props.item]["versions"][0].type}/${
                db[props.section][props.item]["versions"][0].name
              }`
        }
        className="indexLink"
      >
        {props.item}
      </Link>
    </p>
  );
}

export default ItemFragment;
