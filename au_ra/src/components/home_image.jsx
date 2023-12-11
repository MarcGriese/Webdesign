import React from "react";
import image from "../assets/images/about_aura.jpg"
import test from "../assets/images/test.png"

export default function HomeImage() {
    return (
        <>
            <div className="image_container">
                <img src={image} alt="" />
                <a href="https://open.spotify.com/artist/1eMmoIprPDWeFdB1FxU6ZV?si=B5cFd_T2TgaVTgP9LeRfUQ" target="_blank" class="btn-21">
                    <span>Listen Now</span>
                </a>
            </div>
            <div className="much">
                <img src={test} alt="" />
            </div>

        </>

    )
}