import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { H2 } from "..";
import AccordionWidget from "../AccordionWidget";
import Selector from "./Selector";
import { GenericSelectorPropsType } from "./type";

const GenericSelector = (props: GenericSelectorPropsType) => {
  return (
    <div>
      {!props.lists ? (
        <Selector {...props} value={props.value ? props.value[props.id] : ""} />
      ) : (
        <div className="mt-2">
          <AccordionWidget heading={props.listHeading}>
            <div className="grid grid-cols-2 gap-4">
              {props.lists?.map((list, index) => (
                <Selector
                  {...props}
                  key={list.id}
                  id={list.id}
                  list={list.list}
                  smallHeading
                  value={props.value ? props.value[list.id] : ""}
                  heading={list.heading}
                  noAccordion
                />
              ))}
            </div>
          </AccordionWidget>

          {/* <div
            className="flex items-center my-2 justify-between cursor-pointer"
            onClick={toggle}
          >
            <H2 className="!text-lg"> {props.listHeading!}</H2>
            {!showLists ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default GenericSelector;
