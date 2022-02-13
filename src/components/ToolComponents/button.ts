import { useRef } from "react";
import { ToolItem } from "../../common/Tools/types";
import { elementType } from "../../render/types";
import { ButtonIcon } from "../UIWidgets";

const button: elementType = {
  component: "button",
  className: "",
  style: {},
  id: "add-btn",
  children: "Click Me",
};

const Button: ToolItem = {
  icon: ButtonIcon,
  heading: "Button",
  element: button,
};

export default Button;
