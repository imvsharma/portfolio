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
    <rect x="7" y="1" fill="none" strokeWidth="2" strokeMiterlimit="10" width="48" height="17"/>
<line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="2" y1="9" x2="7" y2="9"/>
<polyline fill="none" strokeWidth="2" strokeMiterlimit="10" points="55,9 61,9 61,24 32,24 32,41 "/>
<rect x="28" y="42" fill="none" strokeWidth="2" strokeMiterlimit="10" width="8" height="21"/>

  </svg>
);

export default SVG;
