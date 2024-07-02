import React from "react";
import CloseIcon from "../../../images/header/icon-close.svg";

const CartInfo = ({ handleClose }) => {
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
      <p>Your cart is currently empty.</p>
    </section>
  );
};

export default CartInfo;
