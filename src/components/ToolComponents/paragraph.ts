import { FileText } from "react-feather";
import { ToolItem } from "../../common/Tools/types";
import { elementType } from "../../render/types";

const paragraph: elementType = {
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
