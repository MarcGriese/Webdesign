import React, { forwardRef } from "react";
import UXUIDesignIcon from "../assets/pictures/ux-ui-design-icon.png"
import CodingIcon from "../assets/pictures/coding-icon.png"
import CreativityIcon from "../assets/pictures/creativity-icon.png"
import SEOIcon from "../assets/pictures/search-icon.png"

const Skillset_ComponentDE = forwardRef((props, ref) => (
        <div className="skillset__container row" ref={ref}>
            <div className="skillset-content_container row">
                <div className="skillset-column1__container col-4">
                    <h1 className="skillset-header-text">Fähigkeiten</h1>
                    <p className="skillset-header-content">
                        Mit Fähigkeiten in über 4 verschiedenen Bereichen von Design und Codeentwicklung, bin ich die perfekte Person für Ihr Projekt. Egal, welche Anforderungen Sie haben, ich kann praktisch jede Herausforderung bewältigen.
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
                                Durch meine Arbeit an verschiedensten Projekten, habe ich ein Auge für modernen Design entwickelt. Dazu gehören u.A. Farben, Typografie und Layout.
                            </p>


                        </div>
                        <div className="skillset-column2-lower__container">

                            <img src={CodingIcon} alt="UX/UI Design Icon" className="skillset-category-icon" />
                            <h2 className="skillset-category-header">
                                Coding
                            </h2>

                            <p className="skillset-category-text">
                                Während meinem Studium konnte ich ein sehr gutes Verständnis für HTML, CSS und JavaScript entwickeln. Ein Framework wie React trägt zur Verbesserung der Codequalität bei und ermöglicht effizientes Arbeiten.
                            </p>

                        </div>
                    </div>
                    <div className="skillset-column3__container col-6">
                        <div className="skillset-column3-higher__container">
                            <img src={CreativityIcon} alt="UX/UI Design Icon" className="skillset-category-icon" />
                            <h2 className="skillset-category-header">
                                Kreativität
                            </h2>

                            <p className="skillset-category-text">
                                Kreativität bedeutet Neues zu schaffen. Ob es nun das Verfassen von Texten, das Gestalten oder das Schreiben einzigartigen Codes ist, ich besitze vielseitige Fähigkeiten.
                            </p>
                        </div>
                        <div className="skillset-column3-lower__container">
                            <img src={SEOIcon} alt="UX/UI Design Icon" className="skillset-category-icon" />
                            <h2 className="skillset-category-header">
                                SEO
                            </h2>

                            <p className="skillset-category-text">
                            Die Optimierung der Sichtbarkeit Ihrer Website für Suchmaschinen wie Google oder Yahoo bringt mehrere Vorteile mit sich, wie zum Beispiel kosteneffiziente Lead-Generierung oder Steigerung der Bekanntheit Ihrer Marke.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
));

export default Skillset_ComponentDE;