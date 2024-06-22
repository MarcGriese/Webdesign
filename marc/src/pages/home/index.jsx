import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import MarcIMG from "../../assets/pictures/welcome-pic-small.png"
import LogoMG from "../../assets/pictures/logo-mg-white.png"
import MenuIcon from "../../assets/pictures/menu-icon.png"
import Skillset_Component from "../../components/skillset";

import welcomepic from "../../assets/pictures/welcome-pic2.png"
import FlagDE from "../../assets/pictures/flag-de-icon.png"

import PhoneIcon from "../../assets/pictures/phone-icon.png"
import LinkedInIcon from "../../assets/pictures/linkedin-icon.png"
import XIcon from "../../assets/pictures/x-icon.png"
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
                <h3>About Me</h3>
            </div>
            <div className="menu-welcome-component__container col-4" onClick={() => handleClick('Work')} style={{ backgroundColor: lastClicked === 'Work' ? '#5221E6' : 'transparent' }}>
                <h3>Work</h3>
            </div>
            <div className="menu-welcome-component__container col-4" onClick={() => handleClick('Contact')} style={{ backgroundColor: lastClicked === 'Contact' ? '#5221E6' : 'transparent' }}>
                <h3>Contact</h3>
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
                                About Me
                            </div>
                            <div
                                className={`menu-item ${selectedItem === 'work' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('work')}
                            >
                                Work
                            </div>
                            <div
                                className={`menu-item ${selectedItem === 'contact' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('contact')}
                            >
                                Contact
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
                            I'm Marc Griese. <br /> A Web Developer <br />
                            <span className="marc-griese-text__highlighted">
                                based in Germany.
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




export default function HomeEN() {
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
            <Header />
            <WelcomeComponent
                scrollToSkillset={() => handleScrollTo(skillsetRef)}
                scrollToFeedback={() => handleScrollTo(feedbackRef)}
                scrollToFooter={() => handleScrollTo(contactRef)}
            />

            <Skillset_Component ref={skillsetRef} />

            {/* Customer feedback */}
            <div className="customer-feedback__container row" ref={feedbackRef}>
                <div className="customer-feedback-content_container row">
                    <div className="left-customer-feedback-content__container col-6">
                        <div className="feedback-content-wrap">
                            <h1 className="feedback-header-text">
                                This is what people say about me
                            </h1>
                            <p className="feedback-content-text">
                                Here are a few lines from people who I have worked with in the past.
                            </p>
                            <h3 className="feedback-testimonials-link">
                                See all testimonials
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

            </div>

            <div className="placeholder"></div>

            {/* contact */}
            <div className="contact__container" ref={contactRef}>
                <div className="contact-content__container">
                    <p className="whats-next-contact__container">
                        WHATS NEXT
                    </p>
                    <h2 className="header-contact__container">
                        Let's work together.
                    </h2>
                    <p className="text-contact__container">
                        If you’d like to talk about a project you want help with, just drop me a message at <span className="text-contact-bold">contact@mg-webdev.com</span> <br/> I’m currently available for any design projects, dashboard designs or landing pages gigs.
                    </p>
                    <div className="mail-contact__container">
                        <p className="mail-text-contact__container">
                            WRITE ME AN EMAIL
                        </p>
                        <img src={MailIcon} alt="email icon" className="mail-icon" />
                    </div>
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
                        <Link to="/de" className="left-footer-lower-content__container">
                            <p>To DE-Version:</p>
                            <div className="footer-flag-icon__container">
                                <img src={FlagDE} alt="phone icon" className="footer-flag-icon" />
                            </div>
                        </Link>
                    </div>
                    <div className="middle-footer__container col-4">
                        <img src={LogoMG} alt="" className="footer-marc-griese-logo_container" />
                    </div>
                    <div className="right-footer__container col-4">
                        <div className="right-footer-content__container">
                            <div className="right-upper-footer-content__container">
                                <div className="footer-social-icon__container">
                                    <img src={LinkedInIcon} alt="LinkedIn icon" className="footer-social-icon" />
                                </div>
                                <div className="footer-social-icon__container">
                                    <img src={XIcon} alt="X icon" className="footer-social-icon" />
                                </div>
                                <div className="footer-social-icon__container">
                                    <img src={DribbleIcon} alt="Dribble icon" className="footer-social-icon" />
                                </div>
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