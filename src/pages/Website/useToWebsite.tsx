import { useRecoilValue } from "recoil";
import { webState } from "../../recoil";

const useToWebsite = () => {
  const allElements = useRecoilValue(webState);

  return { allElements };
};

export default useToWebsite;
