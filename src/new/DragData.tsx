import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import ContainerComponent from "./ContainerComponent";
import styled from "styled-components";
import StoreData from "./StoreData";
import Child1 from "./Child1";
import Child2 from "./Child2";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  // border-radius: 4px;
  cursor: move;
  &:hover {
    background: #eeeeee;
    border: 1px solid gray;
    border: doted;
  }
`;

const sortableOptions = {
  fallbackOnBody: true,
  swapThreshold: 0.65,
};

const DragData = () => {
  const [dragData, setDragData] = useState([
    {
      id: 1,
      type: "child",
      component: Child1,
    },

    {
      id: 3,
      type: "child",
      component: Child2,
    },
    {
      id: "2",
      component: ContainerComponent,
      type: "component",
      name: "component",
    },
  ]);

  const [newData, setNewData] = useState([]);

  return (
    <div className="flex w-full h-screen gap-3">
      <div className="w-1/3 border border-gray-600 m-3 p-3">
        <ReactSortable
          group={{
            name: "templates",
            pull: "clone" as "clone",
          }}
          list={dragData}
          setList={setDragData}
          {...sortableOptions}
        >
          {dragData.map((data, i) => {
            return (
              <StyledBlockWrapper key={i}>
                type: {data.type}
                {i}
              </StyledBlockWrapper>
            );
          })}
        </ReactSortable>
      </div>
      <div className=" w-full h-full border border-gray-600 m-3">
        <ReactSortable
          group={{
            name: "templates",
            pull: "clone" as "clone",
          }}
          list={newData}
          setList={setNewData}
          className="w-full h-full border border-emerald-500"
          {...sortableOptions}
        >
          <StoreData newData={newData} />
        </ReactSortable>
      </div>
    </div>
  );
};

export default DragData;
