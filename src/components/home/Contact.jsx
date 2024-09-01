import React, { useEffect, useState } from "react";

function Contact() {
  const [show, setShow] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOptions = () => {
    setShow(!show);
  };

  const mobileView = (
    <div className="flex justify-between max-sm:flex-col max-sm:gap-[8vw]">
      <div className="left flex flex-col gap-[2vw] max-sm:gap-[8vw] max-sm:mt-[-18vw]">
        {[
          { id: "General Inquiries", content: "customer@leflairstudios.com" },
          {
            id: "Head of office",
            content: "Hafergasse 14, Kalsdorf bei Graz, Styria 8401, Austria",
          },
          { id: "Hours", content: "Mon-Fri 9:00AM — 4:00PM" },
          { id: "Press Inquiries", content: "press@leflairstudios.com" },
        ].map((item, index) => (
          <div key={index}>
            <h5 className="font-[main] text-gray-500 text-[0.9vw] max-sm:text-[4.5vw]">
              {item.id}
            </h5>
            <p
              className="font-[main] text-[0.9vw] max-sm:text-[4.5vw] mt-[0.5vh] max-sm:mt-[0.25vh] 
              w-[15vw] max-sm:w-[65vw] max-sm:leading-5"
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="right w-[35vw] max-sm:w-[96vw] pb-[2vw]">
        <h1 className="text-[3vw] max-sm:text-[10vw] tracking-tighter mb-[1.5vw] max-sm:mb-[3vw]">
          Ask us a question
        </h1>
        <div
          onClick={toggleOptions}
          className="chooseSubject w-full bg-[#E0E0E0] px-[1vw] max-sm:px-[4vw] py-[1.5vh] max-sm:py-[2vw] 
                flex justify-between items-center mb-[0.5vw] cursor-pointer relative"
        >
          <h5 className="font-[main] text-[0.8vw] max-sm:text-[4vw] text-black font-semibold">
            Choose a subject
          </h5>
          <span className="text-[1.7vw] max-sm:text-[6vw]">
            <i className={`ri-arrow-${show ? "up" : "down"}-s-line`}></i>
          </span>
        </div>
        <div className="w-[35vw] max-sm:w-[96vw] flex flex-col absolute shadow-xl">
          {[
            { id: "Problem with order" },
            { id: "I need a help with purchase" },
            { id: "Delivery issue" },
            { id: "Other" },
          ].map((item, index) => (
            <div
              key={index}
              className={`w-full bg-[#E0E0E0] px-[1vw] max-sm:px-[4vw] py-[1.5vh] max-sm:py-[2vh] 
             flex justify-between cursor-pointer
                transition-all duration-300 ease-in-out
              ${show ? "block" : "hidden"} ${
                index > 0 &&
                "border-t-[2px] border-[#000] border-dotted border-opacity-10"
              }`}
            >
              <h5 className="font-[main] text-[0.8vw] max-sm:text-[4vw]">
                {item.id}
              </h5>
              <input className="w-[5vw]" type="checkbox" />
            </div>
          ))}
        </div>
        <div className="mt-[1vw] flex flex-col gap-[1vw] max-sm:gap-[2vw]">
          <div className="flex max-sm:flex-col gap-[0.8vw] max-sm:gap-[2vw]">
            <input
              className="w-full text-[0.8vw] max-sm:text-[4.5vw] font-[main] bg-[#E0E0E0] px-[1vw] py-[1.5vh] 
              max-sm:px-[4vw] max-sm:py-[1.5vh]
               outline-none 
                placeholder:text-[4vw] placeholder:text-black placeholder:font-[main]"
              type="text"
              placeholder="Name*"
            />
            <input
              className="w-full text-[0.8vw] max-sm:text-[4.5vw] font-[main] bg-[#E0E0E0] px-[1vw] py-[1.5vh] 
              max-sm:px-[4vw] max-sm:py-[1.5vh]
               outline-none 
                placeholder:text-[4vw] placeholder:text-black placeholder:font-[main]"
              type="email"
              placeholder="Email*"
            />
          </div>
          <input
            className="w-full text-[0.8vw] max-sm:text-[4.5vw] font-[main] bg-[#E0E0E0] px-[1vw] py-[1.5vh] 
            max-sm:px-[4vw] max-sm:py-[1.5vh]
             outline-none 
                placeholder:text-[4vw] placeholder:text-black placeholder:font-[main]"
            type="text"
            placeholder="Phone*"
          />
          <textarea
            className="w-full text-[0.8vw] max-sm:text-[4.5vw] font-[main] h-[25vh] max-sm:h-[15vh] bg-[#E0E0E0] px-[1vw] py-[1.5vh] max-sm:px-[4vw] 
            max-sm:py-[1.5vh] outline-none 
            placeholder:text-[4vw] placeholder:text-black placeholder:font-[main] resize-none"
            placeholder="Message*"
          />
        </div>
        <div className="mt-[1.7vw] max-sm:mt-[3vw] flex flex-col gap-[0.6vw]">
          <h5 className="font-[main] text-[0.8vw] max-sm:text-[4.5vw]">
            Preferred method of contact?
          </h5>
          <div className="flex gap-[1.5vw] max-sm:gap-[8vw]">
            <div className="flex gap-[0.5vw] max-sm:gap-[2vw] items-center">
              <input className="max-sm:w-[5vw]" type="checkbox" />
              <h3 className="font-[main] text-[1vw] max-sm:text-[4.5vw]">
                Email
              </h3>
            </div>
            <div className="flex gap-[0.5vw] items-center">
              <input className="max-sm:w-[5vw]" type="checkbox" />
              <h3 className="font-[main] text-[1vw] max-sm:text-[4.5vw]">
                Phone
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-[2vw] max-sm:mt-[4vw]">
          <button
            className="w-full text-[0.9vw] max-sm:text-[4.5vw] font-[main] bg-[#3400D0] 
            text-white px-[1vw] py-[1.5vh]"
          >
            Send Message
          </button>
        </div>
      </div>
      <div
        className="mt-[10vh] max-sm:mt-[1vh] border-[0.5px] max-sm:border-[2px] border-[#000] 
        border-dotted border-opacity-30
          w-[22vw] max-sm:w-full h-[20vh] relative hover:border-opacity-100 cursor-pointer max-sm:mb-[5vh]"
      >
        <h1 className="text-[1.5vw] max-sm:text-[6.5vw] left-[2vw] top-[1vh] absolute">
          FAQs
        </h1>
        <span className="absolute right-[2vw] bottom-[1vh] text-[1.5vw] max-sm:text-[6.5vw]">
          <i class="ri-arrow-right-up-line"></i>
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen px-[2vw]">
      <div className="header py-[10vh] max-sm:pt-[5vh]">
        <h1 className="font-[parabole] text-[5vw] max-sm:text-[15vw] tracking-tighter">
          Contact
        </h1>
      </div>
      {isMobile ? (
        mobileView
      ) : (
        <div className="flex justify-between">
          <div className="left flex flex-col gap-[2vw]">
            {[
              {
                id: "General Inquiries",
                content: "customer@leflairstudios.com",
              },
              {
                id: "Head of office",
                content:
                  "Hafergasse 14, Kalsdorf bei Graz, Styria 8401, Austria",
              },
              { id: "Hours", content: "Mon-Fri 9:00AM — 4:00PM" },
              { id: "Press Inquiries", content: "press@leflairstudios.com" },
            ].map((item, index) => (
              <div key={index}>
                <h5 className="font-[main] text-gray-500 text-[0.9vw]">
                  {item.id}
                </h5>
                <p className="font-[main] text-[0.9vw] mt-[0.5vh] w-[15vw]">
                  {item.content}
                </p>
              </div>
            ))}
            <div
              className="mt-[10vh] border-[0.5px] border-[#000] border-dotted border-opacity-30
          w-[22vw] h-[20vh] relative hover:border-opacity-100 cursor-pointer"
            >
              <h1 className="text-[1.5vw] left-[1vw] top-[1vh] absolute">
                FAQs
              </h1>
              <span className="absolute right-[1vw] bottom-[1vh] text-[1.5vw]">
                <i class="ri-arrow-right-up-line"></i>
              </span>
            </div>
          </div>
          <div className="right w-[35vw] pb-[2vw]">
            <h1 className="text-[3vw] tracking-tighter mb-[1.5vw]">
              Ask us a question
            </h1>
            <div
              onClick={toggleOptions}
              className="chooseSubject w-full bg-[#E0E0E0] px-[1vw] py-[1.5vh] 
                flex justify-between items-center mb-[0.5vw] cursor-pointer relative"
            >
              <h5 className="font-[main] text-[0.8vw] text-black font-semibold">
                Choose a subject
              </h5>
              <span className="text-[1.7vw]">
                <i className={`ri-arrow-${show ? "up" : "down"}-s-line`}></i>
              </span>
            </div>
            <div className="w-[35vw] flex flex-col absolute">
              {[
                { id: "Problem with order" },
                { id: "I need a help with purchase" },
                { id: "Delivery issue" },
                { id: "Other" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-full bg-[#E0E0E0] px-[1vw] py-[1.5vh] flex justify-between cursor-pointer
                transition-all duration-300 ease-in-out
              ${show ? "block" : "hidden"} ${
                    index > 0 &&
                    "border-t-[2px] border-[#000] border-dotted border-opacity-10"
                  }`}
                >
                  <h5 className="font-[main] text-[0.8vw]">{item.id}</h5>
                  <input type="checkbox" />
                </div>
              ))}
            </div>
            <div className="mt-[1vw] flex flex-col gap-[1vw]">
              <div className="flex gap-[0.8vw]">
                <input
                  className="w-full text-[0.8vw] font-[main] bg-[#E0E0E0] px-[1vw] py-[1.5vh] outline-none 
                placeholder:text-[0.8vw] placeholder:text-black placeholder:font-[main]"
                  type="text"
                  placeholder="Name*"
                />
                <input
                  className="w-full text-[0.8vw] font-[main] bg-[#E0E0E0] px-[1vw] py-[1.5vh] outline-none 
                placeholder:text-[0.8vw] placeholder:text-black placeholder:font-[main]"
                  type="email"
                  placeholder="Email*"
                />
              </div>
              <input
                className="w-full text-[0.8vw] font-[main] bg-[#E0E0E0] px-[1vw] py-[1.5vh] outline-none 
                placeholder:text-[0.8vw] placeholder:text-black placeholder:font-[main]"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="w-full text-[0.8vw] font-[main] h-[25vh] bg-[#E0E0E0] px-[1vw] py-[1.5vh] outline-none 
    placeholder:text-[0.8vw] placeholder:text-black placeholder:font-[main] resize-none"
                placeholder="Message*"
              />
            </div>
            <div className="mt-[1.7vw] flex flex-col gap-[0.6vw]">
              <h5 className="font-[main] text-[0.8vw]">
                Preferred method of contact?
              </h5>
              <div className="flex gap-[1.5vw]">
                <div className="flex gap-[0.5vw] items-center">
                  <input type="checkbox" />
                  <h3 className="font-[main] text-[1vw]">Email</h3>
                </div>
                <div className="flex gap-[0.5vw] items-center">
                  <input type="checkbox" />
                  <h3 className="font-[main] text-[1vw]">Phone</h3>
                </div>
              </div>
            </div>
            <div className="mt-[2vw]">
              <button
                className="w-full text-[0.9vw] font-[main] bg-[#3400D0] 
            text-white px-[1vw] py-[2.5vh]"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
