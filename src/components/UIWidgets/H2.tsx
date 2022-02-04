import React from "react";
import { UIWidgetPropTypes as PropTypes } from "./propTypes";

const H2 = ({ children, className = "" }: PropTypes) => {
  return (
    <h2 className={`text-4xl font-gilroyBold ${className}`}>{children}</h2>
  );
};

export default H2;
