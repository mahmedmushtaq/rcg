import { FileText } from "react-feather";
import { ToolItem } from "..";
import { renderType } from "../../../render/types";

const paragraph: renderType = {
  component: "p",
  className: "",
  style: {},
  children: "Write something here....",
};

const Paragraph: ToolItem = {
  id: "add-paragraph",
  icon: FileText,
  heading: "Paragraph",
  element: paragraph,
};

export default Paragraph;
