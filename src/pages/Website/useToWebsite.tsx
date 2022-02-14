import { useRecoilValue } from "recoil";
import { websiteState } from "../../recoil";

const useToWebsite = () => {
  const allElements = useRecoilValue(websiteState);

  return { allElements };
};

export default useToWebsite;
