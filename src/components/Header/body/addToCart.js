import CartIcon from "../../../images/header/icon-cart.svg";
import styles from "./css/addToCart.module.css";

function AddToCart() {
  return (
    <button
      className={`${styles.addToCart} group relative flex items-center bg-orange rounded-2xl p-4 text-very-dark-blue justify-center`}
    >
      <img src={CartIcon} alt="Cart Icon" className="relative z-10" />
      <span className="ml-3 font-bold relative z-10">Add to cart</span>
    </button>
  );
}

export default AddToCart;
