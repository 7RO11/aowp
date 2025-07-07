import { Link } from "react-router-dom";
import db from "../Itemdb";
import { Tooltip } from "react-tooltip";

function ItemFragment(props) {
  return (
    <div className="indexLinkCont">
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
      {db[props.section][props.item]["prk"] ? (
        <span data-tooltip-id="warningSmall" className="warningSmall">
          <Tooltip id="warningSmall">
            This is a custom Project Rubi-ka weapon.
          </Tooltip>
          ⚠️
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ItemFragment;
