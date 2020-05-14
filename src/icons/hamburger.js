import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "24",
  height = "24",
  className = "",
  viewBox="0 0 24 24",


}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    enableBackground="new 0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M24 6h-24v-4h30v4zm0 4h-24v4h30v-4zm0 8h-24v4h30v-4z"/>

  </svg>
);

export default SVG;
