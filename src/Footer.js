import { Link } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <div className="footer">
      <Link className="Homelink" to={"/"}>
        Home
      </Link>
      <Link className="Homelink" to={"/about"}>
        About
      </Link>
      <Link className="Homelink" to={"/index"}>
        Index
      </Link>
    </div>
  );
}

export default Footer;
