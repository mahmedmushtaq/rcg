import { useRef } from "react";
import { ToolItem } from "../../common/Tools/types";
import { renderWebComponentType } from "../../render/types";
import { ButtonIcon } from "../UIWidgets";

const button: renderWebComponentType = {
  component: "button",
  className: "",
  style: {},
  draggable: true,
};

const Button: ToolItem = {
  icon: ButtonIcon,
  heading: "Button",
  element: button,
};

export default Button;
