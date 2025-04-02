import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import PP_logo from "../assets/pictures/PennyPlanner_logo.png"
import KT_logo from "../assets/pictures/Kanutours_Logo.png"
import TAMMA_logo from "../assets/pictures/TAMMA_Logo.png"

const Recent_ProjectsDE = forwardRef((props, ref) => {

    return (

        <section className="projects" ref={ref}>
            <div className="projects__content row">
                <div className="projects__left col-6">
                    <h2 className="projects__header">
                        Vergangene <br className="responsive-break" />  Projekte &nbsp;
                        <span style={{ color: '#8D21E6' }}>
                            +
                        </span>
                    </h2>
                    <Link to="https://www.kanutours-meissenheim.de" target="_blank" className="projects__customer">
                        <img src={KT_logo} alt="Customer Logo" className="projects__customer-logo" />
                    </Link>
                </div>
                <div className="projects__right col-6">
                    <Link to="https://www.tammalehmann.de" target="_blank" className="projects__customer">
                        <img src={TAMMA_logo} alt="Customer Logo" className="projects__customer-logo" />
                    </Link>
                    <Link className="projects__customer">
                        <img src={PP_logo} alt="Customer Logo" className="projects__customer-logo" />
                    </Link>
                </div>
            </div>
        </section>
    )
})

export default Recent_ProjectsDE;
