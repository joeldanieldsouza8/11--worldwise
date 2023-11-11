import { Link } from "react-router-dom";
import { logo } from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={logo} />
    </Link>
  );
}

export default Logo;
