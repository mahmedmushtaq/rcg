import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { onDropElement, onStartDraggingElement } from "../../common/helpers";
import { elementRefType } from "../../common/Tools";
import { newWebStateType } from "../../common/types";
import {
  componentsData,
  elementRefs,
  selectedElementState,
  treeState,
} from "../../recoil";

const useToHandleFunctions = () => {
  const [allElementRefs, setElementsRef] = useRecoilState(elementRefs);
  const setSelectedElement = useSetRecoilState(selectedElementState);
  const [allComponentsData, setAllComponentsData] =
    useRecoilState(componentsData);
  // const setWebState = useSetRecoilState(webState);
  const [allTreeState, setTreeState] = useRecoilState(treeState);

  //  const [webState, setWebState] = useRecoilState(websiteState);
  const [draggableElement, setDraggableElement] = useState<
    newWebStateType | undefined
  >();

  const [onDropParentEl, setOnDropParentEl] = useState<
    newWebStateType | undefined
  >();

  useEffect(() => {
    if (!onDropParentEl || !draggableElement) return;
    (async () => {
      const componentNewId = Math.random() + "";
      const newTreeState = await onDropElement(
        allTreeState,
        {
          ...draggableElement!,
        },
        {
          newParentId: onDropParentEl!.id,
          componentNewId,
        }
      );

      //  const firstKey = Object.keys(newTreeState)[0];

      setAllComponentsData({
        ...allComponentsData,
        [componentNewId]: {
          ...draggableElement.data,
        },
      });
      setTreeState({ ...newTreeState });

      //   setWebState(newTreeState[firstKey]);

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
    console.log(" =========== onDragStart ========== ");
    setDraggableElement(completeElState);
  };

  const onDragOver = (e: React.DragEvent, completeElState: newWebStateType) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(" =========== onDragOver ========== ");
  };

  const onDrop = (e: React.DragEvent, completeParentEl: newWebStateType) => {
    e.preventDefault();

    console.log(" =================== on dropped ================= ");

    setOnDropParentEl(completeParentEl);
  };

  return { onClick, addElementRef, onDragStart, onDrop, onDragOver };
};

export default useToHandleFunctions;
