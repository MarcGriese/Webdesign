import React from "react";

export default function LiveDates() {
    return (
        <div className="live-dates--container row">
            {/* <div className="live-dates-header--container col-12">
                <h1>

                </h1>
            </div> */}
            <div className="live-dates-information--container col-9">
                <p>
                    No upcoming tour dates for Au/Ra. Get the newsletter for updates on live gig information, shows on sale, and concert ticket pre-sales.
                </p>
            </div>
            <div className="dates-button--container col-12">
                <a className="dates-button" target="_blank" href="https://forms.sonymusicfans.com/campaign/signup_au-ra_2018_09_13/">
                    <h3>
                        Sign Me Up!
                    </h3>
                </a>
            </div>
        </div>
    )
}