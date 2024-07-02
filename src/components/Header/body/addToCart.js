import CartIcon from "../../../images/header/icon-cart.svg";
import styles from "./css/addToCart.module.css";

const Button = ({
  text = "Add to cart",
  showImage = true,
  imageSrc = CartIcon,
  handleAddToCart,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick || handleAddToCart} // Use onClick if provided, fallback to handleAddToCart
      className={`${styles.addToCart} ${className} group relative flex items-center w-full bg-orange rounded-2xl p-4 text-very-dark-blue justify-center`}
    >
      {showImage && <img src={imageSrc} alt="Icon" className="relative z-10" />}
      <span className="ml-3 font-bold relative z-10">{text}</span>
    </button>
  );
};

export default Button;
