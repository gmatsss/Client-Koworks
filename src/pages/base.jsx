import Header from "../component/header/header";

import "./base.css";
import "../../sass/app.scss";

//homepage
import Home from "./home/home";

//howitworks
import Employer from "../pages/how-it-works/employer/employer";

import { Routes, Route } from "react-router-dom";

const Base = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                {/* index is the induction of base component */}
                <Route index element={<Home />} />
                <Route path="/employer" element={<Employer />} />
            </Route>
        </Routes>
    );
};

export default Base;
