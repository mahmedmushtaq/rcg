import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  convertClassesToObj,
  convertObjToClasses,
} from "../../../common/helpers";
import { dynamicStyleType } from "../../../common/types";
import {
  componentsData,
  elementRefs,
  selectedElementState,
} from "../../../recoil";
import { renderWebComponentType } from "../../../render/types";

const useToSelectStyles = () => {
  const [selectedValues, setSelectedValues] = useState<dynamicStyleType>({});
  const [text, setText] = useState("");
  const originalRef = useRef<HTMLElement>();
  // this is used to maintain local selectedItem state
  const [currentSelectedItem, setCurrentSelectedItem] =
    useState<renderWebComponentType>();
  const [allComponentsData, setAllComponentsData] =
    useRecoilState(componentsData);

  const selectedItem = useRecoilValue(selectedElementState);

  const allRefs = useRecoilValue(elementRefs);

  const onChange = (id: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValuesClone = { ...selectedValues };
    selectedValuesClone[id] = e.target.value;
    setSelectedValues({ ...selectedValuesClone });
  };

  const updateItem = (
    property: { className?: string; child?: string } = {}
  ) => {
    setCurrentSelectedItem({ ...currentSelectedItem!, ...property });
  };

  useEffect(() => {
    let classesList: dynamicStyleType = {};
    let childText: string = "";
    if (selectedItem) {
      const thisItem = allComponentsData[selectedItem.id];
      const selectObj = { ...thisItem };
      setCurrentSelectedItem(selectObj);
      classesList = convertClassesToObj(selectObj.className) || {};
      childText = selectObj.child;
    }

    setSelectedValues(classesList);
    setText(childText);
  }, [selectedItem]);

  console.log(
    "============== selected item is ============== ",
    selectedItem,
    allComponentsData
  );

  useEffect(() => {
    if (!currentSelectedItem) return;
    setAllComponentsData({
      ...allComponentsData,
      [currentSelectedItem.id]: { ...currentSelectedItem },
    });
  }, [currentSelectedItem]);

  useEffect(() => {
    if (!currentSelectedItem || Object.keys(selectedValues).length === 0)
      return;

    const className = convertObjToClasses(selectedValues);
    updateItem({ className });
  }, [selectedValues]);

  const onChangetext = (e: React.ChangeEvent<HTMLInputElement>) => {
    const child = e.target.value;
    setText(child);
    updateItem({ child });
  };

  return { onChange, onChangetext, text, selectedValues };
};

export default useToSelectStyles;
