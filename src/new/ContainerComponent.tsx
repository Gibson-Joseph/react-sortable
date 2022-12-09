import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const sortableOptions = {
  fallbackOnBody: true,
  swapThreshold: 0.65,
};

const ContainerComponent = () => {
  const [block, setBlock] = useState([]);
  console.log("block", block);

  return (
    <>
      <div className="w-full h-full my-2">
        <header className="bg-slate-700/100 text-red-200/100 w-full">
          <ul className="list-none flex justify-between items-center w-full px-3 py-2">
            <li>Me</li>
            <li>Home</li>
            <li>About</li>
          </ul>
        </header>
        <h1>ContainerComponent</h1>
        <div className=" h-4/5 border border-gray-500 border-dotted p-2 overflow-hidden overflow-y-scroll py-3">
          <h6>Drag Here :)</h6>
          <hr className="border border-dotted" />
          <ReactSortable
            list={block}
            setList={setBlock}
            {...sortableOptions}
            group={{
              name: "templates",
              pull: "clone" as "clone",
            }}
            className="h-full my-3"
          >
            <div className="my-2">
              {block.length !== 0 &&
                block.map((data: any, i) => {
                  return <data.component />;
                })}
            </div>
          </ReactSortable>
        </div>
      </div>
    </>
  );
};

export default ContainerComponent;
