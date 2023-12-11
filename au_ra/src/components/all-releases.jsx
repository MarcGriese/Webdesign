import React, { useState } from "react";
import Release from "./release-comp";

import AssassinCover from "../assets/images/song-covers/assassin.jpg";
import songsData from "../assets/json/songs.json";

export default function AllReleases() {
    const { songs } = songsData;
    const initialDisplayCount = 2; // Anfangs sollen nur 2 Releases angezeigt werden
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);

    const handleShowMore = () => {
        setDisplayCount(displayCount + 5); // Zeige weitere 5 Releases an
    };

    const handleHideAll = () => {
        setDisplayCount(initialDisplayCount); // Verberge alle bis auf die ersten 2 Releases
    };

    const showMoreButton =
        displayCount < songs.length ? (
            <button className="release-button" onClick={handleShowMore}>
                <h3>
                    Show More Releases
                </h3>
            </button>
        ) : null;

    const hideAllButton =
        displayCount > initialDisplayCount ? (
            <button className="release-button" onClick={handleHideAll}>
                <h3>
                    Hide All Releases
                </h3>
            </button>
        ) : null;

    return (
        <>
            <div className="all_releases--container row">
                {songs.slice(0, displayCount).map((song, index) => (
                    <Release
                        key={index}
                        title={song.songName}
                        text={song.songText}
                        imgData={require(`../assets/images/song-covers/${song.songImage}`)
                            .default}
                        link={song.songURL}
                        release_date={song.release_date}
                    />
                ))}
                <div className="buttons-container col-12">
                    {showMoreButton}
                    {hideAllButton}
                </div>
            </div>

        </>
    );
}
