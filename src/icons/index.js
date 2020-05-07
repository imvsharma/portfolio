import React from "react";
import Diamond from './diamond';
import Pencil from "./pencil";
import Love from './love';
import Design from './design';

const Icon = props => {
  switch (props.name) {
    case "pencil":
      return <Pencil {...props} />;
    case "love":
      return <Love {...props} />;
    case "diamond":
      return <Diamond {...props} />;
    case "design":
      return <Design {...props} />;
    default:
      return;
  }
};

export default Icon;
