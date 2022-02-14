import { webStateType } from "../../common/types";
import Render from "../../render";
import { renderElementType } from "../../render/types";
import { websitePropsType as PropsType } from "./propType";
import useToWebsite from "./useToWebsite";

const Website = (props: PropsType) => {
  const { allElements } = useToWebsite();
  return (
    <div className="">
      {Object.keys(allElements).map((item) => (
        <Render config={allElements[item]} />
      ))}
    </div>
  );
};

export default Website;
