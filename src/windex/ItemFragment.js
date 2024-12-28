import { Link } from "react-router-dom";
import db from "../Itemdb";

function ItemFragment(props) {
  return (
    <p>
      {db[props.section][props.item].type
        ? `${db[props.section][props.item].min}-${
            db[props.section][props.item].max
          }`
        : `${db[props.section][props.item]["versions"][0].min}-${
            db[props.section][props.item]["versions"][0].max
          }`}{" "}
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
