import CartIcon from "../../../images/header/icon-cart.svg";
import ProductOne from "../../../images/body/product-1.jpg";
const MainContent = () => {
  return (
    <main className="flex-col md:flex-row">
      <figure className="max-h-[300px] overflow-hidden">
        <img
          className="h-full w-full block object-contain"
          src={ProductOne}
          alt="a beautifulsneakers with a white sole and orange body"
        />
      </figure>

      <section className="px-8 md:px-4 gap-8">
        <h2 className="font-bold"> sneaker company </h2>
        <h3 className="font-bold"> Fall Limited Edition Sneakers </h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between items-center">
          <>
            <p>
              $125<span className="ml-4">50%</span>
            </p>
          </>
          <span className="">$250.00</span>
        </div>

        <div className="flex flex-1 justify-between">
          <button> - </button>
          <p>0</p>
          <button> + </button>
        </div>

        <button className="flex items-center bg-orange  rounded p-2 text-white ">
          <img src={CartIcon} alt="" />
          <span className="ml-3">Add to cart</span>
        </button>
      </section>
    </main>
  );
};

export default MainContent;
