import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.svg";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // for hamburger menu
  const [MobileNavOpen, setMobileNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setMobileNavOpen(!MobileNavOpen);
    setIsOpen(!isOpen);
  };

  const scrollToBlog = () => {
    const blogSection = document.getElementById("blog-section");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "mdooth" });
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollingDown = currentScrollPos > prevScrollPos;

    setVisible(!scrollingDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navClasses = `bg-[#ffffffcc] bg-blur border-b fixed item-center justify-center h-[60px] p-3 flex w-screen text-black z-40 transition-transform transform ${
    visible ? "translate-y-0" : "-translate-y-full"
  }`;

  return (
    <>
      {/* <div className="flex flex-col"> */}

      <nav className={navClasses} aria-label="Global">
        <div className="flex w-full h-full justify-between items-center max-w-[1400px] m-auto">
          <div className="flex w-full items-center justify-between px-1 lg:px-8">
            <Link to="/" className="p-2">
              <img className="w-10" src={logo} alt="" />
            </Link>
            <div className="flex justify-center items-center gap-2">
              <NavLink to="/request">
                <h5 className="hover:bg-[#e0e0e0] rounded-lg flex gap-1 font-[400] text-[#212121] text-[16px] -tracking-[0.2px] px-2 py-1">
                  Request <div className="x-sm:hidden block">Article</div>
                </h5>
              </NavLink>
              <Link
                to="/create"
                className="cursor-pointer hover:text-[#313131] "
              >
                <div className="flex gap-2 p-1 justify-center items-center text-[16px] bg-[#212121] border border-[#121212] rounded-lg text-[#fff] font-[300] cursor-pointer hover:bg-[#313131] hover:focus:outline:none hover:focus:border:none transition-all">
                  <h5 className="font-[300] -tracking-[0.2px] flex gap-1 ">
                    Write<div className="x-sm:hidden block">Article</div>
                  </h5>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                      stroke="#f0f0f0"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.91 7.84L7.72004 13.03C7.52004 13.23 7.33004 13.62 7.29004 13.9L7.01004 15.88C6.91004 16.6 7.41004 17.1 8.13004 17L10.11 16.72C10.39 16.68 10.78 16.49 10.98 16.29L16.17 11.1C17.06 10.21 17.49 9.17 16.17 7.85C14.85 6.52 13.81 6.94 12.91 7.84Z"
                      stroke="#f0f0f0"
                      strokeWidth="1"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1699 8.58C12.6099 10.15 13.8399 11.39 15.4199 11.83"
                      stroke="#f0f0f0"
                      strokeWidth="1"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>{/* {click && content} */}</div>
        {/* <div className="hidden md:flex w-full items-center justify-between px-0">
                    <Link to="/" className="p-2">
                        <img className="w-10" src={logo} alt="" />
                    </Link>
                    <div className="items-center justify-center p-0 m-0 z-50 md:flex hidden text-white transition-all" onClick={handleClick}>
                        <Hamburger direction="right" color="#212121" size={32} toggled={isOpen} toggle={setIsOpen} />
                    </div>
                </div> */}
      </nav>
      {/* {MobileNavOpen && <MobileNav isOpen={isOpen} />} */}
      {/* </div> */}
    </>
  );
};

export default Navbar;
