import React, {forwardRef} from "react";
import UXUIDesignIcon from "../assets/pictures/ux-ui-design-icon.png"
import CodingIcon from "../assets/pictures/coding-icon.png"
import CreativityIcon from "../assets/pictures/creativity-icon.png"
import SEOIcon from "../assets/pictures/search-icon.png"

const Skillset_Component = forwardRef((props, ref) => (
    <div className="skillset__container row" ref={ref}>
        <div className="skillset-content_container row">
            <div className="skillset-column1__container col-4">
                <h1 className="skillset-header-text">Skillset</h1>
                <p className="skillset-header-content">
                    With skills in over 4 different fields of design and code development, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.

                </p>
            </div>
            <div className="skillset-categories__container col-8">
                <div className="skillset-column2__container col-6">
                    <div className="skillset-column2-higher__container">

                        <img src={UXUIDesignIcon} alt="UX/UI Design Icon" className="skillset-category-icon" />
                        <h2 className="skillset-category-header">
                            UX/UI Design
                        </h2>

                        <p className="skillset-category-text">
                            My experience working on Production Dashboards has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.
                        </p>


                    </div>
                    <div className="skillset-column2-lower__container">

                        <img src={CodingIcon} alt="UX/UI Design Icon" className="skillset-category-icon" />
                        <h2 className="skillset-category-header">
                            Coding
                        </h2>

                        <p className="skillset-category-text">
                            While studying for three years I developed a very good understanding of HTML, CSS and JavaScript. Using a Framework like React helps making written code more readable.
                        </p>

                    </div>
                </div>
                <div className="skillset-column3__container col-6">
                    <div className="skillset-column3-higher__container">
                        <img src={CreativityIcon} alt="UX/UI Design Icon" className="skillset-category-icon" />
                        <h2 className="skillset-category-header">
                            Creativity
                        </h2>

                        <p className="skillset-category-text">
                            Spanning across diverse fields, my creativity thrives in a fusion of skills. Whether it’s copywriting, designing or writing unique code, I bring a versaitle skillset to the table.
                        </p>
                    </div>
                    <div className="skillset-column3-lower__container">
                        <img src={SEOIcon} alt="UX/UI Design Icon" className="skillset-category-icon" />
                        <h2 className="skillset-category-header">
                            SEO
                        </h2>

                        <p className="skillset-category-text">
                            Improving and optimizing your website's visibility for search engines like Google brings several benefits such as generating leads cost-efficiently or increasing brand-awareness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

export default Skillset_Component;