import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { statevalueProvider } from "StateProvide/StateProvider";
import { stateawal } from "Reducer/const";

const ModalSlide = () => {
  const [{ app }, dispatch] = statevalueProvider();

  return (
    <div className="scale-up-ver-center h-screen bg-slate-900 w-screen absolute top-0 z-50">
      <div className="w-full flex justify-end items-center">
        <XIcon
          className="w-10 h-10 text-gray-50"
          onClick={() =>
            dispatch({
              type: stateawal.STATE_AWAL,
              payload: !app,
            })
          }
        />
      </div>
      <ul className="w-full h-full flex flex-col justify-evenly items-center text-gray-300">
        <li>About Us</li>
        <li>PortFolio</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default ModalSlide;
