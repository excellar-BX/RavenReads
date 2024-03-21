import React from "react";
import Texts from '../texts'
import { BiSolidDownload, BiDownload, BiCaretDownCircle } from "react-icons/bi";
import Item from '../assets/MY WORLD.docx'
import { NavLink } from "react-router-dom";


const Projects = () => {
  return (
    <div id="project" className="mx-auto max-w-[1024px]">
      <h1 className="text-indigo-400 text-3xl font-semibold mx-5 ">
        Projects by <span className="text-indigo-600"> RAVEN : </span>
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {Texts.map((item, index) => (
            <div className=" w-[250px] h-[340px] border-indigo-700 border-[3px] px-6 py-4 rounded-xl block mx-auto ">
              <img
                src={item.image}
                className="h-[50%] w-[100%] rounded-md "
                alt={item.title}
              />
              <div className="h-[50%] ">
                <span className=" text-2xl font-semibold text-indigo-900 ">
                  {item.title}
                </span>
                <p className="text-black text-opacity-40 text-[16px] py-[3%] ">
                  Published on : {item.publishedDate}
                </p>
                <div className="flex relative top-5 w-[100%] justify-center items-center  ">
                  <div className=" cursor-pointer  bg-indigo-700 hover:bg-white hover:text-indigo-700 hover:border-indigo-700 border-[2px] py-2 px-5  rounded-md text-white ">
                    <NavLink to={`/read/${item.id}`}>Read Now</NavLink>
                  </div>
                  <a href={item.file} className="cursor-pointer" download={item.file}>
                    <div className=" bg-indigo-700 text-white  hover:text-indigo-700 hover:bg-white  hover:border-indigo-700 border-[2px] p-2 mx-3 rounded-md  ">
                      <BiDownload className=" w-6 h-6  " />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
