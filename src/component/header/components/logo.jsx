import logo from "../../../imgs/linkage-logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link>
            <img src={logo} />
        </Link>
    );
};

export default Logo;
