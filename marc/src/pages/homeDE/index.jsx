import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import HeaderDE from "../../components/headerDE";
import MarcIMG from "../../assets/pictures/welcome-pic-small.png"
import LogoMG from "../../assets/pictures/logo-mg-white.png"
import MenuIcon from "../../assets/pictures/menu-icon.png"
import Skillset_ComponentDE from "../../components/skillsetDE";

import welcomepic from "../../assets/pictures/welcome-pic-DE.png"

import PhoneIcon from "../../assets/pictures/phone-icon.png"
import FlagGB from "../../assets/pictures/flag-gb-icon.png"
import LinkedInIcon from "../../assets/pictures/linkedin-icon.png"
import XIcon from "../../assets/pictures/x-icon.png"
import InstagramIcon from "../../assets/pictures/instagram-icon.png"
import DribbleIcon from "../../assets/pictures/dribble-icon.png"
import CopyrightIcon from "../../assets/pictures/copyright-icon.png"

import MailIcon from "../../assets/pictures/mail-icon.png"

import FeedbackIMG from "../../assets/pictures/feedback-img.png"

const MenuComponent = ({ scrollToSkillset, scrollToFeedback, scrollToFooter }) => {
    const [lastClicked, setLastClicked] = useState('About Me'); // Default to 'About Me' as initially clicked

    const handleClick = (menuItem) => {
        setLastClicked(menuItem);
        switch (menuItem) {
            case 'About Me':
                scrollToSkillset();
                break;
            case 'Work':
                scrollToFeedback();
                break;
            case 'Contact':
                scrollToFooter();
                break;
            default:
                break;
        }
    };

    return (
        <div className="desktop-menu-welcome-component__container">
            <div className="menu-welcome-component__container col-4" onClick={() => handleClick('About Me')} style={{ backgroundColor: lastClicked === 'About Me' ? '#5221E6' : 'transparent' }}>
                <h3>Über mich</h3>
            </div>
            {/* <div className="menu-welcome-component__container col-4" onClick={() => handleClick('Work')} style={{ backgroundColor: lastClicked === 'Work' ? '#5221E6' : 'transparent' }}>
                <h3>Meine Arbeit</h3>
            </div> */}
            <div className="menu-welcome-component__container col-4" onClick={() => handleClick('Contact')} style={{ backgroundColor: lastClicked === 'Contact' ? '#5221E6' : 'transparent' }}>
                <h3>Kontakt</h3>
            </div>
        </div>
    );
};

