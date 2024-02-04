import React from "react";
import NavImage from "../../logos/navImage.png";
import homeIcon from "../../IconsAndImages/home.png";
import searchIcon from "../../IconsAndImages/search.png";
import radioIcon from "../../IconsAndImages/radio.png";
import trendingIcon from "../../IconsAndImages/trending.png";

const Main = () => {
  return (
    <div className="main">
      {/* left Side Navbar  */}
      <div className="left">
        <div className="logo">
          <img src={NavImage} alt="" />
          <span>Audio Axis</span>
        </div>
        <div className="home">
          <div className="icon">
            <img src={homeIcon} alt="" />
            <span>Home</span>
          </div>
          <div className="icon">
            <img src={searchIcon} alt="" />
            <span>Search</span>
          </div>
          <div className="icon">
            <img src={radioIcon} alt="" />
            <span>Radio</span>
          </div>
        </div>
        <div className="trending icon">
          <img src={trendingIcon} alt="" />
          <span>Trending Now</span>
        </div>
      </div>
      {/* Right Content Section */}
      <div className="right"></div>
    </div>
  );
};

export default Main;
