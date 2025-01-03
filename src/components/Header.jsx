import React from "react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import {
  BiX,
  BiMenuAltRight,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiPhoneCall,
  BiPhone,
  BiLogoFacebookCircle,
} from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = [
  { name: "Home", route: "home" },
  { name: "About", route: "about" },
  { name: "Projects", route: "project" },
  { name: "Connect", route: "footer" },
];

const Header = () => {
  const [open, setOpen] = useState();

  return (
    <div className=" bg-indigo-800  h-20 text-white  ">
      <div className="py-7 w-full ">
        {/* Menu Icons */}
        <div className="min-[520px]:hidden block float-right mx-4 ">
          {open ? (
            <BiX className="w-7 h-7 " onClick={() => setOpen(!open)} />
          ) : (
            <BiMenuAltRight
              className="w-7 h-7 "
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div className="inline-block w-[25%] mx-[2%] text-xl font-semibold max-[520px]:w-[50%] ">
          <h1 classname="font-bold font-poppins ">
            <span className="hover:cursor-pointer  text-indigo-200  ">
              Raven
            </span>
            Reads
          </h1>
        </div>

        {/* Nav */}

        <div
          className={`items-center relative bottom-7 flex justify-center max-[520px]:w-[150px] max-[520px]:h-fit max-[520px]:fixed max-[520px]:right-5 max-[520px]:bg-indigo-300 rounded-md max-[520px]:my-5 ${
            open
              ? "max-[520px]:top-[50px] duration-700 delay-100"
              : "max-[520px]:-top-[300px] duration-700 delay-100"
          } `}
        >
          <OutsideClickHandler
            onOutsideClick={() => setOpen(false)}
          >
            <ul className="inline-flex flex-row gap-4 max-[520px]:block  "  >
              
            <div className="indicator min-[520px]:hidden inline-block h-6 w-6 bg-indigo-300 relative -top-2 rotate-45 rounded-sm left-[65px] "></div>
              {Nav.map((link, index) => (
                <div>
                  <li
                    key={index}
                    onClick={() => setOpen(false)}
                    className="mx-[2%] max-[520px]:my-5 hover:cursor-pointer max-[520px]:text-center"
                  >
                    <Link
                      to={link.route}
                      activeClass="active"
                      smooth={true}
                      spy={true}
                      onClick={() => setOpen(false)}
                      className="hover:cursor-pointer"
                    >
                      <p  onClick={() => setOpen(false)}>{link.name}</p>
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </OutsideClickHandler>
        </div>
        <div className="social max-[700px]:hidden min-[700px]:flex  absolute right-5 top-5">
          <div className="mx-[10px]">
            <a href="/">
              <BiLogoFacebookCircle className="w-7 h-7 hover:text-indigo-400" />
            </a>
          </div>
          <div className="mx-[10px]">
            <a href="/">
              <BiLogoInstagram className="w-7 h-7 hover:text-indigo-400" />
            </a>
          </div>
          <div className="mx-[10px]">
            <a href="/">
              <BiLogoTwitter className="w-7 h-7 hover:text-indigo-400" />
            </a>
          </div>
          <div className="mx-[10px]">
            <a href="https://wa.me/8134722945">
              <BiLogoWhatsapp className="w-7 h-7 hover:text-indigo-400" />
            </a>
          </div>
          <div className="mx-[10px]">
            <a href="/">
              <BiPhone className="w-7 h-7 hover:text-indigo-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
