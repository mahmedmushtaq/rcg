import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { onDropElement } from "../../../common/helpers";
import { elementRefType } from "../../../common/Tools";
import { elementCompleteState } from "../../../common/types";
import {
  componentsData,
  elementRefs,
  selectedElementState,
  treeState,
} from "../../../recoil";
import { renderWebComponentType } from "../../types";

const useToHandleDragAndDrop = () => {
  const allComponentsData = useRecoilValue(componentsData);
  const [allTreeState, setTreeState] = useRecoilState(treeState);
  const [draggableElement, setDraggableElement] = useState<
    elementCompleteState | undefined
  >();

  const [onDropParentEl, setOnDropParentEl] = useState<
    elementCompleteState | undefined
  >();

  useEffect(() => {
    if (!onDropParentEl || !draggableElement) return;
    (async () => {
      const elementData: renderWebComponentType = {
        ...allComponentsData[draggableElement.id],
      };

      const newTreeState = await onDropElement(
        allTreeState,
        {
          ...draggableElement!,
          data: {
            ...elementData,
          },
        },
        onDropParentEl!.id
      );

      setTreeState({ ...newTreeState });

      setTimeout(() => {
        setDraggableElement(undefined);
        setOnDropParentEl(undefined);
      }, 100);
    })();
  }, [onDropParentEl]);

  const onDragStart = (
    e: React.DragEvent,
    completeElState: elementCompleteState
  ) => {
    console.log(" =========== onDragStart ========== ");
    setDraggableElement(completeElState);
  };

  const onDragOver = (
    e: React.DragEvent,
    completeElState: elementCompleteState
  ) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(" =========== onDragOver ========== ");
  };

  const onDrop = (
    e: React.DragEvent,
    completeParentEl: elementCompleteState
  ) => {
    e.preventDefault();

    console.log(" =================== on dropped ================= ");

    setOnDropParentEl(completeParentEl);
  };

  return { onDragStart, onDrop, onDragOver };
};

export default useToHandleDragAndDrop;
