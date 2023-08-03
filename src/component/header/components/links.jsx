import { Link } from "react-router-dom";

const NavLink = () => {
    return (
        <nav className="knav">
            <ul>
                <li>
                    <Link className="" to="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <a href="#" className="">
                        How It Works
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link className="nav-link" to="/employer">
                                Employer
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">
                                Job Seeker
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className="" to="/">
                        <span>Post A Job</span>
                    </Link>
                </li>
                <li>
                    <Link className=" " to="/">
                        <span>Job Seeker</span>
                    </Link>
                </li>
                <li>
                    <Link className=" " to="/">
                        <span>Pricing</span>
                    </Link>
                </li>
                <li>
                    <Link className=" " to="/">
                        <span>Resources</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLink;
