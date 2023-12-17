import React, { useState, useEffect } from "react";

export default function Footer() {
    const [largeScreen, setLargeScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setLargeScreen(window.innerWidth > 600);
        }

        window.addEventListener("resize", handleResize);

        // Initialer Wert basierend auf der Bildschirmbreite setzen
        setLargeScreen(window.innerWidth > 600);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="footer--container row">
                <div className="footer-text--container col-12">
                    ©2023 SONY MUSIC ENTERTAINMENT UK LTD. {largeScreen ? " | " : <br />} PRIVACY & COOKIE POLICY
                </div>
            </div>
        </>
    );
}