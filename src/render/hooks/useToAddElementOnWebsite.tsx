import { useRecoilState } from "recoil";
import { elementedState } from "../../recoil";
import { websiteState } from "../../recoil/websiteState";
import { renderType } from "../types";

const useToAddElementOnWebsite = () => {
  const [webState, setWebState] = useRecoilState(websiteState);
  const [, setSelectedElement] = useRecoilState(elementedState);

  const setState = (element: renderType, completeWebState: renderType) => {
    setWebState(completeWebState);
    setSelectedElement(element);
  };

  const addElementToWebState = (element: renderType) => {
    const allElementsMap = { ...webState };
    const { children } = allElementsMap;
    type unionType = renderType | string;
    if (children) {
      let childArray: unionType[] = [];
      if (!Array.isArray(children)) {
        // children is not array, mean simple string
        childArray = [allElementsMap.children! as unionType];
      } else {
        // children is an array either renderType[] or string[]
        childArray = [...(allElementsMap.children as unionType[])];
      }
      (allElementsMap.children as unionType[]) = [...childArray, element];
    } else {
      allElementsMap.children = [element];
    }
    setState(element, { ...allElementsMap });
  };

  return { webState, addElementToWebState };
};

export default useToAddElementOnWebsite;
