import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import texts from "../texts";
import { Link } from "react-router-dom";
import Header from "./Header";
import { BiHomeAlt, BiMinus, BiPlus } from "react-icons/bi";
const Singleread = ({ match }) => {
  const { id } = useParams();
  const text = texts.find((r) => r.id === id);
  const Texts = texts;
  let [size, setSize] = useState(20);

  window.scrollTo(0, 0);
  return (
    <div className="">
      <div className=" bg-indigo-800  h-20 text-white  ">
        <div className="py-7 w-full ">
          <div className="inline-block w-[25%] mx-[2%] text-xl font-semibold max-[520px]:w-[50%] ">
            <a href="/">
              <h1 classname="font-bold font-poppins ">
                <span className="hover:cursor-pointer  text-indigo-200  ">
                  Raven
                </span>
                Reads
              </h1>
            </a>
          </div>
          <div className=" float-right relative right-5 my-1 ">
            <Link to="/">
              <BiHomeAlt className=" w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[99%] mx-auto h-fit my-[4%] min-[600px]:flex-row ">
        <div className=" w-[90%] min-[600px]:w-[40%] block mx-auto h-fit ">
          <img
            className=" w-[100%] h-full rounded-md "
            src={text.image}
            alt={text.image}
          />
        </div>
        <div className=" w-[90%] min-[600px]:w-[40%] block mx-auto h-fit ">
          <p className="text-indigo-600 text-4xl my-5 font-semibold">
            {text.title}
          </p>
          <p className={`text-[${size}px]`}>{text.body}</p>
        </div>
        {/* Magnify btns */}
        <div className="flex flex-col w-10 h-10 fixed bottom-[10%] right-[4%] text-center Textss-center justify-center font-bold text-lg ">
          <button
            className=" p-3 rounded-md text-white bg-indigo-700 "
            onClick={() => setSize(size < 6 ? (size = 5) : size - 5)}
          >
            <BiMinus />
          </button>
          {size * 2}%
          <button
            className=" p-3 rounded-md text-white bg-indigo-700 "
            onClick={() => setSize(size > 49 ? (size = 50) : size + 5)}
          >
            <BiPlus />
          </button>
        </div>
      </div>
      {/* Read Also */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {Texts.map((item, index) => (
          <div className=" w-[250px] h-[340px] border-indigo-700 border-[3px] px-6 py-4 rounded-xl block mx-auto ">
            <img
              src={item.image}
              className="h-[50%] w-[100%] rounded "
              alt={item.image}
            />
            <div className="h-[50%] ">
              <span className=" text-2xl font-semibold text-indigo-900 ">
                {item.title}
              </span>
              <p className="text-black text-opacity-40 text-[16px] py-[3%] ">
                Published on : {item.publishedDate}
              </p>
              <div className="flex relative top-5 w-[100%] justify-center items-center ">
                <div className=" bg-indigo-700 hover:bg-white hover:text-indigo-700 hover:border-indigo-700 border-[2px] py-2 px-6 rounded-md text-white ">
                  <a href={`/read/${item.id}`}>Read Now</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Singleread;
