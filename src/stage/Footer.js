import { useState } from "react";
import { Link } from "react-router-dom";
import logoAlt from "../assets/aa12red.png";
import logo from "../assets/aa12.png";

function Footer() {
  const [isFIre, setIsFire] = useState(false);
  return (
    <div className="footer">
      <Link
        to={"/"}
        onMouseLeave={() => setIsFire(false)}
        onMouseEnter={() => setIsFire(true)}
      >
        <img src={isFIre ? logoAlt : logo} className="appLogo" alt="logo" />
      </Link>
      <Link className="footerLink" to={"/"}>
        Home
      </Link>
      <Link className="footerLink" to={"/about"}>
        About
      </Link>
      <Link
        className="footerLink"
        to={"/index"}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Index
      </Link>
      <Link className="footerLink" to={"/roulette"}>
        Roulette
      </Link>
      <Link className="footerLink" to={"/guides"}>
        PRK Guides
      </Link>
    </div>
  );
}

export default Footer;
