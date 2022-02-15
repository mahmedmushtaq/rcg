import { useRecoilState } from "recoil";
import { addNewElementToWebState } from "../../common/helpers";
import { ToolItem } from "../../common/Tools";
import { websiteState } from "../../recoil";
import useToHandleFunctions from "./useToHandleFunctions";

const useToGenerateElement = () => {
  const functionsList = useToHandleFunctions();

  const [webState, setWebState] = useRecoilState(websiteState);

  const onSelectTool = (tool: ToolItem) => {
    const completeWebState = addNewElementToWebState(webState, {
      ...tool.element,
      ...functionsList,
    });
    setWebState(completeWebState);
  };

  return {
    onSelectTool,
  };
};

export default useToGenerateElement;
