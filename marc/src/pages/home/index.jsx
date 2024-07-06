import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../components/header";
import Skillset_Component from "../../components/skillset";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

// Images
import MarcIMG from "../../assets/pictures/welcome-pic-small.png"
import LogoMG from "../../assets/pictures/logo-mg-white.png"
import MenuIcon from "../../assets/pictures/menu-icon.png"
import welcomepic from "../../assets/pictures/welcome-pic2.png"

import FeedbackIMG from "../../assets/pictures/feedback-img.png"
import Recent_Projects from "../../components/projects";


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
            {/* <div className="menu-welcome-component__container col-4" onClick={() => handleClick('Work')} style={{ backgroundColor: lastClicked === 'Work' ? '#5221E6' : 'transparent' }}>
                <h3>Work</h3>
            </div> */}
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
                            {/* <div
                                className={`menu-item ${selectedItem === 'work' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('work')}
                            >
                                Work
                            </div> */}
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

            {/* Skillset */}
            <Skillset_Component ref={skillsetRef} />
            
            {/* Recent Projects */}
            <Recent_Projects ref={feedbackRef}/>

            {/* Customer feedback
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

            <div className="placeholder"></div> */}

            {/* contact */}
            <Contact ref={contactRef}/>

            <div className="placeholder"></div>

            {/* footer */}
            <Footer/>

        </>
    )
}