import { useRecoilValue } from "recoil";
import { elementedState } from "../../recoil";
import { websiteState } from "../../recoil/websiteState";

import { websitePropsType as PropsType } from "./propType";

const useToWebsite = () => {
  const allElements = useRecoilValue(websiteState);
  const selectedElement = useRecoilValue(elementedState);

  console.log("selectedElement is ", selectedElement);

  return { allElements };
};

export default useToWebsite;
