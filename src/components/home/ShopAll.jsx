import React, { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function ShopAll() {
  const imgRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.to(imgRef.current, {
      y: "-10%",
      ease: "power2.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const mobileHeader = (
    <div className="header flex max-sm:flex-col justify-between gap-[6vw] pb-[2vh]">
      <div className="top px-[2vw] leading-[8vw]">
        <h1 className="text-[#999999] text-[8vw] font-[parabole] font-[500]">
          Le Flair Studios
        </h1>
        <h1
          className="text-[#000000] text-[9vw] font-[parabole] 
                font-medium flex items-center gap-[1vw]"
        >
          Choose{" "}
          <span className="w-[3vw]">
            <img src="./images/split.svg" alt="" />
          </span>
          Yourself
        </h1>
      </div>
      <div className="bottom px-[2vw]">
        <h5 className="text-[#000000] text-[3.7vw] leading-[5vw] font-[800]">
          Wearing Le Flair Studios is about more than just <br /> clothing. It’s
          a statement and reminder of not <br /> forgetting who you are and what
          makes you special. <br /> When you choose to wear Le Flair Studios,
          you <br /> choose yourself.
        </h5>
        <Link to={"/catalog"}>
          <button className="px-[12vw] py-[1.5vh] rounded-[0.2vw] bg-[#3400D0] text-[#FFFFFF] text-[4vw] mt-[2vh]">
            Shop All
          </button>
        </Link>
      </div>
    </div>
  );

  const mobileImage = (
    <div>
      <img
        className="w-full h-full object-cover"
        src="./images/shopAllImage.jpg"
        alt=""
      />
    </div>
  );

  return (
    <div>
      <div className="w-full bg-[#F1F1F1] z-[1]">
        {isMobile ? (
          mobileHeader
        ) : (
          <div className="header flex justify-between items-center pb-[5vh] pt-[15vh]">
            <div className="left px-[2vw] leading-[3vw]">
              <h1 className="text-[#999999] text-[3vw] font-[parabole] font-[500]">
                Le Flair Studios
              </h1>
              <h1
                className="text-[#000000] text-[3vw] font-[parabole] 
                font-medium flex items-center gap-[1vw]"
              >
                Choose{" "}
                <span>
                  <img src="./images/split.svg" alt="" />
                </span>
                Yourself
              </h1>
            </div>
            <div className="right px-[2vw]">
              <h5 className="text-[#000000] text-[1vw] leading-[1.2vw] font-[600]">
                Wearing Le Flair Studios is about more than just clothing. It’s
                a statement <br /> and reminder of not forgetting who you are
                and what makes you special. <br /> When you choose to wear Le
                Flair Studios, you choose yourself.
              </h5>
              <Link to={"/catalog"}>
                <button className="px-[4vw] py-[2.2vh] rounded-[0.2vw] bg-[#3400D0] text-[#FFFFFF] text-[0.8vw] mt-[4vh]">
                  Shop All
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isMobile ? (
        mobileImage
      ) : (
        <div className="w-full h-[70vw] relative overflow-hidden">
          <img
            ref={imgRef}
            className="w-full h-full object-cover"
            src="./images/shopAllImage.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default ShopAll;
