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
    <g>
	<polyline fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" points="29,6 46,6 63,27 32,58 1,27 18,6 32,6 
		32,58 	"/>
	<polyline fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" points="32,57 18,27 24,6 	"/>
	<polyline fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" points="32,57 46,27 40,6 	"/>
	<line fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" x1="1" y1="27" x2="63" y2="27"/>
</g>

  </svg>
);

export default SVG;
