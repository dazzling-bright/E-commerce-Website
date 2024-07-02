import CartIcon from "../../../images/header/icon-cart.svg";
import styles from "./css/addToCart.module.css";

const AddToCart = ({
  text = "Add to cart",
  showImage = true,
  imageSrc = CartIcon,
}) => {
  return (
    <button
      className={`${styles.addToCart} group relative flex items-center bg-orange rounded-2xl p-4 text-very-dark-blue justify-center`}
    >
      {showImage && <img src={imageSrc} alt="Icon" className="relative z-10" />}
      <span className="ml-3 font-bold relative z-10">{text}</span>
    </button>
  );
};

export default AddToCart;
