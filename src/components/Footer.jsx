import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoUpwork,
  BiLogoWhatsapp,
  BiPhone,
  BiSolidEnvelope,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div id="footer" className="bg-indigo-950 py-6 ">
      <div className="  mx-auto max-w-[1024px] w-[90%] ">
        <div className="flex flex-col md:flex-row ">
          {/* text and icons */}
          <div className="md:w-1/2">
            <h1 className="text-3xl mt-16 text-indigo-300 font-semibold">
              Connect with me :
            </h1>
            {/* social icons */}
            <div className="flex text-2xl font-extrabold my-5">
              <div className="mx-[5px]">
                <a href="/">
                  <BiLogoFacebookCircle className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
                </a>
              </div>
              <div className="mx-[5px]">
                <a href="/">
                  <BiLogoInstagram className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
                </a>
              </div>
              <div className="mx-[5px]">
                <a href="/">
                  <BiLogoTwitter className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
                </a>
              </div>
              <div className="mx-[5px]">
                <a href="/">
                  <BiLogoWhatsapp className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
                </a>
              </div>
              <div className="mx-[5px]">
                <a href="/">
                  <BiPhone className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
                </a>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="md:w-1/2">
            <p className=" mt-16 text-white text-2xl mb-6">
              Contact me, lets make magic together
            </p>
            <form action="">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="outline-none text-white bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 my-6 w-full rounded"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                className="bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded text-white outline-none"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-4 outline-none text-white"
              ></textarea>
              <button
                className="bg-indigo-300 py-2 px-6 font-semibold text-white rounded hover:bg-opacity-80 transition-all delay-500 block"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="flex text-2xl font-extrabold my-5">
          <div className="mx-[5px]">
            <a href="/">
              <BiLogoFacebookCircle className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
            </a>
          </div>
          <div className="mx-[5px]">
            <a href="/">
              <BiLogoInstagram className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
            </a>
          </div>
          <div className="mx-[5px]">
            <a href="/">
              <BiLogoTwitter className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
            </a>
          </div>
          <div className="mx-[5px]">
            <a href="/">
              <BiLogoWhatsapp className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
            </a>
          </div>
          <div className="mx-[5px]">
            <a href="/">
              <BiPhone className="w-7 h-7 hover:text-indigo-300 text-indigo-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
      <span className="text-xl font-semibold text-center text-white">Developed by <a href="mailto:excellenceay33@gmail.com" className="text-indigo-300">execelegantdesigns</a> </span>
      </div>
    </div>
  );
};

export default Footer;
