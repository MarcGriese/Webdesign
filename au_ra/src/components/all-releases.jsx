import React, { useState } from "react";
import Release from "./release-comp";
import songsData from "../assets/json/songs.json";

export default function AllReleases() {
    const { songs } = songsData;
    const initialDisplayCount = 2;
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);

    const handleShowMore = () => {
        setDisplayCount(displayCount + 5);
    };

    const handleHideAll = () => {
        setDisplayCount(initialDisplayCount);
    };

    const showMoreButton =
        displayCount < songs.length ? (
            <button className="release-button" onClick={handleShowMore}>
                <h3>Show More Releases</h3>
            </button>
        ) : null;

    const hideAllButton =
        displayCount > initialDisplayCount ? (
            <button className="release-button" onClick={handleHideAll}>
                <h3>Hide All Releases</h3>
            </button>
        ) : null;

    return (
        <div className="all_releases--container row">
            {songs.slice(0, displayCount).map((song, index) => (
                <Release
                    key={index}
                    title={song.songName}
                    text={song.songText}
                    imgData={require(`../assets/images/song-covers/${song.songImage}`).default}
                    link={song.songURL}
                    release_date={song.release_date}
                    addBorder={index !== displayCount - 1} // Condition to add border to all except the last displayed release
                />
            ))}
            <div className="buttons-container col-12">
                {showMoreButton}
                {hideAllButton}
            </div>
        </div>
    );
}
