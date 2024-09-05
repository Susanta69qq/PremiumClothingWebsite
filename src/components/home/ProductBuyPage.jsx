import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CartContext } from "../../CartContext";

gsap.registerPlugin(ScrollTrigger);

const cartItems = [
  {
    id: "novelist-t-shirt-sugar-swizzzle",
    productType: "Novelist T-Shirt",
    price: "$135.00",
    description:
      "Elevate your style with the Novelist T-Shirt, available exclusively in off-white. Made in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, this premium tee features a small logo on the left chest and a distinctive 'flair' interpretation on the back, reminiscent of an old newspaper article. Combining exceptional quality with a unique design, it’s a sophisticated staple for those who appreciate both classic elegance and modern style.",
    color: ["Sugar Swizzle"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/sugarswizzle.jpg",
        "images/sugarswizzle2.jpg",
        "images/sugarswizzle3.jpg",
        "images/sugarswizzle4.jpg",
      ],
    },
  },
  {
    id: "monogram-t-shirt-frosty-green",
    productType: "Monogram T-Shirt",
    price: "$99.00",
    description:
      "Elevate your style with the Monogram T-Shirt, available in Persian Violet and Frosty Green. Made in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, this tee features a small logo on the left chest and a bold LF monogram sprayed print on the back with the word 'Studios.' Perfect for a modern, luxury look.",
    color: ["Frosty Green", "Persian Violet"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/frostygreen.jpg",
        "images/frostygreen2.jpg",
        "images/frostygreen3.jpg",
        "images/frostygreen4.jpg",
      ],
      image2: [
        "images/persianviolet.jpg",
        "images/persianviolet2.jpg",
        "images/persianviolet3.jpg",
        "images/persianviolet4.jpg",
      ],
    },
  },
  {
    id: "monogram-t-shirt-persian-violet",
    productType: "Monogram T-Shirt",
    price: "$99.00",
    description:
      "Elevate your style with the Monogram T-Shirt, available in Persian Violet and Frosty Green. Made in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, this tee features a small logo on the left chest and a bold LF monogram sprayed print on the back with the word 'Studios.' Perfect for a modern, luxury look.",
    color: ["persianviolet", "frostygreen"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/persianviolet.jpg",
        "images/persianviolet2.jpg",
        "images/persianviolet3.jpg",
        "images/persianviolet4.jpg",
      ],
      image2: [
        "images/frostygreen.jpg",
        "images/frostygreen2.jpg",
        "images/frostygreen3.jpg",
        "images/frostygreen4.jpg",
      ],
    },
  },
  {
    id: "classic-logo-t-shirt-white",
    productType: "Classic Logo T-Shirt",
    price: "$85.00",
    description:
      "The Classic Logo T-Shirt is essential for any wardrobe, available in black and white. Crafted in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, it features a small, minimalistic logo on the center chest. Ideal for everyday wear, it offers durability and refined style.",
    color: ["White", "Black"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/classicwhite.jpg",
        "images/classicwhite2.jpg",
        "images/classicwhite3.jpg",
        "images/classicwhite4.jpg",
      ],
      image2: [
        "images/classicblack.jpg",
        "images/classicblack2.jpg",
        "images/classicblack3.jpg",
        "images/classicblack4.jpg",
      ],
    },
  },
  {
    id: "classic-logo-t-shirt-black",
    productType: "Classic Logo T-Shirt",
    price: "$85.00",
    description:
      "The Classic Logo T-Shirt is essential for any wardrobe, available in black and white. Crafted in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, it features a small, minimalistic logo on the center chest. Ideal for everyday wear, it offers durability and refined style.",
    color: ["Black", "White"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/classicblack.jpg",
        "images/classicblack2.jpg",
        "images/classicblack3.jpg",
        "images/classicblack4.jpg",
      ],
      image2: [
        "images/classicwhite.jpg",
        "images/classicwhite2.jpg",
        "images/classicwhite3.jpg",
        "images/classicwhite4.jpg",
      ],
    },
  },
  {
    id: "splat-t-shirt-white",
    productType: "Splat T-Shirt",
    price: "$115.00",
    description:
      "Make a statement with the Splat T-Shirt, available in Blue Grass, Black, and White, each with unique splat accents. This 100% cotton tee, made in Portugal from heavyweight 275gsm fabric, includes a small logo on the left chest and a dynamic splat graffiti design on the back with a 'flair' definition. Add a bold splash of color to your wardrobe and showcase your individuality.",
    color: ["White", "Black", "Blue Grass"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/imageswhite2.jpg",
        "images/imageswhite2(2).jpg",
        "images/imageswhite2(3).jpg",
        "images/imageswhite2(4).jpg",
      ],
      image2: [
        "images/imageblack2.jpg",
        "images/imageblack2(2).jpg",
        "images/imageblack2(3).jpg",
        "images/imageblack2(4).jpg",
      ],
      image3: [
        "images/bluegrass.jpg",
        "images/bluegrass2.jpg",
        "images/bluegrass3.jpg",
        "images/bluegrass4.jpg",
      ],
    },
  },
  {
    id: "splat-t-shirt-black",
    productType: "Splat T-Shirt",
    price: "$115.00",
    description:
      "Make a statement with the Splat T-Shirt, available in Blue Grass, Black, and White, each with unique splat accents. This 100% cotton tee, made in Portugal from heavyweight 275gsm fabric, includes a small logo on the left chest and a dynamic splat graffiti design on the back with a 'flair' definition. Add a bold splash of color to your wardrobe and showcase your individuality.",
    color: ["Black", "White", "Blue Grass"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/imagesblack2.jpg",
        "images/imagesblack2(2).jpg",
        "images/imagesblack2(3).jpg",
        "images/imagesblack2(4).jpg",
      ],
      image2: [
        "images/imageswhite2.jpg",
        "images/imageswhite2(2).jpg",
        "images/imageswhite2(3).jpg",
        "images/imageswhite2(4).jpg",
      ],
      image3: [
        "images/bluegrass.jpg",
        "images/bluegrass2.jpg",
        "images/bluegrass3.jpg",
        "images/bluegrass4.jpg",
      ],
    },
  },
  {
    id: "splat-t-shirt-blue-grass",
    productType: "Splat T-Shirt",
    price: "$115.00",
    description:
      "Make a statement with the Splat T-Shirt, available in Blue Grass, Black, and White, each with unique splat accents. This 100% cotton tee, made in Portugal from heavyweight 275gsm fabric, includes a small logo on the left chest and a dynamic splat graffiti design on the back with a 'flair' definition. Add a bold splash of color to your wardrobe and showcase your individuality.",
    color: ["Blue Grass", "Black", "White"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    images: {
      image1: [
        "images/bluegrass.jpg",
        "images/bluegrass2.jpg",
        "images/bluegrass3.jpg",
        "images/bluegrass4.jpg",
      ],
      image2: [
        "images/imagesblack2.jpg",
        "images/imagesblack2(2).jpg",
        "images/imagesblack2(3).jpg",
        "images/imagesblack2(4).jpg",
      ],
      image3: [
        "images/imageswhite2.jpg",
        "images/imageswhite2(2).jpg",
        "images/imageswhite2(3).jpg",
        "images/imageswhite2(4).jpg",
      ],
    },
  },
];

