import MenuClose from "../../images/header/icon-close.svg";

const NavContent = ({ isOpen, handleMenuDisplay }) => {
  const listItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <aside
      className={`absolute z-50 w-[50vh] p-12 bg-white left-0 top-0 h-screen shadow-lg transform transition-transform duration-300 md:w-auto md:p-0 md:relative md:block md:items-center md:h-auto md:translate-x-0 md:bg-transparent md:shadow-none ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${isOpen ? "" : "hidden"}
      }`}
    >
      <img
        className="mb-16 mt-2 cursor-pointer hover:opacity-80 md:hidden"
        src={MenuClose}
        alt=""
        onClick={handleMenuDisplay}
      />
      <ul className="md:flex md:gap-4 md:flex-1 md:justify-evenly items-center">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="md:mt-2 mt-4 mb-0 font-bold text-xl cursor-pointer transition-opacity duration-300 hover:opacity-80"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NavContent;
