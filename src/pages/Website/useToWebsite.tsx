import { useRecoilValue } from "recoil";
import { webState as completeWebState } from "../../recoil";

const useToWebsite = () => {
  const allElements = useRecoilValue(completeWebState);

  return { allElements };
};

export default useToWebsite;
