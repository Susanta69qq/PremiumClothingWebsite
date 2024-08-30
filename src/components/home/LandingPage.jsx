import React, { useEffect, useState } from "react";

function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover"
        src={isMobile ? "./images/heroimagemobile.jpg" : "./images/heroimage.webp"}
        alt=""
      />
      <div className="w-full h-full bg-black absolute top-0 opacity-10"></div>
      <div className="landingTexts w-full absolute bottom-0 max-sm:bottom-[1%] px-[2vw] max-sm:px-[4vw] py-[4vh] max-sm:py-[2vh] font-main text-[#EEEEF1] flex max-sm:flex-col justify-between max-sm:gap-[4vh] items-end max-sm:items-start">
        <h1 className="text-[6vw] max-sm:text-[14vw] leading-[5vw] max-sm:leading-[13vw] tracking-tighter">
          Embrace what <br />
          makes You - You
        </h1>
        <button
          className="border-[1px] border-white px-[2.7vw] max-sm:px-[13vw] py-[1.7vh] text-[0.8vw] max-sm:text-[4vw]
         font-semibold max-sm:font-bold hover:bg-[#3400D0] max-sm:tracking-tighter hover:border-opacity-0 transition-all"
        >
          Discover now
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
