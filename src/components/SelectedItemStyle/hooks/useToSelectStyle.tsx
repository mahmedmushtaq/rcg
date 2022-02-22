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

const useToSelectStyles = () => {
  const [selectedValues, setSelectedValues] = useState<dynamicStyleType>({});
  const [text, setText] = useState("");
  const originalRef = useRef<HTMLElement>();
  const [allComponentsData, setAllComponentsData] =
    useRecoilState(componentsData);

  const selectedItem = useRecoilValue(selectedElementState);
  const allRefs = useRecoilValue(elementRefs);
  const [currentRef, setCurrentRef] = useState<HTMLElement>();

  const onChange = (id: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValuesClone = { ...selectedValues };
    selectedValuesClone[id] = e.target.value;
    setSelectedValues({ ...selectedValuesClone });
  };

  useEffect(() => {
    let classesList: dynamicStyleType = {};
    if (selectedItem) {
      const thisItem = allComponentsData[selectedItem.id];
      const selectObj = { ...thisItem };
      selectObj.style = { background: "red" };
      setAllComponentsData({
        ...allComponentsData,
        [thisItem.id]: { ...selectObj },
      });

      // const ref = allRefs[selectedItem.id];
      // if (ref) {
      //   classesList = convertClassesToObj(ref.className);
      //   setCurrentRef(ref);
      //   originalRef.current = ref;
      //   ref.style.background = "red";
      // }
    }

    setSelectedValues(classesList);
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem || Object.keys(selectedValues).length === 0) return;

    const ref = allRefs[selectedItem.id];
    if (ref) {
      ref.className = convertObjToClasses(selectedValues);
    }
  }, [selectedValues]);

  useEffect(() => {
    if (originalRef.current) {
      //     originalRef.current.innerText = text;
    }
  }, [text]);

  return { onChange, selectedValues, setText, text };
};

export default useToSelectStyles;
