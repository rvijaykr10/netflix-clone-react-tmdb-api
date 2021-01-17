import React from "react";
import "./Banner.css";

function Banner({ content, img_base_url }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${img_base_url}${content.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="contents">
        <h1 className="title">{content.original_name}</h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="description">{content.overview}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
