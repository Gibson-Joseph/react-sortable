import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";

const Parent = () => {
  return (
    <div className="flex gap-5 m-5">
      <Container1 />
      {/* <Container2 /> */}
    </div>
  );
};

export default Parent;
