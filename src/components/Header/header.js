import React, { useState } from "react";
import MenuIcon from "../../images/header/icon-menu.svg";
import CartIcon from "../../images/header/icon-cart.svg";
import AvatarImage from "../../images/header/image-avatar.png";
import CartInfo from "./body/cartInfo";
import NavContent from "./NavContent";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCartInfo, setShowCartInfo] = useState(false);

  const handleMenuDisplay = () => {
    setShowMenu(!showMenu);
  };

  const handleCartClick = () => {
    setShowCartInfo(!showCartInfo);
  };

  const handleCloseCart = () => {
    setShowCartInfo(false);
  };

  return (
    <header className="border-y-4 flex items-center justify-between p-4 pr-8 md:p-8 relative">
      {/* Logo and Brand name */}
      <div className="flex items-center">
        <img
          className="w-8 h-8 mr-4 cursor-pointer pt-1 hover:opacity-85 transition-opacity md:hidden duration-300"
          src={MenuIcon}
          alt=""
          onClick={handleMenuDisplay}
        />
        <p className="text-3xl font-bold lowercase">Sneakers</p>
      </div>

      {/* NavContent */}
      <NavContent isOpen={showMenu} handleMenuDisplay={handleMenuDisplay} />

      {/* Cart and Avatar */}
      <div className="flex relative items-center px-2 w-[15%] justify-evenly">
        <img
          src={CartIcon}
          alt="Cart"
          className="mr-2 cursor-pointer"
          onClick={handleCartClick}
        />

        <img
          src={AvatarImage}
          alt="Avatar"
          className="object-cover w-10 h-10 cursor-pointer"
        />
      </div>

      {/* Conditionally render CartInfo */}
      {showCartInfo && <CartInfo handleClose={handleCloseCart} />}
    </header>
  );
};

export default Header;
