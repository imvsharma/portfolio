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
    <polygon fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" points="1,63 1,2 62,63 "/>
<polygon fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" points="14,54 14,30 38,54 "/>
<line fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" x1="8" y1="22" x2="2" y2="22"/>
<line fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" x1="6" y1="30" x2="2" y2="30"/>
<line fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" x1="8" y1="38" x2="2" y2="38"/>
<line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="6" y1="46" x2="2" y2="46"/>
<line fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" x1="8" y1="54" x2="2" y2="54"/>
<polygon fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" points="25,1 19,7 55,43 63,45 61,37 "/>
<line fill="none" stroke="#70f6a9" strokeWidth="2" strokeMiterlimit="10" x1="25" y1="13" x2="31" y2="7"/>

  </svg>
);

export default SVG;
