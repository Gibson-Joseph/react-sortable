import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import Container2 from "./Container2";
import Inside from "./Inside";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
  &:hover {
    //background: #eeeeee;
  }
`;

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "copy",
  pull: "clone",
  // put: false,
};

const Container1 = () => {
  const [dragData, setDragData] = useState([
    {
      id: 1,
      name: "item 1",
      type: "child",
    },
    {
      id: 2,
      name: "item 2",
      type: "child",
    },
    {
      id: 3,
      name: "item 3",
      type: "child",
    },
    {
      id: 4,
      name: "container",
      type: "component",
      component: Inside,
      children: [],
    },
  ]);

  const [newDragData, setNewDragData] = useState<any>([]);
  return (
    <div className="h-[95vh] border border-gray-500 w-full p-3 flex">
      <div className="w-1/3 p-5">
        <ReactSortable
          list={dragData}
          setList={setDragData}
          {...sortableOptions}
        >
          {dragData.map((block, index) => {
            return (
              <DragComponent
                key={block.id}
                block={block}
                blockIndex={index}
                setDragData={setDragData}
              />
            );
          })}
        </ReactSortable>
      </div>

      <div className="w-full p-5">
        <ReactSortable
          list={newDragData}
          setList={(currentList: any) => {
            // console.log("currentList", currentList);
            if (currentList.length !== 0) {
              if (currentList[0].type === "component") {
                setNewDragData(currentList);
                setDragData(dragData);
              } else if (currentList[0]) {
                setNewDragData((prevState: any) => [
                  {
                    ...prevState[0],
                    children: [...prevState[0].children, ...currentList],
                  },
                ]);
                setDragData(dragData);
              } else {
                return null;
              }
            }
          }}
          {...sortableOptions}
        >
          <Container2
            newDragData={newDragData}
            setNewDragData={setNewDragData}
          />
        </ReactSortable>
      </div>
    </div>
  );
};

export default Container1;

const DragComponent = ({ block, blockIndex, setDragData }: any) => {
  return (
    <>
      <StyledBlockWrapper>content : {block.name}</StyledBlockWrapper>
    </>
  );
};

const Container = ({ block, blockIndex, setDragData }: any) => {
  return (
    <>
      <ReactSortable></ReactSortable>
    </>
  );
};
