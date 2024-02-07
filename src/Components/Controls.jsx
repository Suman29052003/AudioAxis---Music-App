import React, { useState } from "react";
import previous from "../../IconsAndImages/previousIcon.png";
import next from "../../IconsAndImages/nextIcon.png";
import play from "../../IconsAndImages/playIcon.png";
import pause from "../../IconsAndImages/pauseIcon.png";

const Controls = () => {


  return (
    <>
      <div className="controls">
        <img src={previous} alt="" />
        <img src={play} alt=""  />
        <img src={next} alt="" />
      </div>
    </>
  );
};

export default Controls;
