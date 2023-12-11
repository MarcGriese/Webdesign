import React from "react";
import AboutAuRaImage from "../assets/images/aura5.jpg"

export default function AboutAuRa() {
    return (
        <div className="about_aura--container">
            <div className="left-about_aura--container">
                <img src={AboutAuRaImage} alt="Au/Ra 01/21/22" className="about_aura-image" />
            </div>

            <div className="right-about_aura--container">
                <h1>
                    About Au/Ra
                </h1>
                <p>
                Au/Ra is an emerging singer-songwriter known for her captivating blend of alternative pop and electro-pop sounds. 
                Born in Ibiza to a musical family, she brings a unique perspective to her music. 
                Her breakout single "Panic Room" garnered widespread attention, showcasing her haunting vocals and introspective lyrics. <br/><br/>
                Au/Ra's music often explores themes of self-discovery, inner conflicts, and the human experience, resonating with a wide audience.
                With her distinctive style and emotive storytelling, she continues to evolve as an artist, earning praise for her authenticity
                and ability to create music that resonates on a deep level with listeners worldwide.
                </p>
            </div>
        </div>
    )
}