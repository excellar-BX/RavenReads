import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import {
  BiSearch,
  BiSearchAlt,
  BiSearchAlt2,
  BiShoppingBag,
  BiUser,
  BiX,
} from "react-icons/bi";
const SearchHeader = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`${value}`);
  };

  return (
    
    <div>
    {modalOpen ? <div className="darkBg  bg-black bg-opacity-60 fixed top-0 bottom-0 left-0 right-0 w-full h-full "></div> : ''}
      <header className="bg-[#3aafa9] py-5 px-2 flex ">
        <div className=" z-[1]">
          <img
            src={require("./../assets/pic.png")}
            alt="logo"
            className="logo w-14 h-14 "
          />
        </div>
        <div className="flex z-[1] flex-col items-center h-[60px] w-[60%] bg-white rounded-xl ">
          <OutsideClickHandler
            display="contents"
            onOutsideClick={() => setModalOpen(false) & setOpen(false)}
          >
            <div className="flex flex-row items-center h-[60px] w-full ">
              <div className="w-[5%] justify-center items-center flex text-2xl ">
                <BiSearchAlt className=" " />
              </div>
              <input
                type="text"
                placeholder="search for something"
                value={value}
                onClick={() => setModalOpen(true)}
                onChange={(e) => setOpen(true) & setValue(e.target.value)}
                className=" bg-opacity-0 rounded-xl w-full h-full bg-white placeholder:text-[#7e7e7e] placeholder:text-lg px-2 outline-none border-none text-2xl  "
                name=""
                id=""
              />
              {open ? (
                <div className="w-[5%] justify-center items-center flex text-2xl">
                  <BiX
                    onClick={() =>
                      setOpen(false) & setValue("") & setModalOpen(false)
                    }
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            {modalOpen ? (
              <div className="flex items-center justify-center ">
                <div className="modal w-[60%] absolute top-[11%] h-[200px] rounded-xl shadow-lg  bg-white  ">
                  <div
                    className="flex flex-row cursor-pointer items-center py-2 my-6 border-b-2 border-[#eeeeee] "
                    onClick={handleSearch}
                  >
                    <div className="w-[5%] justify-center items-center flex text-2xl ">
                      <BiSearchAlt2 className=" text-lg text-[grey]  " />
                    </div>
                    {value}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </OutsideClickHandler>
        </div>
        <div className="z-[1] flex items-center justify-between " >
        <Link>
          <BiShoppingBag />
        </Link>
        <Link>
          <BiUser />
        </Link>
        <div className="button w-[120px] h-[50px] text-xl items-center justify-center flex rounded bg-white ">
          sign in
        </div>
        </div>
      </header>
      
      
      
    </div>
  );
};

export default SearchHeader;
