import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

function MarqueeProducts() {
  const [isMobile, setIsMobile] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imgRef = useRef(null);
  const pinTimeline = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    pinTimeline.current = gsap.timeline({
      defaults: {
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top top+=100vh",
          end: "bottom bottom",
          scrub: 2,
        },
      },
    });

    pinTimeline.current.fromTo(
      rightRef.current,
      { y: 0 },
      { y: "100%", duration: 10, ease: "power3.out" }
    );

    pinTimeline.current.fromTo(
      leftRef.current,
      { y: 0 },
      { y: "-100%", duration: 10, ease: "power3.out" }
    );
  }, []);

  const mobileHeader = (
    <>
      <div className="flex flex-col max-sm:mb-[5vh]">
        <div className="header max-sm:px-[4vw] max-sm:mt-[3vh] flex items-center max-sm:gap-[2vw]">
          <h1 className="text-[#8F8F8F] font-parabola max-sm:text-[8vw] tracking-tight">
            Celebrate your flair
          </h1>
          <img className="max-sm:w-[3vw]" src="./images/split.svg" alt="" />
        </div>
        <h1
          className="text-black max-sm:text-[7vw] max-sm:leading-3 tracking-tight 
        max-sm:px-[4vw] max-sm:font-semibold"
        >
          Expression on your own terms
        </h1>
      </div>
    </>
  );

  const mobileImgContainer = (
    <div className="flex flex-col">
      <div className="relative w-full h-auto">
        <img
          className="w-full h-auto object-cover"
          src="./images/left-side-image1.webp"
          alt=""
        />
        <h5
          className="absolute top-2 left-2 text-[#E5E5E5] text-[3.7vw] leading-[5vw]
           uppercase px-[2vw] font-semibold"
        >
          Crafting Unique Narratives Through Limited <br /> Edition Drops
        </h5>
      </div>

      <div className="relative w-full h-auto">
        <img
          className="w-full h-auto object-cover"
          src="./images/left-side-image2.webp"
          alt=""
        />
        <h5
          className="absolute top-2 left-2 text-[#E5E5E5] text-[3.7vw] leading-[5vw]
           uppercase px-[2vw] font-semibold"
        >
          The spirit of street culture with high- <br />
          quality craftsmanship
        </h5>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen relative">
      <div>
        {isMobile ? (
          mobileHeader
        ) : (
          <>
            <div className="header px-[2vw] py-[7vh] flex items-center gap-[0.7vw]">
              <h1 className="text-[#8F8F8F] font-parabola text-[3.5vw] tracking-tight">
                Celebrate your flair
              </h1>
              <span>
                <img className="w-[1.1vw]" src="./images/split.svg" alt="" />
              </span>
              <h1 className="text-black text-[3.5vw] leading-[3.5vw] tracking-tight">
                Expression
              </h1>
            </div>
            <h1 className="text-black text-[3.5vw] leading-[3.5vw] tracking-tight mt-[-9vh] px-[2vw]">
              on your own terms
            </h1>
          </>
        )}
      </div>
      {isMobile ? (
        mobileImgContainer
      ) : (
        <>
          <div
            className="imgContainer sticky top-0 h-[100vh] mt-[5vh] flex overflow-hidden"
            ref={imgRef}
          >
            <div className="left w-1/2" ref={leftRef}>
              <div className="relative h-[100vh]">
                <img
                  className="w-full h-full object-cover"
                  src="./images/left-side-image1.webp"
                  alt=""
                />
                <h5
                  className="absolute top-0 text-[#E5E5E5] text-[0.9vw] leading-[0.9vw]
             uppercase px-[2vw] py-[16vh] font-semibold"
                >
                  Crafting Unique Narratives Through <br /> Limited Edition
                  Drops
                </h5>
              </div>
              <div className="relative h-[100vh]">
                <img
                  className="w-full h-full object-cover"
                  src="./images/left-side-image2.webp"
                  alt=""
                />
                <h5
                  className="absolute top-0 text-[#E5E5E5] text-[0.9vw] leading-[0.9vw]
             uppercase px-[2vw] py-[16vh] font-semibold"
                >
                  The spirit of street culture with high- <br />
                  quality craftsmanship
                </h5>
              </div>
            </div>
            <div className="right w-1/2" ref={rightRef}>
              <div className="relative h-[100vh]">
                <img
                  className="w-full h-full object-cover absolute top-[-100vh]"
                  src="./images/right-side-image2.jpg"
                  alt=""
                />
                <h5
                  className="sticky top-[4em] text-[#E5E5E5] text-[0.9vw] leading-[0.9vw]
             uppercase px-[2vw] py-[16vh] font-semibold"
                >
                  Express your individuality
                </h5>
              </div>
              <div className="relative h-[100vh]">
                <img
                  className="w-full h-full object-cover absolute top-[-100vh]"
                  src="./images/right-side-image1.jpg"
                  alt=""
                />
                <h5
                  className="sticky top-0 text-[#E5E5E5] text-[0.9vw] leading-[0.9vw]
             uppercase px-[2vw] py-[16vh] font-semibold"
                >
                  The art of streetwear: quality and style redefined
                </h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MarqueeProducts;
