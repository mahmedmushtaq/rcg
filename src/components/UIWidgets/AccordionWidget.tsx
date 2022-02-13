import { ReactChild, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { H2 } from ".";

interface PropsType {
  heading?: string;
  children: ReactChild | ReactChild[] | string;
  smallHeading?: boolean;
}

const AccordionWidget = ({ heading, children, smallHeading }: PropsType) => {
  const [showChildren, setShowChildren] = useState(false);

  const toggle = () => setShowChildren(!showChildren);

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <H2 className={smallHeading ? "!text-sm" : "!text-lg"}>{heading}</H2>
        {!showChildren ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </div>
      <div>{showChildren && children}</div>
    </div>
  );
};

export default AccordionWidget;
