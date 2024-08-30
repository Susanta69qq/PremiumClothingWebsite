import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Featured() {
  const featuredDescriptions = [
    {
      id: 1,
      name: "The Prologue",
      type: "Monogram T-shirt",
      price: "$99.00",
    },
    {
      id: 2,
      name: "The Prologue",
      type: "Splat T-shirt",
      price: "$115.00",
    },
    {
      id: 3,
      name: "The Prologue",
      type: "Classic Logo T-shirt",
      price: "$85.00",
    },
    {
      id: 4,
      name: "The Prologue",
      type: "Classic Logo T-shirt",
      price: "$85.00",
    },
    {
      id: 5,
      name: "The Prologue",
      type: "Splat T-shirt",
      price: "$115.00",
    },
    {
      id: 6,
      name: "The Prologue",
      type: "Novelist T-shirt",
      price: "$135.00",
    },
    {
      id: 7,
      name: "The Prologue",
      type: "Splat T-shirt",
      price: "$115.00",
    },
    {
      id: 8,
      name: "The Prologue",
      type: "Monogram T-shirt",
      price: "$99.00",
    },
  ];

  const images = [
    {
      id: 1,
      image: "./images/featured1.jpg",
    },
    {
      id: 2,
      image: "./images/featured2.jpg",
    },
    {
      id: 3,
      image: "./images/featured3.jpg",
    },
    {
      id: 4,
      image: "./images/featured4.jpg",
    },
    {
      id: 5,
      image: "./images/featured5.jpg",
    },
    {
      id: 6,
      image: "./images/featured6.jpg",
    },
    {
      id: 7,
      image: "./images/featured7.jpg",
    },
    {
      id: 8,
      image: "./images/featured8.jpg",
    },
  ];

  const colorOptions = [
    <div className="flex gap-[3px]" key={1}>
      <div className="w-[30px] h-[30px] bg-[#007C7A] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#262628] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
    </div>,
    <div className="flex gap-[3px]" key={2}>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#A1B5A7] rounded-full"></div>
    </div>,
    <div className="flex gap-[3px]" key={3}>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#262628] rounded-full"></div>
    </div>,
    <div className="flex gap-[3px]" key={4}>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#262628] rounded-full"></div>
    </div>,
    <div className="flex gap-[3px]" key={5}>
      <div className="w-[30px] h-[30px] bg-[#262628] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#007C7A] rounded-full"></div>
    </div>,
    <div className="flex gap-[3px]" key={6}>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
    </div>,
    <div className="flex gap-[3px]" key={7}>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#262628] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#007C7A] rounded-full"></div>
    </div>,
    <div className="flex gap-[3px]" key={8}>
      <div className="w-[30px] h-[30px] bg-[#A1B5A7] rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-[#8C8DAB] rounded-full"></div>
    </div>,
  ];

  const hoverImages = [
    {
      id: 1,
      pic: "./images/hoverimg1.jpg",
    },
    {
      id: 2,
      pic: "./images/hoverimg2.jpg",
    },
    {
      id: 3,
      pic: "./images/hoverimg3.jpg",
    },
    {
      id: 4,
      pic: "./images/hoverimg4.jpg",
    },
    {
      id: 5,
      pic: "./images/hoverimg5.jpg",
    },
    {
      id: 6,
      pic: "./images/hoverimg6.jpg",
    },
    {
      id: 7,
      pic: "./images/hoverimg7.jpg",
    },
    {
      id: 8,
      pic: "./images/hoverimg8.jpg",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen mt-[10vh] ">
        <div className="header flex justify-between items-center px-[2vw]">
          <h1 className="text-[4vw] font-main tracking-tighter">Featured</h1>
          <div>
            <button className="text-white bg-[#3400D0] px-[3vw] py-[2vh] text-[0.8vw]">
              All Products
            </button>
          </div>
        </div>
        <div className="mt-[3vh]">
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {images.map((image, index) => (
              <SwiperSlide
                className="mySwiper group ease-in-out duration-300 relative"
                key={image.id}
              >
                <img
                  className="w-full h-full object-cover"
                  src={image.image}
                  alt=""
                />
                <img
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity 
                  duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                  src={hoverImages[index].pic}
                  alt=""
                />
                <div
                  className="imgText w-full bg-[#F1F1F1] px-[1vw] absolute bottom-[-10%] 
                ease-in-out duration-500 group-hover:bottom-[0%]"
                >
                  <h1 className="text-[0.8vw] uppercase pt-[1vh] font-semibold mb-[1vh]">
                    {featuredDescriptions[index].name}
                  </h1>
                  <div className="flex justify-between items-center pb-[2vh]">
                    <h1 className="text-[0.8vw] font-semibold">
                      {featuredDescriptions[index].type}
                    </h1>
                    <h1 className="text-[0.8vw] font-semibold">
                      {featuredDescriptions[index].price}
                    </h1>
                  </div>
                  <div className="pb-2">
                    <div className="color">{colorOptions[index]}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Featured;
