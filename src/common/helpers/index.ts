import { renderWebComponentType } from "../../render/types";
import { dynamicStyleType, webStateType } from "../types";

export * from "./webStateHelpers";

export const generateElementUniqueId = (originalId: string | number) =>
  originalId + "-" + Math.random();

export const convertClassesToObj = (className: string) => {
  const classesList: { [key: string]: string } = {};
  className.split(" ").map((cls) => {
    if (!cls) return "";
    if (cls.includes("-")) {
      const key = cls.split("-")[0];
      classesList[key] = cls;
    }
  });

  return classesList;
};

export const convertObjToClasses = (selectedValues: dynamicStyleType) => {
  const finalClassNameString = Object.keys(selectedValues).reduce(
    (prevValue, currentValue) =>
      (prevValue += " " + selectedValues[currentValue]),
    ""
  );

  return finalClassNameString;
};
