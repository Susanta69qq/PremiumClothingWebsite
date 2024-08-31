import React, { useEffect, useState } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);



  return (
    <div className="w-full">
      <div className="relative">
        <video
          className="w-full object-cover max-sm:h-screen"
          src="./videos/LeflairVideo.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="w-full px-[2vw] py-[4vh] max-sm:py-[4vh] absolute top-0">
          <div className="header flex flex-col items-start gap-[3vw] max-sm:gap-[3vh]">
            <h1 className="text-[#F1F1F1] text-[3vw] max-sm:text-[5vw] leading-[3vw] max-sm:leading-[5vw] tracking-tight">
              Embrace the essence of Le Flair Studios <br /> and become a part
              of a movement that <br /> celebrates individuality.
            </h1>
            <button
              className="text-[#F1F1F1] text-[0.8vw] max-sm:text-[4vw] border-[1px] max-sm:border-[1px] 
            border-[#F1F1F1] px-[3vw] max-sm:px-[13vw] py-[2vh]"
            >
              Shop All
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 max-sm:left-0 px-[2vw] py-[4vh]">
          <div className="bg-[#F1F1F1] px-[1.5vw] py-[3vh]">
            <div className="flex flex-col gap-[2vh] max-sm:gap-[1vh]">
              <h5 className="font-[main] text-[0.8vw] max-sm:text-[4vw]">
                Be the first to know about the latest drops
              </h5>
              <input
                className="bg-[#E0E0E0] w-full text-[#000] px-[1vw] max-sm:px-[3vw] py-[2.5vh] text-[0.8vw] 
                max-sm:text-[4vw] placeholder:text-[#000] placeholder:font-bold"
                type="text"
                placeholder="Enter first name"
              />
              <input
                className="bg-[#E0E0E0] w-full text-[#000] px-[1vw] max-sm:px-[3vw] py-[2.5vh] text-[0.8vw] 
                max-sm:text-[4vw] placeholder:text-[#000] placeholder:font-bold"
                type="text"
                placeholder="Enter e-mail address"
              />
            </div>
            <div>
              <div className="mt-[5vh] max-sm:mt-[3vh] flex max-sm:flex-col gap-[3vw] max-sm:gap-[3vh] items-center max-sm:items-start">
                <p className="text-[0.8vw] max-sm:text-[3.7vw] leading-[1vw] max-sm:leading-[4vw]">
                  By signing up you agree to receive recurring automated <br />{" "}
                  marketing messages from Le Flair Studious.
                </p>
                <button
                  className="text-[#F1F1F1] max-sm:w-full text-[0.8vw] max-sm:text-[4vw] bg-[#3400D0] 
                  border-[1px] border-[#3400D0] px-[1.6vw] py-[2vh] rounded-[0.2vw]"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#010101]">
        <div className="mb-[10vh] max-sm:mb-[5vh] px-[2vw] py-[6vh] max-sm:py-[1vh]">
          <img className="w-[10vw] max-sm:w-[35vw]" src="./images/logo.svg" alt="" />
        </div>
        <div className="features flex max-sm:flex-col justify-between items-center max-sm:items-start relative">
          <div className="absolute w-[100%] h-[100%] border-[1px] border-[#F1F1F1] border-dotted border-opacity-50"></div>
          {[
            {
              title: "International Shipping",
              content:
                "We offer international shipping to over 50 countries, ensuring our products reach customers around the globe.",
            },
            {
              title: "Easy Returns",
              content:
                "To make a return you must send an email to: customer@leflairstudios.com specifying the order number and the reason for the return so that we can respond to you to best provide you with all the information you need to proceed with the return.",
            },
            {
              title: "Easy Payment",
              content:
                "We utilize Stripe to offer a comprehensive and secure payment experience, accommodating all client needs with options such as credit card and Apple Pay.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-[5vh] px-[2vw] py-[2vh] 
            border-[#F1F1F1] max-sm:border-none border-r border-dotted border-opacity-30"
            >
              <h5 className="text-[#fff] text-[1.1vw] max-sm:text-[4vw]">{feature.title}</h5>
              <p className="text-[#F1F1F1] w-[28vw] max-sm:w-[100%] text-[0.7vw] max-sm:text-[3.5vw]">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#010101] flex justify-between px-[2vw] py-[4vh]">
        {[
          {
            title: "Menu",
            content: ["Home", "Catalog", "About", "Journal"],
          },
          {
            title: "Shop",
            content: ["All", "Drops"],
          },
          {
            title: "Support",
            content: [
              "Shipping and Delivery",
              "Payment Methods",
              "Returns and Refunds",
              "Terms of Service",
              "Privacy Policy",
              "Contact",
            ],
          },
        ].map((e, index) => (
          <div key={index} className="flex flex-col gap-[2vh]">
            <h5 className="text-[#fff] text-[0.9vw] max-sm:text-[4vw]">{e.title}</h5>
            <div className="flex flex-col gap-[0.3vh]">
              {e.content.map((cont, index) => (
                <a
                  key={index}
                  className="text-[#F1F1F1] text-[0.7vw] max-sm:text-[3vw] cursor-pointer hover:opacity-75"
                >
                  {cont}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="flex gap-[1vw]">
          <div
            className="bg-[#A9A9A9] p-[0.5vw] w-[3vw] max-sm:w-[8vw] h-[3vw] max-sm:h-[8vw] 
            flex items-center justify-center 
          rounded-full hover:opacity-80"
          >
            <img
              className="w-[1.5vw] max-sm:w-[4vw]"
              src="./images/instagramicon.svg"
              alt=""
            />
          </div>
          <div
            className="bg-[#A9A9A9] p-[0.5vw] w-[3vw] max-sm:w-[8vw] h-[3vw] max-sm:h-[8vw] 
            flex items-center justify-center 
          rounded-full hover:opacity-80"
          >
            <img className="w-[1.5vw] max-sm:w-[4vw]" src="./images/facebookicon.svg" alt="" />
          </div>
          <div
            className="bg-[#A9A9A9] p-[0.5vw] w-[3vw] max-sm:w-[8vw] h-[3vw] max-sm:h-[8vw] 
            flex items-center justify-center 
          rounded-full hover:opacity-80"
          >
            <img className="w-[1.5vw] max-sm:w-[4vw]" src="./images/youtubeicon.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#010101] flex justify-between px-[2vw] py-[8vh] max-sm:py-[4vh] relative">
        <div className="w-full absolute left-0 border-[1px] border-[#F1F1F1] border-dotted border-opacity-50"></div>
        <div className="w-full mt-[4vh] flex justify-between items-center">
          <h5 className="text-[#F1F1F1] text-[0.7vw] max-sm:text-[3.5vw] font-bold">
            LeFlair Studios
          </h5>
          <p className="text-[#F1F1F1] text-[0.7vw] max-sm:text-[3.5vw]">
            © 2024 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
