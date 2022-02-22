import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { addNewElementToWebState } from "../../common/helpers";
import { ToolItem } from "../../common/Tools";
import { componentsData, treeState } from "../../recoil";
import useToHandleFunctions from "./handlers/useToHandleFunctions";

const useToGenerateElement = () => {
  const functionsList = useToHandleFunctions();
  const [allComponentsData, setAllComponentsData] =
    useRecoilState(componentsData);
  const [allTreeState, setTreeState] = useRecoilState(treeState);

  const onSelectTool = async (tool: ToolItem) => {
    const newTreeState = await addNewElementToWebState(allTreeState, {
      ...tool.element,
      ...functionsList,
    });

    console.log("new tree state is ", newTreeState);

    //  const firstKey = Object.keys(newTreeState)[0];

    setAllComponentsData({
      ...allComponentsData,
      [tool.element.id]: {
        ...tool.element,
        ...functionsList,
      },
    });
    setTreeState({ ...newTreeState });

    //  setWebState(newTreeState[firstKey]);

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
