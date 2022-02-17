import { useRef } from "react";
import { ToolItem } from "../../common/Tools/types";
import { renderElementType } from "../../render/types";
import { ButtonIcon } from "../UIWidgets";

const button: renderElementType = {
  component: "button",
  className: "",
  style: {},
  id: "add-btn",
  children: "Click Me",
  draggable: true,
};

const Button: ToolItem = {
  icon: ButtonIcon,
  heading: "Button",
  element: button,
};

export default Button;
