import { webStateType } from "../../common/types";
import Render from "../../render";
import { websitePropsType as PropsType } from "./propType";
import useToWebsite from "./useToWebsite";

const Website = (props: PropsType) => {
  const { allElements } = useToWebsite();
  return (
    <div className="">
      <Render />
    </div>
  );
};

export default Website;
