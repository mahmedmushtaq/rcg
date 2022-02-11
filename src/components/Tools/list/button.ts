import { ToolItem } from "../types";
import { renderType } from "../../../render/types";
import { ButtonIcon } from "../../UIWidgets";

const button: renderType = {
  component: "button",
  className: "",
  style: {},
  children: "Click Me",
};

const Button: ToolItem = {
  id: "add-btn",
  icon: ButtonIcon,
  heading: "Button",
  element: button,
};

export default Button;
