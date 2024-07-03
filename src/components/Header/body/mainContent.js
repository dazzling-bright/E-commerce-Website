import React, { useState } from "react";
import Button from "./addToCart";
import ProductOne from "../../../images/body/product-1.jpg";
import ProductTwo from "../../../images/body/product-2.jpg";
import ProductThree from "../../../images/body/product-3.jpg";
import ProductFour from "../../../images/body/product-4.jpg";
import CartInput from "./cartInput";
import ItemPrice from "./itemPrice";
import ItemDescription from "./itemDescription";
import ImageCarousel from "./itemFigure";

const MainContent = ({
  itemValue,
  handleAddItem,
  handleSubtractItem,
  handleChange,
  handleAddToCart,
}) => {
  const images = [ProductOne, ProductTwo, ProductThree, ProductFour];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <main className="flex flex-col md:flex-row md:gap-4 lg:gap-8 justify-center items-center text-xl md:mt-32 md:px-8 relative">
      <ImageCarousel
        images={images}
        currentImageIndex={currentImageIndex}
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
        <Button handleAddToCart={handleAddToCart} />
      </section>
    </main>
  );
};

export default MainContent;
