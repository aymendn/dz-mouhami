import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SvgColor from "react-svg-color";

const LogoComponent = ({ isWhite = false, to = "/" }) => {
  return (
    <Link to={to}>
      {isWhite ? (
        <SvgColor svg={Logo} colors={["#FFF", "#FFF"]} />
      ) : (
        <img src={Logo} />
      )}
    </Link>
  );
};

export default LogoComponent;
