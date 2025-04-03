import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pictures/logo-mg-white.png"

export default function Header() {
    return (
        <section className="header2">
            <div className="header2__content">
                <p className="header2__text">contact@mg-webdev.com</p>
                <Link to="/"><img src={Logo} alt="MG Logo" /></Link>
                <p className="header2__text">+49 176 57903216</p>
            </div>
        </section>
    )
}
