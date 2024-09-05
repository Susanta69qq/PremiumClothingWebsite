import React, { useState } from "react";
import Footer from "../home/Footer";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Catalog() {
  const [showOptions, setShowOptions] = useState(null);
  const [sortOption, setSortOption] = useState("featured");

  const toggleView = () => {
    setShowOptions(!showOptions);
  };

  const images = [
    {
      id: "novelist-t-shirt-sugar-swizzzle",
      url: "./images/featured6.jpg",
      brand: "THE PROLOGUE",
      type: "Novelist T-Shirt",
      price: "$135.00",
      colorOptions: ["#8C8DAB"],
      hoverImg: "./images/hoverimg6.jpg",
    },
    {
      id: "monogram-t-shirt-frosty-green",
      url: "./images/featured8.jpg",
      brand: "THE PROLOGUE",
      type: "Monogram T-Shirt",
      price: "$99.00",
      colorOptions: ["#A1B5A7", "#8C8DAB"],
      hoverImg: "./images/hoverimg8.jpg",
    },
    {
      id: "monogram-t-shirt-persian-violet",
      url: "./images/featured2.jpg",
      brand: "THE PROLOGUE",
      type: "Monogram T-Shirt",
      price: "$99.00",
      colorOptions: ["#8C8DAB", "#A1B5A7"],
      hoverImg: "./images/hoverimg2.jpg",
    },
    {
      id: "classic-logo-t-shirt-white",
      url: "./images/featured3.jpg",
      brand: "THE PROLOGUE",
      type: "Classic Logo T-Shirt",
      price: "$99.00",
      colorOptions: ["#8C8DAB", "#262628"],
      hoverImg: "./images/hoverimg3.jpg",
    },
    {
      id: "classic-logo-t-shirt-black",
      url: "./images/featured4.jpg",
      brand: "THE PROLOGUE",
      type: "Classic Logo T-Shirt",
      price: "$85.00",
      colorOptions: ["#A1B5A7", "#262628"],
      hoverImg: "./images/hoverimg4.jpg",
    },
    {
      id: "splat-t-shirt-white",
      url: "./images/featured7.jpg",
      brand: "THE PROLOGUE",
      type: "Splat T-Shirt",
      price: "$115.00",
      colorOptions: ["#8C8DAB", "#262628", "#007C7A"],
      hoverImg: "./images/hoverimg7.jpg",
    },
    {
      id: "splat-t-shirt-black",
      url: "./images/featured5.jpg",
      brand: "THE PROLOGUE",
      type: "Splat T-Shirt",
      price: "$115.00",
      colorOptions: ["#262628", "#8C8DAB", "#007C7A"],
      hoverImg: "./images/hoverimg5.jpg",
    },
    {
      id: "splat-t-shirt-blue-grass",
      url: "./images/featured1.jpg",
      brand: "THE PROLOGUE",
      type: "Splat T-Shirt",
      price: "$115.00",
      colorOptions: ["#A1B5A7", "#8C8DAB"],
      hoverImg: "./images/hoverimg1.jpg",
    },
  ];

  const sortImages = (images, sortOption) => {
    switch (sortOption) {
      case "price, low to high":
        return images.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
        );
      case "price, high to low":
        return images.sort(
          (a, b) =>
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
        );
      case "Alphabetically, A-Z":
        return images.sort((a, b) => a.type.localeCompare(b.type));
      case "Featured":
      default:
        return images;
    }
  };

  const sortedImages = sortImages([...images], sortOption);

  return (
    <div className="w-full min-h-screen bg-[#E0E0E0] relative">
      <div
        className="header py-[6vh] max-sm:py-[3vh] flex max-sm:flex-col gap-[54vw] max-sm:gap-[0] 
        max-sm:items-start items-center text-[4vw] max-sm:text-[14vw] font-[Parabole]
      tracking-tighter px-[2vw] max-sm:leading-none"
      >
        <h1>Catalog</h1>
        <h1>8 Products</h1>
      </div>
      <div
        onClick={toggleView}
        className="w-[20vw] max-sm:w-[70vw] mb-[4vh] px-[2.5vw] flex items-center gap-[0.1vw] cursor-pointer"
      >
        <h5 className="text-[0.8vw] max-sm:text-[4.5vw] font-[main]">
          Sort by: &nbsp; {sortOption}{" "}
        </h5>
        <span className="text-[2vw] max-sm:text-[8vw]">
          <i class="ri-arrow-down-s-fill"></i>
        </span>
        <div
          className={`bg-black absolute top-[30vh] max-sm:top-[24vh] left-[5vw] max-sm:left-[20vw] 
            text-white max-sm:w-[55vw] px-[1vw] max-sm:px-[3vw] py-[1.5vh] max-sm:py-[2vh] 
            text-[0.8vw] max-sm:text-[4vw] flex flex-col gap-[1vh] z-10 ${
              showOptions ? "block" : "hidden"
            }`}
        >
          <h5 onClick={() => setSortOption("Featured")}>Featured</h5>
          <h5 onClick={() => setSortOption("price, low to high")}>
            Price, low to high
          </h5>
          <h5 onClick={() => setSortOption("price, high to low")}>
            Price, high to low
          </h5>
          <h5 onClick={() => setSortOption("Alphabetically, A-Z")}>
            Alphabetically, A-Z
          </h5>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 max-sm:grid-cols-1 gap-[0.2vw] mb-[15vh] max-sm:mb-[8vh]">
        {sortedImages.map((image, index) => (
          <Link to={`/product/${image.id}`}>
            <div key={index} className="relative group overflow-hidden">
              <img
                className="w-[85vw] max-sm:w-full h-[85vh] max-sm:h-full object-cover relative transition-all duration-300 ease-in-out"
                src={image.url}
                alt=""
              />
              <img
                className="w-[85vw] h-[85vh] object-cover absolute top-0 hidden 
            group-hover:block transition-all duration-300 ease-in-out max-sm:opacity-0"
                src={image.hoverImg}
                alt=""
              />
              <div
                className="absolute bottom-[-8%] max-sm:bottom-0 left-0 bg-[#F1F1F1] w-full 
              px-[2vw] py-[1.5vh] max-sm:py-[1vh]
            group-hover:bottom-0 transition-all duration-300 ease-in-out"
              >
                <h5 className="text-[0.8vw] max-sm:text-[4vw] max-sm:font-semibold text-gray-500 tracking-tight">
                  {image.brand}
                </h5>
                <div
                  className="flex justify-between text-[0.8vw] max-sm:text-[4.5vw] mt-[1vh] 
              font-[main] pb-[3vh] max-sm:pb-[0.5vh]"
                >
                  <h5>{image.type}</h5>
                  <h5>{image.price}</h5>
                </div>
                <div className="flex space-x-[0.25vw] max-sm:space-x-[1vw]">
                  {image.colorOptions.map((color, i) => (
                    <div
                      key={i}
                      className="w-[30px] h-[30px] rounded-full border-[1px] border-black border-opacity-50"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
