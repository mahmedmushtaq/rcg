import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { paddingSizeLists, textSizeList } from "../../../common/tailwind";
import { dynamicStyleType } from "../../../common/types";
import { elementRefs, selectedElementState } from "../../../recoil";
import { Selector } from "../../UIWidgets";
import { styleList } from "../styleList";

interface PropsType {
  onChange: (id: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedValues: dynamicStyleType;
}

const ShowStyleSelector = ({ onChange, selectedValues }: PropsType) => {
  return (
    <div>
      {styleList.map((style) => (
        <div className="my-1" key={style.id}>
          <Selector
            key={style.id}
            list={style.list}
            lists={style.lists}
            heading={style.heading}
            listHeading={style.listHeading}
            value={selectedValues}
            id={style.id}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowStyleSelector;
