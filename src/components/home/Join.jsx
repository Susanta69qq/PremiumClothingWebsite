import React, { useState, useEffect } from "react";

function Join() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/statusimg1.jpg",
    "/images/statusimg2.jpg",
    "/images/statusimg3.jpg",
    "/images/statusimg4.jpg",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileText = (
    <p className="text-[1vw] max-sm:text-[4.5vw] tracking-tighter leading-[1.2vw] max-sm:leading-[5vw]">
      At Le Flair Studios, we believe that everyone has <br /> their own unique
      flair a special something that <br /> differentiates you from everyone
      else. It is in your <br /> DNA, and we want you to magnify it, not erase
      it.
    </p>
  );

  const mobileImageView = (
    <div className="flex flex-row gap-[2vw]">
      {images.map((image, index) => (
        <div className="relative" key={index}>
          <img
            className="w-[6vw] max-sm:w-[25vw] object-cover"
            src={image}
            alt={`status-img-${index}`}
          />
          <div
            className="absolute top-0 left-0 w-full bg-[#0000008a] transition-all duration-[5s]"
            style={{
              height: index === currentIndex ? "100%" : "0%",
            }}
          />
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full bg-[#F1F1F1] px-[2vw] flex max-sm:flex-col max-sm:gap-[5vw] 
    justify-between py-[10vh] max-sm:py-[7vh]">
      <div className="left">
        <h1 className="text-[3.5vw] max-sm:text-[9vw] tracking-tight font-[parabole] max-sm:font-semibold">
          Join the Community
        </h1>
        {isMobile ? (
          mobileText
        ) : (
          <p className="text-[1vw] max-sm:text-[4vw] tracking-tighter leading-[1.2vw] max-sm:leading-[4vw]">
            At Le Flair Studios, we believe that everyone has their own unique{" "}
            <br />
            flair a special something that differentiates you from everyone
            else. <br />
            It is in your DNA, and we want you to magnify it, not erase it.
          </p>
        )}
        <button
          className="border-[1px] border-black bg-[#3400D0] 
        text-white px-[3vw] max-sm:px-[12vw] max-sm:py-[1.5vh] py-[2vh] text-[0.8vw] max-sm:text-[4vw] font-semibold tracking-tight mt-[4vh]"
        >
          About Us
        </button>
      </div>
      <div className="right flex max-sm:flex-col-reverse gap-[1vw] max-sm:gap-[4vw]">
        {isMobile ? (
          mobileImageView
        ) : (
          <div className="flex flex-col gap-[0.5vw]">
            {images.map((image, index) => (
              <div className="relative" key={index}>
                <img
                  className="w-[6vw] max-sm:w-[20vw] object-cover"
                  src={image}
                  alt={`status-img-${index}`}
                />
                <div
                  className="absolute top-0 left-0 w-full bg-[#0000008a] transition-all duration-[5s]"
                  style={{
                    height: index === currentIndex ? "100%" : "0%",
                  }}
                />
              </div>
            ))}
          </div>
        )}
        <div>
          <img
            className="w-full h-full object-cover"
            src={images[currentIndex]}
            alt="current-status-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Join;
