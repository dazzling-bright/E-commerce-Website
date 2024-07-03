import React from "react";
import CloseIcon from "../../../images/header/icon-close.svg";
import Button from "./addToCart";

const CartInfo = ({
  itemValue,
  handleClose,
  handleClearCart,
  handleRemoveItem,
}) => {
  return (
    <section className="flex flex-col leading-8 absolute z-50 max-w-4xl w-5/6 left-0 right-0 md:w-1/2 px-8 py-4 rounded-2xl top-full mt-2 mx-auto bg-white border">
      {/* Close icon */}
      <img
        src={CloseIcon}
        alt="Close"
        className="cursor-pointer absolute top-2 right-2"
        onClick={handleClose}
      />

      {/* Cart content */}
      <h3 className="text-lg font-bold mb-2">Cart</h3>
      {itemValue > 0 ? (
        <div className="flex flex-col">
          <p>You now have {itemValue} item(s) in your cart.</p>
          <div className="flex space-x-2 mb-2">
            <Button
              onClick={handleClearCart}
              showImage={false}
              text="Clear Cart"
              className="text-pale-orange"
            />
            <Button
              onClick={handleRemoveItem}
              showImage={false}
              text="Remove Item"
              className="text-pale-orange"
            />
          </div>
          <>
            <Button
              showImage={false}
              text="Checkout"
              className="text-pale-orange"
            />
          </>
        </div>
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </section>
  );
};

export default CartInfo;
