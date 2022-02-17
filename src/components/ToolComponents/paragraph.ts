import { FileText } from "react-feather";
import { defaultValues } from "../../common/enums";
import { ToolItem } from "../../common/Tools/types";
import { renderWebComponentType } from "../../render/types";

const paragraph: renderWebComponentType = {
  component: "p",
  className: "",
  style: {},
  id: "paragraph",
  child: "Write your text here ....",
  parentId: defaultValues.parentId,
  //children: "Write something here....",
  draggable: true,
};

const Paragraph: ToolItem = {
  icon: FileText,
  heading: "Paragraph",
  element: paragraph,
};

export default Paragraph;
