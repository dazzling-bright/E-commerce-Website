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
import Thumbnail from "./thumbnail";

const MainContent = () => {
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
    <main className="flex flex-col md:flex-row  md:gap-4 lg:gap-8 justify-center items-center text-xl md:mt-24 md:px-8">
      <figure className="overflow-hidden md:w-1/2">
        <div className="relative">
          <img
            className=" h-full w-full block rounded-2xl mb-4 max-h-[600px] md:max-h-[400px] object-cover"
            src={images[currentImageIndex]}
            alt="a beautiful sneakers with a white sole and orange body"
          />
          <img
            src={IconPrevious}
            alt="Previous Icon"
            onClick={handlePreviousImage}
            className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute bottom-[2%] left-[2%]"
          />
          <img
            src={IconNext}
            alt="Next Icon"
            onClick={handleNextImage}
            className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute top-[2%] right-[2%]"
          />
        </div>
        <Thumbnail
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      </figure>

      <section className="mx-auto px-2 md:px-4 flex flex-col md:w-1/2 gap-4">
        <h2 className="font-bold mt-4 uppercase text-grayish-blue tracking-wide">
          sneaker company
        </h2>
        <h3 className="font-bold text-4xl ">Fall Limited Edition Sneakers</h3>
        <p className="text-grayish-blue leading-8">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-very-dark-blue text-4xl font-bold">
              $125.00
            </span>
            <span className="ml-4 bg-very-dark-blue text-white p-2 rounded-lg text-sm align-top">
              50%
            </span>
          </p>

          <span className="line-through">$250.00</span>
        </div>

        {/** Cart quantity Input Section */}
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
            className="text-center mx-2 flex-1 w-full placeholder:text-black outline-offset-8 outline-orange border border-pale-orange shadow-sm rounded-lg py-4"
          />
          <img
            src={SubtractItemIcon}
            alt="Subtract Item"
            onClick={handleSubtractItem}
            className="hover:cursor-pointer shadow-sm rounded-lg bg-slate-100 py-6 px-4 self-stretch object-contain"
          />
        </div>

        {/** Add to Cart Button */}
        <button className="flex items-center bg-orange rounded-2xl p-4 text-very-dark-blue justify-center">
          <img src={CartIcon} alt="Cart Icon" />
          <span className="ml-3 font-bold">Add to cart</span>
        </button>
      </section>
    </main>
  );
};

export default MainContent;
