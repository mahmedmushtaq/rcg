import { useResetRecoilState, useSetRecoilState } from "recoil";
import { elementedState } from "../../recoil";

const useToSelectElement = () => {
  const setSelctedElement = useSetRecoilState(elementedState);

  return { setSelctedElement };
};

export default useToSelectElement;
