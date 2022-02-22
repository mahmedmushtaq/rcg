import { useRecoilValue } from "recoil";
import { treeState } from "../../recoil";

const useToWebsite = () => {
  const completeTreeState = useRecoilValue(treeState);

  return { completeTreeState };
};

export default useToWebsite;
