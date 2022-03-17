import React from "react";
import Logo from "Assets/logo.jpeg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 w-full fixed top-5 z-50">
        <div className="w-full flex justify-center items-center">
          <Image src={Logo} width={90} height={50} alt="Logo Perusahaan" />
          <h1 className="text-gray-100 text-lg uppercase font-bold">Hatop</h1>
        </div>
        <ul className="w-full flex justify-evenly items-center text-gray-300">
          <li>About Us</li>
          <li>PortFolio</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
