import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "80px",
  height = "80px",
  className = "",
  x="0px",
  y="0px",
  viewBox="0 0 80 80",


}) => (
  <svg
    width={width}
    style={style}
    height={height}
    x = {x}
    y = {y}
    viewBox={viewBox}
    enableBackground="new 0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" d="M1,21c0,20,31,38,31,38s31-18,31-38
	c0-8.285-6-16-15-16c-8.285,0-16,5.715-16,14c0-8.285-7.715-14-16-14C7,5,1,12.715,1,21z"/>

  </svg>
);

export default SVG;
