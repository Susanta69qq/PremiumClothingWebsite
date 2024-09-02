import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/home/Contact.jsx'
import Catalog from './components/home/Catalog.jsx'
import ProductBuyPage from './components/home/ProductBuyPage.jsx'

const cartItems = [
  { id: "1",
    productType: "Novelist T-Shirt",
    price: "$135.00",
    description:
      "Elevate your style with the Novelist T-Shirt, available exclusively in off-white. Made in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, this premium tee features a small logo on the left chest and a distinctive 'flair' interpretation on the back, reminiscent of an old newspaper article. Combining exceptional quality with a unique design, it’s a sophisticated staple for those who appreciate both classic elegance and modern style.",
    color: ["Sugar Swizzle"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesSugar: [
      "./images/sugarswizzle/sugarswizzle1.jpg",
      "./images/sugarswizzle/sugarswizzle2.jpg",
      "./images/sugarswizzle/sugarswizzle3.jpg",
      "./images/sugarswizzle/sugarswizzle4.jpg",
    ],
  },
  { id: "2",
    productType: "Monogram T-Shirt",
    price: "$99.00",
    description:
      "Elevate your style with the Monogram T-Shirt, available in Persian Violet and Frosty Green. Made in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, this tee features a small logo on the left chest and a bold LF monogram sprayed print on the back with the word 'Studios.' Perfect for a modern, luxury look.",
    color: ["Frosty Green", "Persian Violet"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesGreen: [
      "./images/frostygreen/frostygreen1.jpg",
      "./images/frostygreen/frostygreen2.jpg",
      "./images/frostygreen/frostygreen3.jpg",
      "./images/frostygreen/frostygreen4.jpg",
    ],
    imagesViolet: [
      "./images/persianviolet/persianviolet1.jpg",
      "./images/persianviolet/persianviolet2.jpg",
      "./images/persianviolet/persianviolet3.jpg",
      "./images/persianviolet/persianviolet4.jpg",
    ],
  },
  { id: "3",
    productType: "Monogram T-Shirt",
    price: "$99.00",
    description:
      "Elevate your style with the Monogram T-Shirt, available in Persian Violet and Frosty Green. Made in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, this tee features a small logo on the left chest and a bold LF monogram sprayed print on the back with the word 'Studios.' Perfect for a modern, luxury look.",
    color: ["persianviolet", "frostygreen"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesViolet: [
      "./images/persianviolet/persianviolet1.jpg",
      "./images/persianviolet/persianviolet2.jpg",
      "./images/persianviolet/persianviolet3.jpg",
      "./images/persianviolet/persianviolet4.jpg",
    ],
    imagesGreen: [
      "./images/frostygreen/frostygreen1.jpg",
      "./images/frostygreen/frostygreen2.jpg",
      "./images/frostygreen/frostygreen3.jpg",
      "./images/frostygreen/frostygreen4.jpg",
    ],
  },
  { id: "4",
    productType: "Classic Logo T-Shirt",
    price: "$85.00",
    description:
      "The Classic Logo T-Shirt is essential for any wardrobe, available in black and white. Crafted in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, it features a small, minimalistic logo on the center chest. Ideal for everyday wear, it offers durability and refined style.",
    color: ["White", "Black"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesWhite: [
      "./images/classicwhite/classicwhite.jpg",
      "./images/classicwhite/classicwhite2.jpg",
      "./images/classicwhite/classicwhite3.jpg",
      "./images/classicwhite/classicwhite4.jpg",
    ],
    imagesBlack: [
      "./images/classicblack/classicblack.jpg",
      "./images/classicblack/classicblack2.jpg",
      "./images/classicblack/classicblack3.jpg",
      "./images/classicblack/classicblack4.jpg",
    ],
  },
  { id: "5",
    productType: "Classic Logo T-Shirt",
    price: "$85.00",
    description:
      "The Classic Logo T-Shirt is essential for any wardrobe, available in black and white. Crafted in Portugal from 100% high-quality cotton with heavyweight 275gsm fabric, it features a small, minimalistic logo on the center chest. Ideal for everyday wear, it offers durability and refined style.",
    color: ["Black", "White"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesBlack: [
      "./images/classicblack/classicblack.jpg",
      "./images/classicblack/classicblack2.jpg",
      "./images/classicblack/classicblack3.jpg",
      "./images/classicblack/classicblack4.jpg",
    ],
    imagesWhite: [
      "./images/classicwhite/classicwhite.jpg",
      "./images/classicwhite/classicwhite2.jpg",
      "./images/classicwhite/classicwhite3.jpg",
      "./images/classicwhite/classicwhite4.jpg",
    ],
  },
  { id: "6",
    productType: "Splat T-Shirt",
    price: "$115.00",
    description:
      "Make a statement with the Splat T-Shirt, available in Blue Grass, Black, and White, each with unique splat accents. This 100% cotton tee, made in Portugal from heavyweight 275gsm fabric, includes a small logo on the left chest and a dynamic splat graffiti design on the back with a 'flair' definition. Add a bold splash of color to your wardrobe and showcase your individuality.",
    color: ["White", "Black", "Blue Grass"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesWhite2: [
      "./images/imageswhite2/imageswhite2(1).jpg",
      "./images/imageswhite2/imageswhite2(2).jpg",
      "./images/imageswhite2/imageswhite2(3).jpg",
      "./images/imageswhite2/imageswhite2(4).jpg",
    ],
    imagesBlack2: [
      "./images/imageblack2/imageblack2(1).jpg",
      "./images/imageblack2/imageblack2(2).jpg",
      "./images/imageblack2/imageblack2(3).jpg",
      "./images/imageblack2/imageblack2(4).jpg",
    ],
    imagesGrass: [
      "./images/bluegrass/bluegrass.jpg",
      "./images/bluegrass/bluegrass2.jpg",
      "./images/bluegrass/bluegrass3.jpg",
      "./images/bluegrass/bluegrass4.jpg",
    ],
  },
  { id: "7",
    productType: "Splat T-Shirt",
    price: "$115.00",
    description:
      "Make a statement with the Splat T-Shirt, available in Blue Grass, Black, and White, each with unique splat accents. This 100% cotton tee, made in Portugal from heavyweight 275gsm fabric, includes a small logo on the left chest and a dynamic splat graffiti design on the back with a 'flair' definition. Add a bold splash of color to your wardrobe and showcase your individuality.",
    color: ["Black", "White", "Blue Grass"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesBlack2: [
      "./images/imageblack2/imageblack2(1).jpg",
      "./images/imageblack2/imageblack2(2).jpg",
      "./images/imageblack2/imageblack2(3).jpg",
      "./images/imageblack2/imageblack2(4).jpg",
    ],
    imagesWhite2: [
      "./images/imageswhite2/imageswhite2(1).jpg",
      "./images/imageswhite2/imageswhite2(2).jpg",
      "./images/imageswhite2/imageswhite2(3).jpg",
      "./images/imageswhite2/imageswhite2(4).jpg",
    ],
    imagesGrass: [
      "./images/bluegrass/bluegrass.jpg",
      "./images/bluegrass/bluegrass2.jpg",
      "./images/bluegrass/bluegrass3.jpg",
      "./images/bluegrass/bluegrass4.jpg",
    ],
  },
  { id: "8",
    productType: "Splat T-Shirt",
    price: "$115.00",
    description:
      "Make a statement with the Splat T-Shirt, available in Blue Grass, Black, and White, each with unique splat accents. This 100% cotton tee, made in Portugal from heavyweight 275gsm fabric, includes a small logo on the left chest and a dynamic splat graffiti design on the back with a 'flair' definition. Add a bold splash of color to your wardrobe and showcase your individuality.",
    color: ["Blue Grass", "Black", "White"],
    size: ["S", "M", "L", "XL", "XXL"],
    button: ["Buy Now", "Add to Cart"],
    imagesGrass: [
      "./images/bluegrass/bluegrass.jpg",
      "./images/bluegrass/bluegrass2.jpg",
      "./images/bluegrass/bluegrass3.jpg",
      "./images/bluegrass/bluegrass4.jpg",
    ],
    imagesBlack2: [
      "./images/imageblack2/imageblack2(1).jpg",
      "./images/imageblack2/imageblack2(2).jpg",
      "./images/imageblack2/imageblack2(3).jpg",
      "./images/imageblack2/imageblack2(4).jpg",
    ],
    imagesWhite2: [
      "./images/imageswhite2/imageswhite2(1).jpg",
      "./images/imageswhite2/imageswhite2(2).jpg",
      "./images/imageswhite2/imageswhite2(3).jpg",
      "./images/imageswhite2/imageswhite2(4).jpg",
    ],
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/catalog",
    element: <Catalog />
  },
  {
    path: "products/:id",
    element: <ProductBuyPage products={cartItems} />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
