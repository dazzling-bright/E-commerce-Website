import MenuClose from "../../images/header/icon-close.svg";

const NavContent = ({ isOpen, handleMenuDisplay }) => {
  const listItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav
      className={`absolute z-50 w-[60vh] p-12 opacity-100 bg-white left-0 top-0 h-screen shadow-lg transform transition-transform duration-300 md:w-auto md:p-0 md:relative md:block md:items-center md:h-auto md:translate-x-0 md:bg-transparent md:shadow-none ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }  ${isOpen ? "" : "w-0 h-0 overflow-hidden"}
     
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
            className="md:mt-2 mt-4 font-bold sm:hover:ml-2 md:hover:ml-4  md:mx-1 lg:mx-3 py-4 md:py-8 text-xl cursor-pointer hover:opacity-80 border-b-4 border-transparent hover:border-orange transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavContent;
