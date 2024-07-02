import AddToCart from "./addToCart";

const CartInfo = () => {
  return (
    <aside className="flex flex-col leading-8 absolute max-w-4xl w-full md:w-1/2 px-8 py-4 rounded-2xl top-full right-[20%] mt-2 bg-white border ">
      <p>
        <p className="md:text-nowrap">
          Fall Limited Edition Sneakers $125.00 * 3
        </p>
        <span className="font-bold">$375.00</span>
      </p>
      <AddToCart text="Checkout" showImage={false} />
    </aside>
  );
};

export default CartInfo;
