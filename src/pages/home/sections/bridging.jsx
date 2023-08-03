import banner_1st from "../../../imgs/1stpage-banner-bg.png";
import B_categories from "./components/bridge.categ";
import B_content from "./components/bridge.content";
import B_form from "./components/bridge.form";
const Bridge_gap = () => {
    return (
        <section className="banner-section ">
            <div className="container k-container">
                <div className="row align-items-center">
                    <div className="col col-md-7 px-0">
                        <B_content />
                        <B_form />
                        <B_categories />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bridge_gap;
