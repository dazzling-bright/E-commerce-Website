import { useState } from "react";
import AddToCart from "./addToCart";
import ProductOne from "../../../images/body/product-1.jpg";
import ProductTwo from "../../../images/body/product-2.jpg";
import ProductThree from "../../../images/body/product-3.jpg";
import ProductFour from "../../../images/body/product-4.jpg";
import CartInput from "./cartInput";
import ItemPrice from "./itemPrice";
import ItemDescription from "./itemDescription";
import ItemFigure from "./itemFigure";

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
    <main className="flex flex-col md:flex-row md:gap-4 lg:gap-8 justify-center items-center text-xl md:mt-24 md:px-8">
      {/** Item image */}
      <ItemFigure
        images={images}
        currentImageIndex={currentImageIndex}
        handlePreviousImage={handlePreviousImage}
        handleNextImage={handleNextImage}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      <section className="mx-auto px-2 md:px-4 flex flex-col md:w-1/2 gap-4">
        <ItemDescription />
        <ItemPrice />
        <CartInput
          itemValue={itemValue}
          handleAddItem={handleAddItem}
          handleSubtractItem={handleSubtractItem}
          handleChange={handleChange}
        />
        <AddToCart />
      </section>
    </main>
  );
};

export default MainContent;
