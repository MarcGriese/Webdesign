import React from "react";
import AuRaLogo from "../assets/images/aura-logo.png"
import { SocialIcon } from 'react-social-icons'

export default function Header() {
    return (
        <div className="header--container">
            <div className="upper_header--container">
                <SocialIcon fgColor="white" bgColor="none" url="https://www.facebook.com/heyitsaura/" />
                <SocialIcon fgColor="white" bgColor="none" url="https://twitter.com/heyitsau_ra" />
                <SocialIcon fgColor="white" bgColor="none" url="https://www.instagram.com/heyitsau_ra/?hl=en" />
                <SocialIcon fgColor="white" bgColor="none" url="https://www.youtube.com/c/heyitsaura" />
                <SocialIcon fgColor="white" bgColor="none" url="https://forms.sonymusicfans.com/campaign/signup_au-ra_2018_09_13/" network="email" />
            </div>
            <div className="lower_header--container">
                <img src={AuRaLogo} alt="Au/Ra Logo" className="aura_logo--container" />
            </div>
        </div>
    )
}