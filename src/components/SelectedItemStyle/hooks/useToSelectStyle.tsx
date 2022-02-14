import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  convertClassesToObj,
  convertObjToClasses,
} from "../../../common/helpers";
import { dynamicStyleType } from "../../../common/types";
import { elementRefs, selectedElementState } from "../../../recoil";

const useToSelectStyles = () => {
  const [selectedValues, setSelectedValues] = useState<dynamicStyleType>({});

  const selectedItem = useRecoilValue(selectedElementState);
  const selectedEl = useRecoilValue(elementRefs);

  const onChange = (id: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValuesClone = { ...selectedValues };
    selectedValuesClone[id] = e.target.value;
    setSelectedValues({ ...selectedValuesClone });
  };

  useEffect(() => {
    let classesList: dynamicStyleType = {};
    if (selectedItem) {
      const ref = selectedEl[selectedItem.id];
      classesList = convertClassesToObj(ref.className);
    }

    setSelectedValues(classesList);
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem || Object.keys(selectedValues).length === 0) return;

    const ref = selectedEl[selectedItem.id];
    ref.className = convertObjToClasses(selectedValues);
  }, [selectedValues]);

  return { onChange, selectedValues };
};

export default useToSelectStyles;
