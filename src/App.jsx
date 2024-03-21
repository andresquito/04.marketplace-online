import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import { FaUser, FaBars, FaTimes, FaSearch, FaAngleDown } from "react-icons/fa";
import Primero from '../public/plato.png'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [shorOrder, setShowOrder] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="bg-[#262837]  w-full  min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* menu movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden  fixed w-20 right-4 bottom-4  text-3xl text-gray-400 py-2 px-8 flex items-center justify-center  ">
        {/* <button className="p-2"><FaUser /></button>
        <button className="p-2"><FaPlus /></button>
        <button className="p-2"><FaChartPie /></button> */}
        <button onClick={toggleMenu} className="text-white p-2 ml-auto">
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {/* home */}
      <main className="lg:pl-28 grid grid-cols-1 lg-grid-cols-8 p-4">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="">
            {/* Title and search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 ">
              <h1 className="text-2xl text-gray-300">Andrés Yépez</h1>
              <p className="text-gray-500">21 marzo 2022</p>
            </div>
            <form action="">
              <div className="w-full relative">
                <FaSearch className="absolute left-3 top-1/2 -traslate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                  placeholder="Search"
                />
              </div>
            </form>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6 lg:gap-8">
              <a href="#" className="relative py-2 pr-4  text-[#ec7c6a] ">
                Hot dishes
              </a>
              <a href="#" className="py-2 pr4">
                Cold dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-gray-300 text-xl">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <FaAngleDown /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className=" mt-14 grid grid-cols-2 ">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2" >
              <img src= {Primero} alt="" className="w-80 h-40 object-cover -mt-20 shadow-2xl rounded-full  " />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400" >$2.29</span>
              <p className="text-gray-600" >20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 ml-2" >
              <img src= {Primero} alt="" className="w-80 h-40 object-cover -mt-20 shadow-2xl rounded-full  " />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400" >$2.29</span>
              <p className="text-gray-600" >20 Bowls available</p>
            </div>

          </div>


        </div>
      </main>
    </div>
  );
}

export default App;
