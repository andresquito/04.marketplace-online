import React from "react";
import {
  FaHome,
  FaPercentage,
  FaChartPie,
  FaBell,
  FaRegEnvelope,
  FaRegSun,
  FaSignInAlt
} from "react-icons/fa";

const Sidebar = (props) => {
  const {showMenu} = props;



  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6  rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" :"-left-full"}`}>
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>

          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl ">
            <a
              href="#"
              className="bg-[#Ec7c6a] p-4 flex justify-center rounded-xl  text-white"
            >
              <FaHome className="text-2xl " />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#Ec7c6a] p-4 flex justify-center rounded-xl  text-[#Ec7c6a] group-hover:text-white transition-colors"
            >
              <FaPercentage className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#Ec7c6a] p-4 flex justify-center rounded-xl  text-[#Ec7c6a] group-hover:text-white transition-colors"
            >
              <FaChartPie className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#Ec7c6a] p-4 flex justify-center rounded-xl  text-[#Ec7c6a] group-hover:text-white transition-colors"
            >
              <FaRegEnvelope className="text-2xl " />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#Ec7c6a] p-4 flex justify-center rounded-xl  text-[#Ec7c6a] group-hover:text-white transition-colors"
            >
              <FaBell className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#Ec7c6a] p-4 flex justify-center rounded-xl  text-[#Ec7c6a] group-hover:text-white transition-colors"
            >
              <FaRegSun className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#Ec7c6a] p-4 flex justify-center rounded-xl  text-[#Ec7c6a] group-hover:text-white transition-colors"
            >
              <FaSignInAlt className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
