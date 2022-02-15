import { useRecoilState, useSetRecoilState } from "recoil";
import { elementRefType } from "../../common/Tools";
import { elementRefs, selectedElementState } from "../../recoil";
import { renderElementType } from "../types";

const useToHandleFunctions = () => {
  const [allElementRefs, setElementsRef] = useRecoilState(elementRefs);
  const setSelectedElement = useSetRecoilState(selectedElementState);

  const addElementRef = (
    id: string,
    refElement: elementRefType<HTMLElement>
  ) => {
    const newElsRef = { ...allElementRefs };
    if (!newElsRef[id]) {
      newElsRef[id] = refElement;
    }

    console.log("newElsRef is ", newElsRef);
    setElementsRef({ ...newElsRef });
  };

  const onClick = (el: renderElementType) => {
    setSelectedElement(el);
  };

  const onDragStart = (e: React.DragEvent, el: renderElementType) => {
    e.dataTransfer.setData("transfer_el", JSON.stringify(el));
    console.log(" =========== onDragStart ========== ", JSON.stringify(el));
    // remove this element from parentTree
  };

  const onDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(" =========== onDragOver ========== ");
  };

  const onDrop = (e: React.DragEvent, parentEl: renderElementType) => {
    e.preventDefault();
    const el = e.dataTransfer.getData("transfer_el");
    const transferEl = JSON.parse(el);

    console.log(" =========== onDrop ========== ", transferEl);
    // add this element to parentEl

    // const card = document.getElementById(card_id);
    // e.target.appendChild(card);
  };

  return { addElementRef, onClick, onDragOver, onDragStart, onDrop };
};

export default useToHandleFunctions;
