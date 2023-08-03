import { Outlet } from "react-router-dom";
import Bridge_gap from "./sections/bridging";
import Talented_f from "./sections/browseralented";
import F_workers from "./sections/filipinoworkers";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Bridge_gap />
            </div>
            <div className="row">
                <F_workers />
            </div>
            <div className="row">
                <Talented_f />
            </div>
        </div>
    );
};

export default Home;
