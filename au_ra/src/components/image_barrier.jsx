import React from "react";

export default function ImageBarrier({ imgData, heading }) {
  const barrierStyle = {
    backgroundImage: `url(${imgData})`,
  };

  return (
    <div className="barrier_image--container row" style={barrierStyle}>
      <h1 className="barrier-heading col-12" >
        {heading}
      </h1>
    </div>
  );
}
