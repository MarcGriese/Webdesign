import React from "react";
import { Link } from "react-router-dom";

import PhoneIcon from "../assets/pictures/phone-icon.png"
import FlagGB from "../assets/pictures/flag-gb-icon.png"
import LogoMG from "../assets/pictures/logo-mg-white.png"
import LinkedInIcon from "../assets/pictures/linkedin-icon.png"
import InstagramIcon from "../assets/pictures/instagram-icon.png"
import CopyrightIcon from "../assets/pictures/copyright-icon.png"

export default function FooterDE() {
    return (
        <div className="footer__container row">
                <div className="upper-footer__container row">
                    <div className="left-footer__container col-4">
                        <div className="left-footer-content__container ">
                            <div className="footer-phone-icon__container">
                                <img src={PhoneIcon} alt="phone icon" className="footer-phone-icon" />
                            </div>
                            <p>+49 176 57903216</p>
                        </div>

                        <Link to="/en" className="left-footer-lower-content__container">
                            <p>Zu EN-Version:</p>
                            <div className="footer-flag-icon__container">
                                <img src={FlagGB} alt="phone icon" className="footer-flag-icon" />
                            </div>
                        </Link>

                    </div>
                    <div className="middle-footer__container col-4">
                        <img src={LogoMG} alt="" className="footer-marc-griese-logo_container" />
                    </div>
                    <div className="right-footer__container col-4">
                        <div className="right-footer-content__container">
                            <div className="right-upper-footer-content__container">
                                <Link to="https://www.linkedin.com/in/marc-griese/" target="_blank" rel="noopener noreferrer" className="footer-social-icon__container">
                                    <img src={LinkedInIcon} alt="LinkedIn icon" className="footer-social-icon" />
                                </Link>
                                <Link to="https://www.instagram.com/mxrcgriese/" target="_blank" rel="noopener noreferrer" className="footer-social-icon__container">
                                    <img src={InstagramIcon} alt="X icon" className="footer-social-icon" />
                                </Link>
                                {/* <div className="footer-social-icon__container">
                                    <img src={DribbleIcon} alt="Dribble icon" className="footer-social-icon" />
                                </div> */}
                            </div>
                            <div className="right-lower-footer-content__container">
                                <div className="footer-copyright-icon__container">
                                    <img src={CopyrightIcon} alt="Copyright icon" className="footer-copyright-icon" />
                                </div>
                                <p className="footer-copyright-text"> 2024 Marc Griese</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-footer__container" />
            </div>
    )
}
