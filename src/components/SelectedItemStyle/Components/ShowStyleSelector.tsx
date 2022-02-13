import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { paddingSizeLists, textSizeList } from "../../../common/tailwind";
import { elementRefs, selectedElementState } from "../../../recoil";
import { Selector } from "../../UIWidgets";
import { styleList } from "../styleList";

const ShowStyleSelector = () => {
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});

  const selectedItem = useRecoilValue(selectedElementState);
  const selectedEl = useRecoilValue(elementRefs);

  const onChange = (id: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValuesClone = { ...selectedValues };
    selectedValuesClone[id] = e.target.value;
    setSelectedValues({ ...selectedValuesClone });
  };

  useEffect(() => {
    setSelectedValues({});
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem || Object.keys(selectedValues).length === 0) return;

    const finalClassNameString = Object.keys(selectedValues).reduce(
      (prevValue, currentValue) =>
        (prevValue += " " + selectedValues[currentValue]),
      ""
    );

    const ref = selectedEl[selectedItem.id];
    ref.className = finalClassNameString;
  }, [selectedValues]);

  return (
    <div>
      {styleList.map((style) => (
        <div className="my-1" key={style.id}>
          <Selector
            list={style.list}
            lists={style.lists}
            heading={style.heading}
            listHeading={style.listHeading}
            value={selectedValues[style.id]}
            id={style.id}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowStyleSelector;
