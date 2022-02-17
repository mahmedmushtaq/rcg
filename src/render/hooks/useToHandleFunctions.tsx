import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { onDropElement, onStartDraggingElement } from "../../common/helpers";
import { elementRefType } from "../../common/Tools";
import { elementRefs, selectedElementState, websiteState } from "../../recoil";
import { renderWebComponentType } from "../types";

const useToHandleFunctions = () => {
  const [allElementRefs, setElementsRef] = useRecoilState(elementRefs);
  const setSelectedElement = useSetRecoilState(selectedElementState);
  const [webState, setWebState] = useRecoilState(websiteState);
  const [draggableElement, setDraggableElement] = useState<
    renderWebComponentType | undefined
  >();

  const [onDropParentEl, setOnDropParentEl] = useState<
    renderWebComponentType | undefined
  >();

  useEffect(() => {
    if (!draggableElement) return;
    const newWebState = onStartDraggingElement(webState, draggableElement);

    setWebState(newWebState);
  }, [draggableElement]);

  // useEffect(() => {
  //   if (!onDropParentEl) return;
  //   const newWebState = onDropElement(webState, {
  //     ...draggableElement!,
  //     parentId: draggableElement!.id,
  //   });

  //   setWebState(newWebState);

  //   setTimeout(() => {
  //     setDraggableElement(undefined);
  //     setOnDropParentEl(undefined);
  //   }, 100);
  // }, [onDropParentEl]);

  console.log("webState is ", webState);

  const addElementRef = (
    id: string,
    refElement: elementRefType<HTMLElement>
  ) => {
    const newElsRef = { ...allElementRefs };
    newElsRef[id] = refElement;
    setElementsRef({ ...newElsRef });
  };

  // const onClick = (el: renderElementType) => {
  //   setSelectedElement(el);
  // };

  // const onDragStart = (e: React.DragEvent, el: renderElementType) => {
  //   e.dataTransfer.setData("transfer_el", JSON.stringify(el));
  //   console.log(" =========== onDragStart ========== ", JSON.stringify(el));
  //   setDraggableElement(el);

  //   // startDragging();
  //   // remove this element from parentTree
  // };

  // const onDragOver = (e: React.DragEvent, el: renderElementType) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   console.log(" =========== onDragOver ========== ");
  // };

  // const onDrop = (e: React.DragEvent, parentEl: renderElementType) => {
  //   e.preventDefault();
  //   const el = e.dataTransfer.getData("transfer_el");
  //   // const transferEl = JSON.parse(el);
  //   setOnDropParentEl(parentEl);

  //   console.log(" =========== onDrop ========== ", webState);
  //   // add this element to parentEl

  //   // const card = document.getElementById(card_id);
  //   // e.target.appendChild(card);
  // };

  // return { addElementRef, onClick, onDragOver, onDragStart, onDrop };
  return {};
};

export default useToHandleFunctions;
