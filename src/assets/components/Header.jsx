import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="border-b-2">
      <div className="flex items-center justify-between w-full md:max-w-7xl h-[62px]  px-2 mx-auto md:h-[75px]">
        {" "}
        <NavLink to={"/"} className={"h-full"}>
          <img
            src="/Images/Place Design Here копия.png"
            alt="logo"
            className="h-full"
          />
        </NavLink>
        <ul className="hidden gap-5 md:flex">
          <li>
            <NavLink
              to={"/"}
              className="relative pb-7 transition-opacity duration-300 opacity-70 hover:opacity-50 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              ГЛАВНАЯ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/drawings"}
              className="relative pb-7 transition-opacity duration-300 opacity-70 hover:opacity-50 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              ЧЕРТЕЖИ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/visualization"}
              className="relative pb-7 transition-opacity duration-300 opacity-70 hover:opacity-50 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              ВИЗУАЛИЗАЦИЯ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/planning"}
              className="relative pb-7 transition-opacity duration-300 opacity-70 hover:opacity-50 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              ПЛАНИРОВОЧНОЕ РЕШЕНИЕ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/infoproduct"}
              className="relative pb-7 transition-opacity duration-300 opacity-70 hover:opacity-50 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              ИНФОПРОДУКТЫ
            </NavLink>
          </li>
        </ul>
        <div className="fixed bg-[#f5f5f5] right-2 md:hidden rounded-full p-2 bg-opacity-50 z-50" onClick={() => setMenu(true)}>
          <IoIosMenu className="text-4xl " />
        </div>
        {menu && (
          <div className="fixed top-0 left-0 z-[51] flex w-full min-h-screen duration-300 transform bg-black/50">
            <div
              className="flex w-[30%] h-full"
              onClick={() => setMenu(false)}
            ></div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: menu ? "0%" : "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col  w-[70%] p-5 bg-white"
            >
              <div className="flex items-end justify-end w-full mb-5">
                <AiOutlineClose
                  className="text-3xl cursor-pointer "
                  onClick={() => setMenu(false)}
                />
              </div>
              <ul className="flex flex-col gap-[15px] pr-5 text-lg text-gray-900 nav">
                <li
                  onClick={() => setMenu(false)}
                  className="text-sm font-light font-manrope"
                >
                  <NavLink to="/" className="hover:text-blue-500">
                    ГЛАВНАЯ
                  </NavLink>
                </li>
                <li
                  onClick={() => setMenu(false)}
                  className="text-sm font-light font-manrope"
                >
                  <NavLink to="/drawings" className="hover:text-blue-500">
                    ЧЕРТЕЖИ
                  </NavLink>
                </li>
                <li
                  onClick={() => setMenu(false)}
                  className="text-sm font-light font-manrope"
                >
                  <NavLink to="/visualization" className="hover:text-blue-500">
                    ВИЗУАЛИЗАЦИЯ
                  </NavLink>
                </li>
                <li
                  onClick={() => setMenu(false)}
                  className="text-sm font-light font-manrope"
                >
                  <NavLink to="/planning" className="hover:text-blue-500">
                    ПЛАНИРОВОЧНОЕ РЕШЕНИЕ
                  </NavLink>
                </li>
                <li
                  onClick={() => setMenu(false)}
                  className="text-sm font-light font-manrope"
                >
                  <NavLink to="/infoproduct" className="hover:text-blue-500">
                    ИНФОПРОДУКТЫ
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
