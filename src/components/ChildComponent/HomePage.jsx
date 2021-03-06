import React, { useEffect } from "react";
import Gradient from "rgt";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Diamond, Donut, SquareDonut, CircleGrid } from "react-awesome-shapes";
import Image from "next/image";
import ImageOne from "Assets/deve1.jpg";
import ImageTwo from "Assets/deve2.jpg";
import ImageThree from "Assets/deve3.jpg";
import ImageFour from "Assets/deve4.jpg";
import Wa from "Assets/wa.png";
import Gmail from "Assets/gmail.png";
import Tele from "Assets/tele.png";
import Slideshow from "./Slide/Slideshow";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      <div
        data-aos="fade-up"
        className="w-full h-2/3 flex flex-col justify-center lg:justify-evenly items-center font-bold text-gray-100 relative"
      >
        <h1 className="text-5xl lg:text-8xl text-center ">
          We Give The Best For
        </h1>
        <h1 className="text-5xl lg:text-8xl mt-4">
          Your{" "}
          <span>
            <Gradient dir="left-to-right" from="#F06BF2" to="#F06BF2">
              Project
            </Gradient>
          </span>
        </h1>
        <Diamond
          color="linear-gradient(135deg, #F06BF2, #F06BF2)"
          size={["30px", "100px", "100px", "50px"]}
          zIndex={2}
          left={["5%", "10%", "10%", "10%"]}
          top={["5%", "15%", "40%", "10%"]}
        />
        <Diamond
          color="linear-gradient(135deg, #F06BF2, #F06BF2)"
          size={["30px", "60px", "60px", "60px"]}
          zIndex={2}
          right={["5%", "20%", "20%", "20%"]}
          bottom={["5%", "15%", "30%", "12%"]}
        />
        <Donut
          color="#F06BF2"
          size={["120px", "100px", "100px", "100px"]}
          width="20px"
          zIndex={2}
          left={["-14%", "26%", "30%", "15%"]}
          bottom={["0", "1%", "1%", "15%"]}
        />
        <SquareDonut
          size={["50px", "110px", "110px", "90px"]}
          zIndex={2}
          color="#F06BF2"
          right={["5%", "1%", "10%", "6%"]}
          top={["10%", "4%", "30%", "10%"]}
        />
      </div>
      {/* button Contact */}
      <div
        className="w-full flex justify-center items-center h-1/3"
        data-aos="fade-up"
      >
        <button className="text-sm rounded-lg w-32 h-14 text-gray-200  bg-gradient-to-r from-indigo-500 to-pink-500">
          Contact Us
        </button>
      </div>
      {/* column baris */}
      <div className="w-full text-gray-100 h-3/5 flex flex-col mt-10">
        <div className="w-full relative flex justify-center items-center h-1/2">
          <Donut
            color="#F06BF2"
            size={["100px", "100px", "100px", "200px"]}
            width="20px"
            zIndex={2}
            left={["-15%", "26%", "30%", "-8%"]}
            top={["1%", "15%", "15%", "1%"]}
          />
          <h1 className="text-center text-2xl">About Us</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 mt-5">
          <div className="w-full text-gray-100 flex flex-col items-center justify-center">
            <div className="w-full lg:w-1/2 lg:p-10 p-2 text-gray-200">
              <h1 className="mb-3 text-xl lg:text-4xl">Who Are you ?</h1>
              <p className="text-sm lg:text-lg leading-relaxed">
                hatop web is a service provider website located in the city of
                Medan and has several teams who are experts in their fields and
                have worked on several projects
              </p>
              <button className="mt-2 rounded-lg text-sm lg:text-lg p-2 lg:w-32 lg:h-14  text-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500">
                Read More
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col justify-evenly items-center h-full">
            <div className="flex flex-col justify-center items-center w-full relative">
              <h1 className="text-5xl">12</h1>
              <p className="text-xl">Clients</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-5xl">15</h1>
              <p className="text-xl">Project Finished</p>
            </div>
          </div>
        </div>
      </div>
      {/* column services */}
      <div className="w-full text-gray-100 h-[70%]  flex flex-col justify-center items-center">
        <h1 className="text-gray-100 text-center text-2xl mb-4">Services</h1>
        <div className="w-full grid grid-cols-4">
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="w-12 h-12 rounded-full border border-gray-200 text-gray-100 flex justify-center items-center">
              1
            </div>
            <h1 className="mt-2 text-center text-sm lg:text-lg">
              Build Web Apps
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="w-12 h-12 rounded-full border border-gray-200 text-gray-100 flex justify-center items-center">
              2
            </div>
            <h1 className="mt-2 text-center text-sm lg:text-lg">
              Build Android/IOS
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="w-12 h-12 rounded-full border border-gray-200 text-gray-100 flex justify-center items-center">
              3
            </div>
            <h1 className="mt-2 text-center text-sm lg:text-lg">
              Information System
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="w-12 h-12 rounded-full border border-gray-200 text-gray-100 flex justify-center items-center">
              4
            </div>
            <h1 className="mt-2 text-center text-sm lg:text-lg">
              And Much many more...
            </h1>
          </div>
        </div>
      </div>
      {/* port folio */}
      <div className="w-full flex justify-center items-center flex-col mt-10">
        <h1 className="text-gray-100 text-center text-2xl mb-4">
          PortFolio Hatop
        </h1>
        <div className="w-full grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 gap-y-8 justify-items-center">
          <div className="flex flex-col justify-center items-start w-[90%]">
            <Image src={ImageOne} alt="pic One" className="w-4/5 h-1/2" />
            <p className="text-gray-100">Name Website</p>
            <div className="flex text-gray-100 mt-3 items-center justify-center">
              <p>demo</p>
              <ArrowRightIcon className="w-5 h-5 ml-3 " />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[90%] ">
            <Image src={ImageTwo} alt="pic One" className="w-4/5 h-1/2" />
            <p className="text-gray-100">Name Website</p>
            <div className="flex text-gray-100 mt-3 items-center justify-center">
              <p>demo</p>
              <ArrowRightIcon className="w-5 h-5 ml-3 " />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[90%] ">
            <Image src={ImageThree} alt="pic One" className="w-4/5 h-1/2" />
            <p className="text-gray-100">Name Website</p>
            <div className="flex text-gray-100 mt-3 items-center justify-center">
              <p>demo</p>
              <ArrowRightIcon className="w-5 h-5 ml-3 " />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[90%] ">
            <Image src={ImageFour} alt="pic One" className="w-4/5 h-1/2" />
            <p className="text-gray-100">Name Website</p>
            <div className="flex text-gray-100 mt-3 items-center justify-center">
              <p>demo</p>
              <ArrowRightIcon className="w-5 h-5 ml-3 " />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[90%] ">
            <Image src={ImageOne} alt="pic One" className="w-4/5 h-1/2" />
            <p className="text-gray-100">Name Website</p>
            <div className="flex text-gray-100 mt-3 items-center justify-center">
              <p>demo</p>
              <ArrowRightIcon className="w-5 h-5 ml-3 " />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[90%] ">
            <Image src={ImageTwo} alt="pic One" className="w-4/5 h-1/2" />
            <p className="text-gray-100">Name Website</p>
            <div className="flex text-gray-100 mt-3 items-center justify-center">
              <p>demo</p>
              <ArrowRightIcon className="w-5 h-5 ml-3 " />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="w-full flex flex-col justify-evenly items-center h-4/5 mt-24">
        <h1 className="lg:text-3xl text-lg text-gray-100">Testimonial</h1>
        <div className="w-4/5 ">
          <Slideshow />
        </div>
      </div>
      {/* contac US */}
      <div className="w-full flex flex-col justify-center itemcenter lg:h-1/2 h-4/5">
        <div className="flex flex-col justify-center items-center w-full text-gray-100">
          <h1 className="text-lg lg:text-2xl">Contact Us</h1>
          <p className="text-sm lg:text-lg">
            Click One our Contacts Below to say Hello
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-3 justify-items-center mt-10">
          <div className="w-1/3 lg:justify-self-end justify-self-center flex flex-col justify-evenly items-center text-gray-100">
            <Image src={Wa} alt="logo wa" height={60} width={100} />
            <p className="text-sm lg:text-lg">WhatsApp</p>
            <p className="text-sm">123123</p>
          </div>
          <div className="w-4/5 flex flex-col justify-evenly items-center   text-gray-100">
            <Image src={Gmail} alt="logo wa" height={70} width={100} />
            <p className="text-sm lg:text-lg">Gmail</p>
            <p className="text-sm">teamsupport@hatop.id</p>
          </div>
          <div className="w-1/3 justify-self-center lg:justify-self-start flex flex-col justify-evenly items-center text-gray-100 ">
            <Image src={Tele} alt="logo wa" height={40} width={40} />
            <p className="text-sm lg:text-lg">Telegram</p>
            <p className="text-sm">@hatop</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[10%] flex justify-center items-center">
        <p className="text-gray-300 text-sm">
          CopyRight All right Reserved @teamhatop
        </p>
      </div>
    </div>
  );
};

export default HomePage;
