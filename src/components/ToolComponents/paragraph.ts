import { FileText } from "react-feather";
import { ToolItem } from "../../common/Tools/types";
import { renderElementType } from "../../render/types";

const paragraph: renderElementType = {
  component: "p",
  className: "",
  style: {},
  id: "add-paragraph",
  children: "Write something here....",
};

const Paragraph: ToolItem = {
  icon: FileText,
  heading: "Paragraph",
  element: paragraph,
};

export default Paragraph;
