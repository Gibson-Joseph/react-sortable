import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactSortable } from "react-sortablejs";

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

const Container2 = ({ newDragData, setNewDragData }: any) => {
  const [ContainerData, setContainerData] = useState<any>([]);
  const [child, setChild] = useState<any>([]);
  console.log("ContainerData", ContainerData);

  useEffect(() => {
    setContainerData(newDragData);
  }, [newDragData]);
  console.log(child);

  return (
    <>
      {/* <ReactSortable list={ContainerData} setList={setContainerData}> */}
      <div className="h-[95vh] border border-gray-500 w-full p-5">
        {/* Container2 */}
        {ContainerData.length >= 1 &&
          ContainerData.map((data: any, i: any) => {
            return (
              <StyledBlockWrapper key={i}>
                {data.name}
                {<data.component />}
                {data.children &&
                  data.children.map((childData: any, i: number) => {
                    if (childData.type !== "component") {
                      return (
                        <ReactSortable list={child} setList={setChild}>
                          <StyledBlockWrapper key={i}>
                            item: {childData.name}
                          </StyledBlockWrapper>
                        </ReactSortable>
                      );
                    }
                  })}
              </StyledBlockWrapper>
            );
          })}
      </div>
      {/* </ReactSortable> */}
    </>
  );
};

export default Container2;
