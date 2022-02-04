import { FileText, Icon } from "react-feather";
import { renderType } from "../../render/types";
import { ButtonIcon } from "../UIWidgets";
import { button, paragraph } from "./elements";

type customIconType = () => JSX.Element;

export interface ToolItem {
  id: string | number;
  icon: customIconType | Icon;
  heading: string;
  element: renderType;
}

export const tools: ToolItem[] = [
  {
    id: "add-btn",
    icon: ButtonIcon,
    heading: "Button",
    element: button,
  },
  {
    id: "add-paragraph",
    icon: FileText,
    heading: "Paragraph",
    element: paragraph,
  },
];
