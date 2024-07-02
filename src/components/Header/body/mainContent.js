// import { useState } from "react";
// import CartIcon from "../../../images/header/icon-cart.svg";
// import ProductOne from "../../../images/body/product-1.jpg";
// import AddItemIcon from "../../../images/body/icon-plus.svg";
// import SubtractItemIcon from "../../../images/body/icon-minus.svg";
// import IconNext from "../../../images/body/icon-next.svg";
// import IconPrevious from "../../../images/body/icon-previous.svg";

// const MainContent = () => {
//   const [itemValue, setItemValue] = useState(0);

//   const handleChange = (event) => {
//     const value = parseInt(event.target.value, 10);
//     setItemValue(isNaN(value) ? 0 : value);
//   };

//   const handleAddItem = () => {
//     setItemValue((prevValue) => prevValue + 1);
//   };

//   const handleSubtractItem = () => {
//     setItemValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
//   };

//   return (
//     <main className="flex flex-col md:flex-row md:gap-4 lg:gap-8 justify-center items-center  text-xl px-4 md:mt-24 md:px-8">
//       <figure className="relative max-h-[600px] overflow-hidden md:w-1/2 rounded-2xl">
//         <img
//           className="h-full w-full block"
//           src={ProductOne}
//           alt="a beautiful sneakers with a white sole and orange body"
//         />

//         <img
//           src={IconPrevious}
//           alt=""
//           className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute  top-[50%] left-[4%]"
//         />
//         <img
//           src={IconNext}
//           alt=""
//           className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute  top-[50%] right-[4%]"
//         />
//       </figure>

//       <section className="px-8 md:px-4 flex flex-col md:w-1/2 gap-4 ">
//         <h2 className="font-bold mt-4">sneaker company</h2>
//         <h3 className="font-bold">Fall Limited Edition Sneakers</h3>
//         <p>
//           These low-profile sneakers are your perfect casual wear companion.
//           Featuring a durable rubber outer sole, they’ll withstand everything
//           the weather can offer.
//         </p>
//         <div className="flex justify-between items-center">
//           <p>
//             $125
//             <span className="ml-4 bg-black text-white p-1 rounded-lg text-xs align-top">
//               50%
//             </span>
//           </p>

//           <span>$250.00</span>
//         </div>
//         <div className="flex items-center">
//           <img
//             src={AddItemIcon}
//             alt="Add Item"
//             onClick={handleAddItem}
//             className=" bg-slate-100 px-4 py-6 shadow-sm rounded-lg hover:cursor-pointer"
//           />

//           <input
//             type="text"
//             value={itemValue}
//             onChange={handleChange}
//             placeholder="0"
//             className="text-center mx-2 flex-1 placeholder:text-black outline-offset-8 outline-orange border border-pale-orange shadow-sm rounded-lg py-4"
//           />
//           <img
//             src={SubtractItemIcon}
//             alt="Subtract Item"
//             onClick={handleSubtractItem}
//             className="hover:cursor-pointer  shadow-sm rounded-lg  bg-slate-100 py-6 px-4 self-stretch object-contain"
//           />
//         </div>

//         <button className="flex items-center bg-orange rounded p-2 text-white justify-center">
//           <img src={CartIcon} alt="Cart Icon" />
//           <span className="ml-3">Add to cart</span>
//         </button>
//       </section>
//     </main>
//   );
// };

// export default MainContent;

import { useState } from "react";
import CartIcon from "../../../images/header/icon-cart.svg";
import ProductOne from "../../../images/body/product-1.jpg";
import ProductTwo from "../../../images/body/product-2.jpg";
import ProductThree from "../../../images/body/product-3.jpg";
import ProductFour from "../../../images/body/product-4.jpg";
import AddItemIcon from "../../../images/body/icon-plus.svg";
import SubtractItemIcon from "../../../images/body/icon-minus.svg";
import IconNext from "../../../images/body/icon-next.svg";
import IconPrevious from "../../../images/body/icon-previous.svg";

const MainContent = () => {

  // logic to change the images when the `next` and `previous` icons are clicked
  const images = [ProductOne, ProductTwo, ProductThree, ProductFour]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [itemValue, setItemValue] = useState(0);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setItemValue(isNaN(value) ? 0 : value);
  };

  const handleAddItem = () => {
    setItemValue((prevValue) => prevValue + 1);
  };

  const handleSubtractItem = () => {
    setItemValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="flex flex-col md:flex-row md:gap-4 lg:gap-8 justify-center items-center text-xl px-4 md:mt-24 md:px-8">
      <figure className="relative max-h-[600px] overflow-hidden md:w-1/2 rounded-2xl">
        <img
          className="h-full w-full block"
          src={images[currentImageIndex]}
          alt="a beautiful sneakers with a white sole and orange body"
        />

        <img
          src={IconPrevious}
          alt="Previous Icon"
          onClick={handlePreviousImage}
          className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute top-[50%] left-[4%]"
        />
        <img
          src={IconNext}
          alt="Next Icon"
          onClick={handleNextImage}
          className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute top-[50%] right-[4%]"
        />
      </figure>

      <section className="px-8 md:px-4 flex flex-col md:w-1/2 gap-4">
        <h2 className="font-bold mt-4">sneaker company</h2>
        <h3 className="font-bold">Fall Limited Edition Sneakers</h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between items-center">
          <p>
            $125
            <span className="ml-4 bg-black text-white p-1 rounded-lg text-xs align-top">
              50%
            </span>
          </p>

          <span>$250.00</span>
        </div>
        <div className="flex items-center">
          <img
            src={AddItemIcon}
            alt="Add Item"
            onClick={handleAddItem}
            className="bg-slate-100 px-4 py-6 shadow-sm rounded-lg hover:cursor-pointer"
          />

          <input
            type="text"
            value={itemValue}
            onChange={handleChange}
            placeholder="0"
            className="text-center mx-2 flex-1 placeholder:text-black outline-offset-8 outline-orange border border-pale-orange shadow-sm rounded-lg py-4"
          />
          <img
            src={SubtractItemIcon}
            alt="Subtract Item"
            onClick={handleSubtractItem}
            className="hover:cursor-pointer shadow-sm rounded-lg bg-slate-100 py-6 px-4 self-stretch object-contain"
          />
        </div>

        <button className="flex items-center bg-orange rounded p-2 text-white justify-center">
          <img src={CartIcon} alt="Cart Icon" />
          <span className="ml-3">Add to cart</span>
        </button>
      </section>
    </main>
  );
};

export default MainContent;
