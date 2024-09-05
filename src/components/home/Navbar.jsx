import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { CartContext } from "../../CartContext";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const location = useLocation();

  const { bagCount, cart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showBagHandler = () => {
    setShowBag(!showBag);
  };

  const isHomePage = location.pathname === "/";

  const mobile = (
    <>
      <div
        className={`max-sm:text-[4vw] max-sm:font-bold max-sm:flex max-sm:items-center max-sm:gap-[2vw] ${
          isHomePage ? "text-white" : "text-black"
        }`}
      >
        <i className="ri-menu-line"></i>
        <h5>Menu</h5>
      </div>
      <Link to={"/"}>
        <h2
          className={`max-sm:text-[5.25vw] max-sm:font-bold ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          Le Flair Studios
        </h2>
      </Link>
      <div
        className={`max-sm:flex max-sm:items-center max-sm:gap-[2vw] ${
          isHomePage ? "text-white" : "text-black"
        }`}
      >
        <a className="max-sm:text-[5vw] font-bold cursor-pointer">Bag</a>
        <a
          className={`max-sm:flex max-sm:justify-center ${
            isHomePage ? "bg-black text-white" : "bg-white text-black"
          } max-sm:text-[5vw] cursor-pointer font-semibold`}
        >
          0
        </a>
      </div>
    </>
  );

  return (
    <div className="w-full relative">
      <nav
        className={`fixed z-[1] top-0 left-0 px-[2vw] max-sm:px-[4vw] py-[2.5vh] max-sm:py-[1.5vh] 
        flex max-sm:gap-[12vw] justify-between items-center ${
          isHomePage ? "bg-black" : "bg-white"
        } ${isHomePage ? "text-white" : "text-black"}`}
      >
        {isMobile ? (
          mobile
        ) : (
          <>
            <img
              className={`w-[10%] cursor-pointer ${
                isHomePage ? "text-white" : "text-black"
              }`}
              src="./images/logo.svg"
              alt="Logo"
            />
            <div
              className={`flex gap-[2.5vw] font-main tracking-tighter text-[0.8vw] font-semibold cursor-pointer ${
                isHomePage ? "text-white" : "text-black"
              }`}
            >
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <a className="hover:text-gray-300">About</a>
              <a className="hover:text-gray-300">Journal</a>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>
            <Link
              to="/catalog"
              className={`text-[0.8vw] cursor-pointer font-semibold hover:text-gray-300 ${
                isHomePage ? "text-white" : "text-black"
              }`}
            >
              catalog
              <span className="ml-[0.1vw] text-[1.1vw] font-thin">
                <i className="ri-arrow-right-up-line"></i>
              </span>
            </Link>
            <div className="relative">
              <div className="flex items-center gap-[1vw]">
                <a
                  className={`text-[0.8vw] font-bold cursor-pointer ${
                    isHomePage ? "text-white" : "text-black"
                  }`}
                  onClick={showBagHandler}
                >
                  Bag
                </a>
                <a
                  className={`px-[0.5vw] py-[0.2vh] ${
                    isHomePage ? "bg-white text-black" : "bg-black text-white"
                  } text-[0.8vw] cursor-pointer font-semibold`}
                  onClick={showBagHandler}
                >
                  {bagCount}
                </a>
              </div>
              <div
                className={`fixed top-0 right-0 bg-[#F1F1F1] w-[25vw] h-[100vh] px-[2vw] py-[2vh] 
            flex flex-col justify-between text-[#000] transition-all ease-in-out duration-500 ${
              showBag
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
                style={{ pointerEvents: showBag ? "all" : "none" }}
              >
                <div className="header flex items-center justify-between">
                  <div className="flex items-center gap-[1vw]">
                    <h2 className="font-[main] text-[2vw]">Bag</h2>
                    <p
                      className="bg-[#000] text-[#F1F1F1] px-[1vw] py-[1vh] 
                    text-[0.8vw] text-center font-[main] cursor-pointer"
                    >
                      {bagCount}
                    </p>
                  </div>
                  <span
                    className="font-[800] cursor-pointer"
                    onClick={showBagHandler}
                  >
                    <i className="ri-close-large-fill"></i>
                  </span>
                </div>

                <div className="flex flex-col gap-[2vh]">
                  {cart.length === 0 ? (
                    <p className="text-[0.8vw] font-[main]">
                      Your shopping bag is empty.{" "}
                      <Link to={"/catalog"}>
                        <span className="text-[#3400D0] underline">Shop</span>
                      </Link>{" "}
                      new series
                    </p>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-[1vw] items-center border-b py-[1vh]"
                      >
                        <div className="flex-1 flex flex-col">
                          <span className="text-[1vw] font-bold">
                            {item.productType}
                          </span>
                          <span className="text-[1vw] font-semibold">
                            {item.price}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <Link to="/catalog">
                  <button className="bg-[#3400D0] text-[#F1F1F1] text-[0.8vw] w-full py-[2.5vh] font-[main]">
                    Browse Catalog
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
