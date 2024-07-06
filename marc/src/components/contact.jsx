import React, { forwardRef } from "react";
import MailIcon from "../assets/pictures/mail-icon.png"

const Contact = forwardRef((props, ref) => (
    <div className="contact__container" ref={ref}>
                <div className="contact-content__container">
                    <p className="whats-next-contact__container">
                        WHATS NEXT
                    </p>
                    <h2 className="header-contact__container">
                        Let's work together.
                    </h2>
                    <p className="text-contact__container">
                        If you’d like to talk about a project you want help with, just drop me a message at <span className="text-contact-bold">contact@mg-webdev.com</span> <br /> I’m currently available for any design projects, dashboard designs or landing pages gigs.
                    </p>
                    <a className="mail-contact__container" href="mailto:contact@mg-webdev.com">
                        <p className="mail-text-contact__container">
                            WRITE ME AN EMAIL
                        </p>
                        <img src={MailIcon} alt="email icon" className="mail-icon" />
                    </a>
                </div>
            </div>
));

export default Contact;
