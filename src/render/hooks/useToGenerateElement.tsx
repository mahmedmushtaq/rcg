import { useRecoilState } from "recoil";
import { addNewElementToWebState } from "../../common/helpers";
import { ToolItem } from "../../common/Tools";
import { webState } from "../../recoil";
import useToHandleFunctions from "./useToHandleFunctions";

const useToGenerateElement = () => {
  const functionsList = useToHandleFunctions();

  const [completeWebState, setWebState] = useRecoilState(webState);

  const onSelectTool = (tool: ToolItem) => {
    const newWebState = addNewElementToWebState(completeWebState!, {
      ...tool.element,
      ...functionsList,
    });
  //  setWebState(newWebState);
  };

  return {
    onSelectTool,
  };
};

export default useToGenerateElement;
