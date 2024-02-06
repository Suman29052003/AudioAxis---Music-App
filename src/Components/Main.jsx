import React, { useState, useEffect } from "react";
import NavImage from "../../logos/navImage.png";
import homeIcon from "../../IconsAndImages/home.png";
import searchIcon from "../../IconsAndImages/search.png";
import radioIcon from "../../IconsAndImages/radio.png";
import trendingIcon from "../../IconsAndImages/trending.png";
import leftArrowIcon from "../../IconsAndImages/left_icon.png";
import Musiccard from "./Musiccard";
import Controls from "./Controls";

const Main = () => {
  const [songName, setSongName] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const byDefault = "trending";

  useEffect(() => {
    async function fetchData_1() {
      const url = `https://v1.nocodeapi.com/suman_/spotify/JEQesEzMGiKRkhKu/search?q=${byDefault}&perPage=20`;
      let data = await fetch(url);
      let res = await data.json();
      let items = res.albums.items;
      console.log(items);
      setSongName(items);
    }
    fetchData_1();
  });

  async function fetchData() {
    const url = `https://v1.nocodeapi.com/suman_/spotify/JEQesEzMGiKRkhKu/search?q=${searchTerm}`;
    let data = await fetch(url);
    let res = await data.json();
    let items = res.albums.items;
    console.log(items);
    setSongName(items);
  }

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
      <div className="right">
        <div className="rightHeader">
          <img src={leftArrowIcon} alt="" />
          <input
            type="text"
            placeholder="Search AudioAxis"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button onClick={fetchData}>search</button>
        </div>
        <div className="rightmain">
          {songName &&
            songName.map((item, index) => (
              <Musiccard
                key={index}
                imgSrc={item.images[0].url}
                title={item.name}
                artist={item.artists[0].name}
                audioSrc={item.preview_url}
              />
            ))}
        </div>
        <div className="control">
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default Main;
