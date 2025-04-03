import React from "react";
import FeedbackIMG from "../assets/pictures/feedback-img.png"

export default function feedbackEN() {
    return (
        <div className="customer-feedback__container row">
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
                                Max Mustermann
                            </p>
                            <p className="feedback-customer-company">
                                CEO, Musterfirma
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}