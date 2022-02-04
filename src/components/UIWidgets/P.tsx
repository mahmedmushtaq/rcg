import { UIWidgetPropTypes as PropTypes } from "./propTypes";

const P = ({ children, className }: PropTypes) => {
  return <p className={`font-p my-2 ${className}`}>{children}</p>;
};

export default P;
