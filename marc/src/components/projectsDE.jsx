import React, { forwardRef } from "react";
import PP_logo from "../assets/pictures/PennyPlanner_logo.png"

const Recent_ProjectsDE = forwardRef((props, ref) => (
    <div className="recent-project__container row" ref={ref}>
        <div className="recent-project-left__container col-6">
            <div className="recent-project-header__container">
                <h2>Vergangene <br className="responsive-break" /> Projekte &nbsp;
                    <span style={{ color: '#8D21E6' }}>
                        +
                    </span>

                </h2>
            </div>
            <div className="recent-project-left-content__container">
                <img src={PP_logo} alt="" />
            </div>
        </div>
        <div className="recent-project-right__container col-6">
            <div className="recent-project-content__container">

            </div>
            <div className="recent-project-content__container">

            </div>
        </div>

    </div>
))

export default Recent_ProjectsDE;
