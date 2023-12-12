import React from "react";
import Header from "../../components/header";
import AboutAuRa from "../../components/about_aura";
import HomeImage from "../../components/home_image";
import Footer from "../../components/footer";
import ImageBarrier from "../../components/image_barrier";

import AuRaImage1 from "../../assets/images/aura4.jpeg"
import AllReleases from "../../components/all-releases";
import LiveDates from "../../components/live-dates";



export default function Home() {
    return (
        <>
            <Header />
            <HomeImage/>

            <AboutAuRa />
            <ImageBarrier imgData={AuRaImage1} heading="RELEASES"/>
            <AllReleases/>
            <ImageBarrier imgData={AuRaImage1} heading="LIVE DATES"/>
            <LiveDates/>
            <Footer/>
        </>


    )

}