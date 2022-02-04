import Button from "../../../common/assets/icons/button.png";
import { CustomIconPropTypes } from "./propTypes";

const ButtonIcon = (props: CustomIconPropTypes | undefined = {}) => {
  return (
    <img
      src={Button}
      alt="Icon"
      className={props.className}
      style={{ width: props.size || 25 }}
    />
  );
};

export default ButtonIcon;
