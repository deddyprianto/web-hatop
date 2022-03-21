import React from "react";
import Navbar from "../ChildComponent/Navbar";
import { statevalueProvider } from "StateProvide/StateProvider";
import ModalSlide from "components/ChildComponent/Modal/ModalSlide";

const Parent = ({ children }) => {
  const [{ app }, dispatch] = statevalueProvider();
  return (
    <div className="w-full grid grid-rows-8 bg-[#162447] h-screen">
      <Navbar />
      {children}
      {app && <ModalSlide />}
    </div>
  );
};

export default Parent;
