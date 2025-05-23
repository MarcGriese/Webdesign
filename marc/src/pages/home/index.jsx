import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../components/header";
import Skillset_Component from "../../components/skillset";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import FeedbackEN from "../../components/feedbackEN";
import Recent_Projects from "../../components/projects";

// Images
import MarcIMG from "../../assets/pictures/welcome-pic-small.png"
import LogoMG from "../../assets/pictures/logo-mg-white.png"
import MenuIcon from "../../assets/pictures/menu-icon.png"
import welcomepic from "../../assets/pictures/welcome-pic2.png"




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
                        <Link to="/en" className="desktop-logo__container">
                            <img src={LogoMG} alt="Marc Griese Logo" />
                        </Link>
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
            
            <div className="placeholder"></div>

            {/* Customer feedback */}

            {/* <FeedbackEN/> */}
            

            <div className="placeholder"></div>

            {/* contact */}
            <Contact ref={contactRef}/>

            <div className="placeholder"></div>

            {/* footer */}
            <Footer/>

        </>
    )
}