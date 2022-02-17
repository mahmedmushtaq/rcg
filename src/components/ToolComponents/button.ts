import { useRef } from "react";
import { defaultValues } from "../../common/enums";
import { ToolItem } from "../../common/Tools/types";
import { renderWebComponentType } from "../../render/types";
import { ButtonIcon } from "../UIWidgets";

const button: renderWebComponentType = {
  component: "button",
  className: "",
  style: {},
  draggable: true,
  id: "btn",
  child: "Btn text will come here....",
  parentId: defaultValues.parentId,
};

const Button: ToolItem = {
  icon: ButtonIcon,
  heading: "Button",
  element: button,
};

export default Button;
