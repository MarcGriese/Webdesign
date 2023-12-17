import React from "react";
import image from "../assets/images/about_aura.jpg"
import test from "../assets/images/test.png"

export default function HomeImage() {

    const scrollToAboutAura = () => {
        // Finde das Element mit der Klasse "much" und rufe die scrollIntoView-Methode auf
        const Element = document.querySelector(".left-about_aura--container");
        Element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="image_container">
                <img src={image} alt="" />
                <a href="https://open.spotify.com/artist/1eMmoIprPDWeFdB1FxU6ZV?si=B5cFd_T2TgaVTgP9LeRfUQ" target="_blank" className="btn-21">
                    <span>Listen Now</span>
                </a>
            </div>
            <div className="much" onClick={scrollToAboutAura}>
                <img src={test} alt="" />
            </div>

        </>

    )
}