import { useRecoilValue } from "recoil";
import { webState as completeWebState, elementedState } from "../../recoil";

const useToWebsite = () => {
  const allElements = useRecoilValue(completeWebState);
  const selectedElement = useRecoilValue(elementedState);
  return { allElements, selectedElement };
};

export default useToWebsite;
