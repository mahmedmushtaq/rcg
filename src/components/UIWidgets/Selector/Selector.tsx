import React from "react";
import AccordionWidget from "../AccordionWidget";
import { H2, H3 } from "../index";
import { SelectorPropsType } from "./type";

const Selector = ({
  list,
  value,
  heading,
  onChange,
  onChangeValue,
  smallHeading,
  id,
  noAccordion = false,
}: SelectorPropsType) => {
  const selectOptions = (
    <select
      onChange={(e) => {
        if (onChange) {
          onChange(id, e);
        }
        if (onChangeValue) {
          onChangeValue(e.target.value);
        }
      }}
      value={value || ""}
      className="mt-1 p-2 flex-1"
    >
      <option value="">Select Option</option>

      {list?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );

  return (
    <div className="mt-1">
      {noAccordion && heading && (
        <H2 className={smallHeading ? "!text-sm" : "!text-lg"}>{heading}</H2>
      )}
      {!noAccordion ? (
        <AccordionWidget heading={heading} smallHeading={smallHeading}>
          <div className="flex">{selectOptions}</div>
        </AccordionWidget>
      ) : (
        selectOptions
      )}
    </div>
  );
};

export default Selector;
