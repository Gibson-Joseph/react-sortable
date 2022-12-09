import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const Inside = () => {
  const [block, setBlock] = useState([]);
  return (
    <>
      <ReactSortable list={block} setList={setBlock}>
        <div className="text-center my-3 border border-black">
          <h1 className="text-white bg-slate-600 text-center">
            Inside Component
          </h1>
          <div className="w-full h-[100px] border border-gray-600 m-3 border-dashed "></div>
        </div>
      </ReactSortable>
    </>
  );
};

export default Inside;