function WelcomeComponent({ scrollToSkillset, scrollToFeedback, scrollToFooter }) {
    const [isMobile, setIsMobile] = useState(document.documentElement.clientWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(document.documentElement.clientWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('about');

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
        switch (item) {
            case 'about':
                scrollToSkillset();
                break;
            case 'work':
                scrollToFeedback();
                break;
            case 'contact':
                scrollToFooter();
                break;
            default:
                break;
        }
        setMenuOpen(false);
    };

    if (isMobile) {
        return (
            <div className="welcome-component__container row">
                <div className="logo-foldout__container col-5">
                    <img src={LogoMG} alt="Marc Griese Logo" className="logo-img__container" />
                    <img
                        src={MenuIcon}
                        alt="menu icon"
                        className="menu-icon__container"
                        onClick={handleMenuClick}
                    />
                    {menuOpen && (
                        <div className="dropdown-menu">
                            <div
                                className={`menu-item ${selectedItem === 'about' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('about')}
                            >
                                Über mich
                            </div>
                            {/* <div
                                className={`menu-item ${selectedItem === 'work' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('work')}
                            >
                                Meine Arbeit
                            </div> */}
                            <div
                                className={`menu-item ${selectedItem === 'contact' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('contact')}
                            >
                                Kontakt
                            </div>
                        </div>
                    )}
                </div>
                <div className="marc-img__container">
                    <img src={MarcIMG} alt="Marc Griese Potrait" />
                </div>
                <div className="menu__container col-7">
                    <div className="mobile-marc-text__container row">
                        <h1 className="marc-griese-text col-10">
                            Ich bin Marc Griese. <br /> Ein Webentwickler <br />
                            <span className="marc-griese-text__highlighted">
                                aus Deutschland.
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                {/* Hier ist dein Desktop-Code */}
                <div className="desktop-welcome-component__container row">
                    <div className="left-desktop-welcome-component__container col-5">
                        <div className="desktop-logo__container">
                            <img src={LogoMG} alt="Marc Griese Logo" />
                        </div>
                    </div>
                    <div className="right-desktop-welcome-component__container col-7">
                        <MenuComponent
                            scrollToSkillset={scrollToSkillset}
                            scrollToFeedback={scrollToFeedback}
                            scrollToFooter={scrollToFooter}
                        />
                    </div>
                </div>
                <div className="welcome-much__container">
                    <img src={welcomepic} alt="" />
                </div>
            </div>
        );
    }
}




export default function HomeDE() {
    const skillsetRef = useRef(null);
    const feedbackRef = useRef(null);
    const contactRef = useRef(null);

    const handleScrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <HeaderDE />
            <WelcomeComponent
                scrollToSkillset={() => handleScrollTo(skillsetRef)}
                scrollToFeedback={() => handleScrollTo(feedbackRef)}
                scrollToFooter={() => handleScrollTo(contactRef)}
            />

            <Skillset_ComponentDE ref={skillsetRef} />

            {/* Customer feedback */}
            {/* <div className="customer-feedback__container row" ref={feedbackRef}>
                <div className="customer-feedback-content_container row">
                    <div className="left-customer-feedback-content__container col-6">
                        <div className="feedback-content-wrap">
                            <h1 className="feedback-header-text">
                                Was meine Kunden über mich sagen:
                            </h1>
                            <p className="feedback-content-text">
                                Hier sind ein paar Eindrücke von Personen, mit denen ich zuletzt zusammengearbeitet habe.
                            </p>
                            <h3 className="feedback-testimonials-link">
                                Alle Berichte ansehen
                            </h3>
                        </div>
                    </div>
                    <div className="right-customer-feedback-content__container col-6">
                        <div className="feedback-content-wrap">
                            <div className="feedback-img__container">
                                <img src={FeedbackIMG} alt="sample image" />
                            </div>
                            <div className="feedback-text_container">
                                <p className="feedback-customer-text">
                                    “Marc is one of best designers I have worked with in my entire life. He is a designer and developer who is very capable of taking up complex projects and delivers impeccable design.”
                                </p>
                                <p className="feedback-customer-name">
                                    Bananenbieger187
                                </p>
                                <p className="feedback-customer-company">
                                    CEO, Baumwollfeld
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

            {/* <div className="placeholder"></div>

            {/* contact */}
            <div className="contact__container" ref={contactRef}>
                <div className="contact-content__container">
                    <p className="whats-next-contact__container">
                        WAS JETZT?
                    </p>
                    <h2 className="header-contact__container">
                        Lassen Sie uns zusammen arbeiten.
                    </h2>
                    <p className="text-contact__container">
                        Wenn Sie über ein Projekt sprechen möchten, bei dem Sie Hilfe benötigen, schreiben Sie einfach eine Mail an <span className="text-contact-bold">contact@mg-webdev.com</span> <br /> Aktuell stehe ich für sämtliche Designprojekte, Dashboard-Entwicklungen und Gestaltungen von Landingpages zur Verfügung.
                    </p>
                    <a className="mail-contact__container" href="mailto:contact@mg-webdev.com">
                        <p className="mail-text-contact__container">
                            MICH KONTAKTIEREN
                        </p>
                        <img src={MailIcon} alt="email icon" className="mail-icon" />
                    </a>
                </div>
            </div>

            <div className="placeholder"></div>

            {/* footer */}
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

        </>
    )
}