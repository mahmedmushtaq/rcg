import React from "react";
import { UIWidgetPropTypes as PropTypes  } from "./propTypes";

interface H3PropTypes extends PropTypes {
  bold?: boolean;
  size?: number | string;
}

const H3 = ({ children, className = "", bold, size = "" }: H3PropTypes) => {
  return (
    <h3 className={`text-2xl font-gilroy${bold ? "Bold" : ""} ${className}`}>
      {children}
    </h3>
  );
};

export default H3;
