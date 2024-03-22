import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import {
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
  FaAngleDown,
  FaTrashAlt,
  FaChartPie
} from "react-icons/fa";
import Primero from "../public/plato.png";
import chiken from "../public/chiken.png";

function App() {
  const [showMenu, setShowMenu] = useState(!false);
  const [showOrder, setShowOrder] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu) 
}

function toggleOrder() {
  setShowOrder(!showOrder)
  setShowMenu(!showOrder) 
  setShowMenu(!false)   
}

  return (
    <div className="bg-[#262837]  w-full  min-h-screen">
      <Sidebar showMenu={!showMenu} />

      {/* menu movil*/}
      <nav className="bg-[#262837] lg:hidden  fixed w-20 right-4 bottom-4  text-3xl text-gray-300 py-2 px-8 flex items-center justify-center rounded-full ">
        {/* <button className="p-2"><FaUser /></button>
        <button className="p-2"><FaPlus /></button>*/}
        <button onClick={toggleOrder} className="p-2"><FaChartPie /></button> 
        <button onClick={toggleMenu} className="text-orange-600 p-2 ml-auto">
          {showMenu ?  <FaBars />:<FaTimes /> }
        </button>
      </nav>
      {/* home ************************************************/}
      <main className="lg:pl-32 lg:pr-80 grid grid-cols-1 lg-grid-cols-8 pb-20 ">
        {/* Products */}
        <div className="lg:col-span-6 md:p-8 p-4 lg:pr-28 ">
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
                  className="bg-[#1F1D2B] w-full md:w-[700px] py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none "
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
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-gray-300 text-xl">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <FaAngleDown /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className=" p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 ">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            <div className="bg-[#1F1D2B] p-4 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mr-2 ">
              <img
                src={Primero}
                alt=""
                className="w-80 h-40 object-cover -mt-24  "
              />
              <p>Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        {/* Carrito de la compra ********************************************************/}
        <div className={`lg:col-span-2 fixed   top-0 bg-[#1F1D2B] w-full lg:w-96 md:w-80 lg:right-0 h-full transition-all ${showOrder ? "right-0" : "-right-full"} `}>
          {/* Orders *************************************************************/}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <FaTimes className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" onClick={toggleOrder} />
            <h1 className="text-2xl my-4 ">Orders</h1>
            {/* Pills */}
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                Dine In
              </button>
              <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                To Go
              </button>
              <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                Delivery
              </button>
            </div>
            {/* Card */}
            <div>
              <div className="grid grid-cols-6 mt-4 mb-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>

              {/* Products **************************************************************/}
              <div className="h-[340px] md:h-[600px] lg:h-[470px] overflow-y-scroll">
                {/* Product 1*/}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6  items-center">
                    <div className="col-span-4 flex items-center gap-3">
                      <img
                        src={chiken}
                        alt="photo_chiken"
                        className="w-20 h-20 object-cover"
                      />
                      <div>
                        <h5 className="text-lm">spaice seasoned sea..</h5>
                        <p className="text-xm text-gray-500">$2.29</p>
                      </div>
                    </div>
                    <div>
                      <span>2</span>
                    </div>
                    <div>
                      <p className="text-xl text-gray-200">$2.29</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center pt-2">
                    <form className="col-span-5">
                      <input
                        type="text "
                        className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                        placeholder="Other note.."
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <FaTrashAlt className="text-red-300" />
                      </button>
                    </div>
                  </div>
                </div>
               {/* Product 2*/}
              <div className="bg-[#262837] p-4 rounded-xl">
                <div className="grid grid-cols-6  items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={chiken}
                      alt="photo_chiken"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h5 className="text-lm">spaice seasoned sea..</h5>
                      <p className="text-xm text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <p className="text-xl text-gray-200">$2.29</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center pt-2">
                  <form className="col-span-5">
                    <input
                      type="text "
                      className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                      placeholder="Other note.."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <FaTrashAlt className="text-red-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2*/}
              <div className="bg-[#262837] p-4 rounded-xl mt-4">
                <div className="grid grid-cols-6  items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={chiken}
                      alt="photo_chiken"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h5 className="text-lm">spaice seasoned sea..</h5>
                      <p className="text-xm text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <p className="text-xl text-gray-200">$2.29</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center pt-2">
                  <form className="col-span-5">
                    <input
                      type="text "
                      className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                      placeholder="Other note.."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <FaTrashAlt className="text-red-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3*/}
              <div className="bg-[#262837] p-4 rounded-xl mt-4">
                <div className="grid grid-cols-6  items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={chiken}
                      alt="photo_chiken"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h5 className="text-lm">spaice seasoned sea..</h5>
                      <p className="text-xm text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <p className="text-xl text-gray-200">$2.29</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center pt-2">
                  <form className="col-span-5">
                    <input
                      type="text "
                      className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                      placeholder="Other note.."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <FaTrashAlt className="text-red-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 4*/}
              <div className="bg-[#262837] p-4 rounded-xl mt-4">
                <div className="grid grid-cols-6  items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={chiken}
                      alt="photo_chiken"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h5 className="text-lm">spaice seasoned sea..</h5>
                      <p className="text-xm text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <p className="text-xl text-gray-200">$2.29</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center pt-2">
                  <form className="col-span-5">
                    <input
                      type="text "
                      className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                      placeholder="Other note.."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <FaTrashAlt className="text-red-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 5*/}
              <div className="bg-[#262837] p-4 rounded-xl mt-4">
                <div className="grid grid-cols-6  items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={chiken}
                      alt="photo_chiken"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h5 className="text-lm">spaice seasoned sea..</h5>
                      <p className="text-xm text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <p className="text-xl text-gray-200">$2.29</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center pt-2">
                  <form className="col-span-5">
                    <input
                      type="text "
                      className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                      placeholder="Other note.."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <FaTrashAlt className="text-red-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 6*/}
              <div className="bg-[#262837] p-4 rounded-xl mt-4">
                <div className="grid grid-cols-6  items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={chiken}
                      alt="photo_chiken"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h5 className="text-lm">spaice seasoned sea..</h5>
                      <p className="text-xm text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <p className="text-xl text-gray-200">$2.29</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center pt-2">
                  <form className="col-span-5">
                    <input
                      type="text "
                      className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                      placeholder="Other note.."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <FaTrashAlt className="text-red-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 7*/}
              <div className="bg-[#262837] p-4 rounded-xl mt-4">
                <div className="grid grid-cols-6  items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={chiken}
                      alt="photo_chiken"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h5 className="text-lm">spaice seasoned sea..</h5>
                      <p className="text-xm text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <p className="text-xl text-gray-200">$2.29</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center pt-2">
                  <form className="col-span-5">
                    <input
                      type="text "
                      className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none "
                      placeholder="Other note.."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <FaTrashAlt className="text-red-300" />
                    </button>
                  </div>
                </div>
              </div>

              </div>
            </div>

            {/* Submit payment *********************************************************/}
            <div className="absolute bottom-0 left-0 p-2 w-full ">
              <div className="flex items-center justify-between mb-1 px-6">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between px-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$0</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-3  mt-3 rounded-xl font-bold text-[20px]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
