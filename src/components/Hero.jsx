import React from "react";
import pic from "../assets/raven2.png";

const Hero = () => {
  return (
    <div id="home" className="bg-indigo-950 h-fit ">
      <div className=" flex max-sm:block  mx-auto max-w-[1024px] ">
        <div className="w-[70%] mx-5 max-sm:w-[90%] max-sm:m-0 max-sm:py-20 max-sm:mx-3 my-[10%] ">
          <p className="text-[40px] text-indigo-100 font-semibold ">
            ODUBOTE OLUWATOSIN{" "}
            <span className="text-indigo-300 text-[50px] "> "RAVEN"</span>
          </p>
          <div>
            <span className="text-2xl text-indigo-100 ">
              A Talented writer and poet
            </span>
          </div>
          <span className="text-lg text-opacity-30 text-white ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            eligendi doloribus neque corporis. Nostrum expedita alias architecto
            praesentium laudantium, corrupti labore, suscipit quos quis, dolorum
            unde fugiat at reprehenderit aliquid?
          </span>
        </div>

        <div className=" ">
          <img
            src={pic}
            className=" "
            alt="me"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
