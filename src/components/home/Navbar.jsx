import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobile = (
    <>
      <div
        className="max-sm:text-black max-sm:text-[4vw] 
      max-sm:font-bold max-sm:flex max-sm:items-center max-sm:gap-[2vw]"
      >
        <i class="ri-menu-line"></i>
        <h5>Menu</h5>
      </div>
      <h2 className="max-sm:font-parabole max-sm:text-black max-sm:text-[5.5vw] max-sm:font-bold">
        Le Flair Studios
      </h2>
      <div className="max-sm:flex max-sm:items-center max-sm:text-black gap-[2vw]">
        <a className="max:sm-text-[5vw] font-bold cursor-pointer">Bag</a>
        <a
          className="max-sm:text-white max-sm:flex max-sm:justify-center 
        max-sm:bg-black max-sm:text-[5vw] cursor-pointer font-semibold"
        >
          0
        </a>
      </div>
    </>
  );

  return (
    <div className="w-full relative">
      <nav
        className="fixed z-[1] max-sm:bg-white top-0 left-0 px-[2vw] max-sm:px-[4vw]
       py-[2.5vh] max-sm:py-[1.5vh] text-white flex max-sm:gap-[12vw] justify-between items-center"
      >
        {isMobile ? (
          mobile
        ) : (
          <>
            <img
              className="w-[10%] cursor-pointer"
              src="./images/logo.svg"
              alt=""
            />
            <div
              className="flex gap-[2.5vw] font-main tracking-tighter text-[0.8vw] font-semibold
             cursor-pointer"
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
              className="text-[0.8vw] cursor-pointer font-semibold hover:text-gray-300"
            >
              catalog
              <span className="ml-[0.1vw] text-[1.1vw] font-thin">
                <i class="ri-arrow-right-up-line"></i>
              </span>
            </Link>
            <div className="flex items-center gap-[1vw]">
              <a className="text-[0.8vw] font-bold cursor-pointer">Bag</a>
              <a className="text-black px-[0.5vw] py-[0.2vh] bg-white text-[0.8vw] cursor-pointer font-semibold">
                0
              </a>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
