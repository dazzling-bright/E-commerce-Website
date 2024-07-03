import React from "react";
import AddItemIcon from "../../../images/body/icon-plus.svg";
import SubtractItemIcon from "../../../images/body/icon-minus.svg";

const CartInput = ({
  itemValue,
  handleAddItem,
  handleSubtractItem,
  handleChange,
}) => {
  return (
    <div className="flex items-center">
      <img
        src={AddItemIcon}
        alt="Add Item"
        onClick={handleAddItem}
        className="shadow-ld bg-slate-300 px-4 py-6  rounded-lg hover:cursor-pointer"
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
        className="hover:cursor-pointer shadow-sm rounded-lg bg-slate-300 py-6 px-4 self-stretch object-contain"
      />
    </div>
  );
};

export default CartInput;
