import React from "react";
import "./Row.css";

function Row({ title, content, img_base_url, isLargeRow }) {
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="posters">
        {content.map((item) => {
          return (
            <img
              key={item.id}
              className={`poster_img ${isLargeRow && "poster_img_large"}`}
              src={`${img_base_url}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.original_name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
