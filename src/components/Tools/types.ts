import { Icon } from "react-feather";
import { renderType } from "../../render/types";

type customIconType = () => JSX.Element;

export interface ToolItem {
  id: string | number;
  icon: customIconType | Icon;
  heading: string;
  element: renderType;
}
