import React from "react";
import { statevalueProvider } from "StateProvide/StateProvider";
import { stateawal } from "Reducer";
import Gradient from "rgt";
import { Diamond, Donut, SquareDonut } from "react-awesome-shapes";

const HomePage = () => {
  return (
    <div className="w-full overflow-y-auto">
      <div className="w-full h-1/2 mt-10 flex flex-col justify-evenly items-center text-8xl font-bold text-gray-100 relative">
        <Diamond
          color="linear-gradient(135deg, #F06BF2, #F06BF2)"
          size="80px"
          zIndex={2}
          left="15%"
          top="17%"
        />
        <Donut
          color="#F06BF2"
          size="100px"
          width={["20px", "20px", "40px", "40px"]}
          zIndex={2}
          left="26%"
          bottom="15%"
        />
        <h1>We Give The Best For</h1>
        <h1>
          Your{" "}
          <span>
            <Gradient dir="left-to-right" from="#F06BF2" to="#F06BF2">
              Project
            </Gradient>
          </span>
        </h1>
        <SquareDonut
          size="150px"
          zIndex={2}
          color="#F06BF2"
          right="15%"
          top="4%"
        />
        <Diamond
          color="linear-gradient(135deg, #F06BF2, #F06BF2)"
          size="80px"
          zIndex={2}
          right="27%"
          bottom="15%"
        />
      </div>
      <div className="w-full flex justify-center items-center h-[15%]">
        <button className="rounded-lg w-32 h-14 text-gray-100  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HomePage;
