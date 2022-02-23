import Render from "../../render";
import { websitePropsType as PropsType } from "./propType";
import useToWebsite from "./useToWebsite";

const Website = (props: PropsType) => {
  const { completeTreeState } = useToWebsite();
  console.log(
    " =================== completeTreeState is ================= ",
    completeTreeState
  );
  return (
    <div className="">
      {Object.keys(completeTreeState).map((key) => (
        <Render key={key} config={completeTreeState[key]} />
      ))}
    </div>
  );
};

export default Website;
