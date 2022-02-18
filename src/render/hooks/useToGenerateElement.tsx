import { useRecoilState } from "recoil";
import { addNewElementToWebState } from "../../common/helpers";
import { ToolItem } from "../../common/Tools";
import { webState, treeState } from "../../recoil";
import useToHandleFunctions from "./useToHandleFunctions";

const useToGenerateElement = () => {
  const functionsList = useToHandleFunctions();

  const [completeWebState, setWebState] = useRecoilState(webState);
  const [allTreeState, setTreeState] = useRecoilState(treeState);

  const onSelectTool = async (tool: ToolItem) => {
    const newTreeState = await addNewElementToWebState(allTreeState, {
      ...tool.element,
      ...functionsList,
    });

    const firstKey = Object.keys(newTreeState)[0];

    setTreeState({ ...newTreeState });

    setWebState(newTreeState[firstKey]);

    // const newWebState = await addNewElementToWebState(allTreeState, {
    //   ...tool.element,
    //   ...functionsList,
    // });

    // setWebState(newWebState);
  };

  return {
    onSelectTool,
  };
};

export default useToGenerateElement;