function ProductBuyPage() {
  const imgRef = useRef(null);
  const containerRef = useRef();
  const { id } = useParams();
  const product = cartItems.find((item) => item.id === id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect(() => {
    if (!isMobile) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: true,
      });

      gsap.to(imgRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isMobile]);

  const mobileView = (
    <div
        className="product-page w-full bg-[#F1F1F1] px-[2vw] 
    flex  max-sm:flex-col-reverse gap-[10vw] items-stretch justify-between overflow-hidden max-sm:mt-[6vh]"
        style={{ paddingBottom: "10vh" }}
      >
        <div className="texts pt-[8vh] w-[50%] max-sm:w-full">
          <div className="head leading-7">
            <h1 className="font-[main] text-[2vw] max-sm:text-[6vw]">{product.productType}</h1>
            <h5 className="font-[main] text-[2vw] max-sm:text-[6vw] text-[#6F6F6F]">
              {product.price}
            </h5>
          </div>
          <div className="description leading-4 mt-[2vh]">
            <p className="text-[1vw] max-sm:text-[4vw] max-sm:leading-[5vw] w-[45vw] max-sm:w-full">{product.description}</p>
          </div>
          <div className="border border-dotted border-gray-300 mt-[4vh]"></div>
          <div className="color mt-[1vh]">
            <h5 className="font-[main] text-[1vw] max-sm:text-[4vw]">Color</h5>
            <div className="flex gap-[0.25vw] pt-[1.5vh]">
              {product.color.map((item, index) => (
                <div key={index}>
                  <button className="px-[1.2vw] max-sm:px-[4vw] py-[.7vw] max-sm:py-[1vh] bg-[#000] text-[#F1F1F1] 
                  text-[.95vw] max-sm:text-[4vw]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-dotted border-gray-300 mt-[4vh]"></div>
          <div className="size mt-[1vh]">
            <h5 className="font-[main] text-[1vw] max-sm:text-[4vw]">Size</h5>
            <div className="flex gap-[0.25vw] max-sm:gap-[1vw] pt-[1.5vh]">
              {product.size.map((s, index) => (
                <div
                  key={index}
                  className="px-[1.5vw] py-[.7vw] bg-[#000] text-[#F1F1F1] text-[.95vw]
                  max-sm:text-[4vw] max-sm:px-[4vw] max-sm:py-[1vh]"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="buttons mt-[3vh] flex max-sm:flex-col gap-[.5vw] max-sm:gap-[1vh]">
            {product.button.map((b, index) => (
              <button
                key={index}
                onClick={() => addToCart(product)}
                className={`px-[8vw] py-[1vw] max-sm:py-[3vw] bg-[#000] font-[main] 
            text-[#F1F1F1] text-[.9vw] max-sm:text-[4vw] rounded-[.3vw]`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>


        <div className="images flex flex-row-reverse items-start gap-[.7vw] mt-[8vh] w-[50%] max-sm:w-full overflow-hidden">
          <div className="largeImg flex flex-col gap-[1vw]">
            {product.images.image1.map((image, index) => (
              <img
                key={`image1-${index}`}
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={`Product image1 ${index}`}
                className="max-w-[100%] object-cover rounded-[.5vw]"
              />
            ))}
          </div>
          <div className="smallImg flex flex-col gap-[.5vw] max-sm:hidden">
            {product.images.image1.map((image, index) => (
              <img
                key={`image1-${index}`}
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={`Product image1 ${index}`}
                className="w-[20vw] object-cover rounded-[.2vw]"
              />
            ))}
          </div>
        </div>
      </div>
  )

  return (
    <div>
      {isMobile ? mobileView : (
        <div
        className="product-page w-full bg-[#F1F1F1] px-[2vw] 
    flex gap-[10vw] items-stretch justify-between overflow-hidden"
        style={{ paddingBottom: "10vh" }}
      >
        <div ref={containerRef} className="texts pt-[8vh] w-[50%]">
          <div className="head leading-7">
            <h1 className="font-[main] text-[2vw]">{product.productType}</h1>
            <h5 className="font-[main] text-[2vw] text-[#6F6F6F]">
              {product.price}
            </h5>
          </div>
          <div className="description leading-4 mt-[2vh]">
            <p className="text-[1vw] w-[45vw]">{product.description}</p>
          </div>
          <div className="border border-dotted border-gray-300 mt-[4vh]"></div>
          <div className="color mt-[1vh]">
            <h5 className="font-[main] text-[1vw]">Color</h5>
            <div className="flex gap-[0.25vw] pt-[1.5vh]">
              {product.color.map((item, index) => (
                <div key={index}>
                  <button className="px-[1.2vw] py-[.7vw] bg-[#000] text-[#F1F1F1] text-[.95vw]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-dotted border-gray-300 mt-[4vh]"></div>
          <div className="size mt-[1vh]">
            <h5 className="font-[main] text-[1vw]">Size</h5>
            <div className="flex gap-[0.25vw] pt-[1.5vh]">
              {product.size.map((s, index) => (
                <div
                  key={index}
                  className="px-[1.5vw] py-[.7vw] bg-[#000] text-[#F1F1F1] text-[.95vw]"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="buttons mt-[3vh] flex gap-[.5vw]">
            {product.button.map((b, index) => (
              <button
                key={index}
                onClick={() => addToCart(product)}
                className={`px-[8vw] py-[1vw] bg-[#000] font-[main] 
            text-[#F1F1F1] text-[.9vw] rounded-[.3vw]`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        <div className="images flex flex-row-reverse items-start gap-[.7vw] mt-[8vh] w-[50%] overflow-hidden">
          <div ref={imgRef} className="largeImg flex flex-col gap-[1vw]">
            {product.images.image1.map((image, index) => (
              <img
                key={`image1-${index}`}
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={`Product image1 ${index}`}
                className="max-w-[100%] object-cover rounded-[.5vw]"
              />
            ))}
          </div>
          <div className="smallImg flex flex-col gap-[.5vw]">
            {product.images.image1.map((image, index) => (
              <img
                key={`image1-${index}`}
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={`Product image1 ${index}`}
                className="w-[20vw] object-cover rounded-[.2vw]"
              />
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default ProductBuyPage;
