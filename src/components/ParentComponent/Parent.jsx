import React from "react";
import Navbar from "./Navbar";

const Parent = ({ children }) => {
  return (
    <div className="w-full grid grid-rows-8 bg-[#162447] h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Parent;
