import React from "react";
import Logo from "Assets/logo.jpeg";
import Image from "next/image";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import { statevalueProvider } from "StateProvide/StateProvider";
import { stateawal } from "Reducer/const";

const Navbar = () => {
  const [{ app }, dispatch] = statevalueProvider();
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-5 lg:grid-cols-2 w-full fixed top-5 z-50">
        <div
          className="w-full flex justify-center items-center lg:hidden cursor-pointer"
          onClick={() => {
            dispatch({
              type: stateawal.STATE_AWAL,
              payload: !app,
            });
          }}
        >
          <MenuAlt2Icon className="w-10 h-10 text-gray-50" />
        </div>
        <div className="w-full flex justify-start lg:justify-center items-center col-span-4 lg:col-span-1">
          <Image src={Logo} width={40} height={40} alt="Logo Perusahaan" />
          <h1 className="text-gray-100 text-lg uppercase font-bold">Hatop</h1>
        </div>
        <ul className="w-full hidden lg:flex justify-evenly items-center text-gray-300">
          <li>About Us</li>
          <li>PortFolio</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
