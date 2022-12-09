import React, { useState } from "react";

const StoreData = ({ newData }: any) => {
  console.log("newData", newData);
  const [data, setData] = useState<any>([]);
  return (
    <div className="w-full h-1/2 p-4 gap-y-3">
      <span className="text-gray-500">Drag & Drope Here</span>
      {newData.length !== 0 &&
        newData.map((renderData: any) => {
          return <renderData.component />;
        })}
    </div>
  );
};

export default StoreData;
