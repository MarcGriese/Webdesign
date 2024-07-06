import React, { forwardRef } from "react";
import MailIcon from "../assets/pictures/mail-icon.png"

const ContactDE = forwardRef((props, ref) => (
    <div className="contact__container" ref={ref}>
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
));

export default ContactDE;
