import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { onDropElement, onStartDraggingElement } from "../../common/helpers";
import { elementRefType } from "../../common/Tools";
import { newWebStateType } from "../../common/types";
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
    newWebStateType | undefined
  >();

  const [onDropParentEl, setOnDropParentEl] = useState<
    newWebStateType | undefined
  >();

  useEffect(() => {
    if (!onDropParentEl) return;
    (async () => {
      const newTreeState = await onDropElement(
        allTreeState,
        {
          ...draggableElement!,
        },
        onDropParentEl!.id
      );

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

  const onClick = (completeElState: newWebStateType) => {
    console.log("onClick occured ", completeElState);
    setSelectedElement(completeElState.data);
  };

  const onDragStart = (
    e: React.DragEvent,
    completeElState: newWebStateType
  ) => {
    //@ts-ignore
    e.dataTransfer.setData("transfer_el", e.target.id);

    //  console.log(" =========== onDragStart ========== ", e.target.id);
    setDraggableElement(completeElState);
  };

  const onDragOver = (e: React.DragEvent, completeElState: newWebStateType) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(" =========== onDragOver ========== ");
  };

  const onDrop = (e: React.DragEvent, completeParentEl: newWebStateType) => {
    e.preventDefault();

    setOnDropParentEl(completeParentEl);
  };

  // return { addElementRef, onClick, onDragOver, onDragStart, onDrop };
  return { onClick, addElementRef, onDragStart, onDrop, onDragOver };
};

export default useToHandleFunctions;
