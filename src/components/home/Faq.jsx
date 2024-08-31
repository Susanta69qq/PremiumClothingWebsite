import React, { useEffect, useState } from "react";

function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleShow = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I choose the right size for my order?",
      answer:
        "To choose the right size, refer to our detailed size guide available on each product page. It includes measurements and tips for finding your perfect fit. If you have any specific questions, our customer service team is here to help.",
    },
    {
      question: "How often is the assortment of the collection updated?",
      answer:
        "We do up to four drops each year with limited quantity and no restock.",
    },
    {
      question: "Where is our clothing manufactured?",
      answer:
        "Our clothing is manufactured in a reputable facility in Portugal that prioritizes quality and ethical practices. We work closely with our production partners to ensure high standards are maintained throughout the manufacturing process.",
    },
    {
      question: "Do you deliver internationally?",
      answer:
        "Yes, we offer international delivery. Shipping times and costs vary depending on your location. Please check our shipping and information page for more details on international delivery options.",
    },
    {
      question: "Can I return an item?",
      answer:
        "Damaged Items: If your product arrives damaged, report it within 24 hours by emailing customer@leflairstudios.com with photos of the damage. We will provide a 'resend code' and cover the costs for returning the damaged goods. Note: Refunds are not available; exchange only. Product Exchange: If the product size doesn't match, you can return it and select the correct size. Note: That any additional shipping costs and potential customs fees will be the customer's responsibility.",
    },
  ];

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const mobileHeader = (
    <h1 className="font-[parabole] text-[9vw] leading-[9vw] font-semibold mb-[2vh] tracking-tight">
      Frequently Asked <br /> Questions
    </h1>
  );

  const footerHeader = (
    <p className="font-[main] text-[1vw] max-sm:text-[4vw] leading-[1.2vw] max-sm:leading-[5vw]">
      Didn't find an answer to your question? You can <br /> always check our
      list of essential information{" "}
      <a className="text-[#3400D0] underline">here</a> or <br /> submit your
      question to our support team <br />
      <a className="text-[#3400D0] underline">customer@leflairstudios.com</a>
    </p>
  );

  return (
    <div className="w-full px-[2vw] mb-[10vh]">
      {isMobile ? (
        mobileHeader
      ) : (
        <h1 className="font-[parabole] text-[3.5vw] mb-[4vh] tracking-tight">
          Frequently Asked Questions
        </h1>
      )}
      <div className="questions mb-[2vh]">
        {faqs.map((faq, index) => {
          return (
            <div
              onClick={() => toggleShow(index)}
              className="flex justify-between items-start cursor-pointer"
              key={index}
            >
              <div className="w-full relative pt-[2vh] pb-[2vh]">
                <div
                  className="dottedLine w-[94vw] absolute top-0 left-0 border-t-[1px]
               border-dotted border-t-[#868B85]"
                ></div>
                <h1
                  className="text-[1.8vw] max-sm:text-[5vw] max-sm:w-[80vw] max-sm:leading-[5vw] tracking-tighter mb-[1.5vh] 
                max-sm:mb-[0.2vh]"
                >
                  {faq.question}
                </h1>
                <div
                  className={`w-[61vw] max-sm:w-[92vw] text-[1.1vw] max-sm:text-[4.5vw] max-sm:text-gray-500 leading-[1.2vw] max-sm:leading-[4.5vw]
                    transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] overflow-hidden ${
                      openFaq === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                >
                  <p className="pt-[1vh]">{faq.answer}</p>
                </div>
              </div>
              <div
                className={`text-[3vw] max-sm:text-[9vw] font-light transition-transform duration-500 
                    ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
                      openFaq === index ? "rotate-45" : "rotate-0"
                    }`}
              >
                +
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {isMobile ? (
          footerHeader
        ) : (
          <p className="font-[main] text-[1vw] max-sm:text-[4.5vw] leading-[1.2vw] max-sm:leading-[4.5vw]">
            Didn't find an answer to your question? You can always check our
            list of <br /> essential information{" "}
            <a className="text-[#3400D0] underline">here</a> or submit your
            question to our support team <br />{" "}
            <a className="text-[#3400D0] underline">
              customer@leflairstudios.com
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Faq;
