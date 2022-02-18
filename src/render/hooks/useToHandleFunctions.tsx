import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { onDropElement, onStartDraggingElement } from "../../common/helpers";
import { elementRefType } from "../../common/Tools";
import {
  elementRefs,
  selectedElementState,
  webState,
  treeState,
} from "../../recoil";
import { renderWebComponentType } from "../types";

const useToHandleFunctions = () => {
  const [allElementRefs, setElementsRef] = useRecoilState(elementRefs);
  const setSelectedElement = useSetRecoilState(selectedElementState);
  const setWebState = useSetRecoilState(webState);
  const [allTreeState, setTreeState] = useRecoilState(treeState);

  //  const [webState, setWebState] = useRecoilState(websiteState);
  const [draggableElement, setDraggableElement] = useState<
    renderWebComponentType | undefined
  >();

  const [onDropParentEl, setOnDropParentEl] = useState<
    renderWebComponentType | undefined
  >();

  useEffect(() => {
    if (!draggableElement) return;
    // const newWebState = onStartDraggingElement(allTreeState, draggableElement);

    // setWebState(newWebState);
  }, [draggableElement]);

  useEffect(() => {
    if (!onDropParentEl) return;
    (async () => {
      const newTreeState = await onDropElement(allTreeState, {
        ...draggableElement!,
        parentId: onDropParentEl!.id,
      });

      const firstKey = Object.keys(newTreeState)[0];

      setTreeState({ ...newTreeState });

      setWebState(newTreeState[firstKey]);

      setTimeout(() => {
        setDraggableElement(undefined);
        setOnDropParentEl(undefined);
      }, 100);
    })();
  }, [onDropParentEl]);

  const addElementRef = (
    id: string,
    refElement: elementRefType<HTMLElement>
  ) => {
    const newElsRef = { ...allElementRefs };
    newElsRef[id] = refElement;
    setElementsRef({ ...newElsRef });
  };

  const onClick = (el: renderWebComponentType) => {
    console.log("onClick occured ", el);
    setSelectedElement(el);
  };

  const onDragStart = (e: React.DragEvent, el: renderWebComponentType) => {
    e.dataTransfer.setData("transfer_el", JSON.stringify(el));
    console.log(" =========== onDragStart ========== ", JSON.stringify(el));
    setDraggableElement(el);

    // startDragging();
    // remove this element from parentTree
  };

  const onDragOver = (e: React.DragEvent, el: renderWebComponentType) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(" =========== onDragOver ========== ");
  };

  const onDrop = (e: React.DragEvent, parentEl: renderWebComponentType) => {
    e.preventDefault();
    const el = e.dataTransfer.getData("transfer_el");

    console.log("paren tel is ", parentEl);
    // const transferEl = JSON.parse(el);
    setOnDropParentEl(parentEl);

    // console.log(" =========== onDrop ========== ", webState);
    // add this element to parentEl

    // const card = document.getElementById(card_id);
    // e.target.appendChild(card);
  };

  // return { addElementRef, onClick, onDragOver, onDragStart, onDrop };
  return { onClick, addElementRef, onDragStart, onDrop, onDragOver };
};

export default useToHandleFunctions;
