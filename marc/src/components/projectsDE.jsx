import React, { forwardRef } from "react";
import PP_logo from "../assets/pictures/PennyPlanner_logo.png"

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
                    <div className="projects__customer">
                        <img src={PP_logo} alt="Customer Logo" className="projects__customer-logo" />
                    </div>
                </div>
                <div className="projects__right col-6">
                    <div className="projects__customer">
                        <img src={PP_logo} alt="Customer Logo" className="projects__customer-logo" />
                    </div>
                    <div className="projects__customer">
                        <img src={PP_logo} alt="Customer Logo" className="projects__customer-logo" />
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Recent_ProjectsDE;
