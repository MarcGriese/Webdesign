import React from "react";

export default function ImageBarrier({ imgData, heading }) {
  const barrierStyle = {
    backgroundImage: `url(${imgData})`,
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
    height: "20vh",
    backgroundColor: "#023934",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // To position text over the image
  };

  const textStyle = {
    textAlign: "center",
    color: "white",
    zIndex: 1, // To ensure text is above the image
  };

  return (
    <div className="barrier_image--container row" style={barrierStyle}>
      <h1 className="barrier-heading col-12" style={textStyle}>
        {heading}
      </h1>
    </div>
  );
}
