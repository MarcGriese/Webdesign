import React from "react";
import { Spotify } from "react-spotify-embed";

export default function Release({ title, text, imgData, link, release_date, addBorder }) {

    console.log(link)

    return (
        <div className={`release--container ${addBorder ? 'with-border' : ''} row`}>
            <div className="left-release--container col-6">
                <img src={imgData} alt="" className="release-image" />
            </div>
            <div className="right-release--container col-6">
                <div className="top-right-release--container col-12">
                    <h2>
                        {title}
                    </h2>
                    <h3>
                        {release_date}
                    </h3>
                </div>
                <div className="middle-right-release--container col-12">
                    <p>
                        {text}
                    </p>

                </div>
                <div className="bottom-right-release--container col-12">
                    <Spotify wide link={link} />
                </div>
            </div>
        </div>
    )
}