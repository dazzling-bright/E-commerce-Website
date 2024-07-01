import MenuClose from "../../images/header/icon-close.svg";

const NavContent = ({ isOpen, handleMenuDisplay }) => {
    const listItems = ["Collections", "Men", "Women", "About", "Contact"];
  
    return (
      <aside
        className={`absolute z-50 w-[50vh] p-12 bg-white left-0 top-0 h-screen shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          className="mb-16 mt-2 cursor-pointer hover:opacity-80"
          src={MenuClose}
          alt=""
          onClick={handleMenuDisplay}
        />
        <ul>
          {listItems.map((item, index) => (
            <li
              key={index}
              className="mt-4 font-bold text-xl cursor-pointer transition-opacity duration-300 hover:opacity-80"
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    );
  };

export default NavContent;