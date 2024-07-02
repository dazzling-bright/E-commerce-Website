import CartIcon from "../../../images/header/icon-cart.svg";

function AddToCart() {
  return (
    /** Add to Cart Button */
    <button className="flex items-center bg-orange rounded-2xl p-4 text-very-dark-blue justify-center">
      <img src={CartIcon} alt="Cart Icon" />
      <span className="ml-3 font-bold">Add to cart</span>
    </button>
  );
}

export default AddToCart;
