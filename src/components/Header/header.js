import React, { useState } from "react";
import MenuIcon from "../../images/header/icon-menu.svg";
import CartIcon from "../../images/header/icon-cart.svg";
import AvatarImage from "../../images/header/image-avatar.png";

import NavContent from "./NavContent";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuDisplay = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex items-center justify-between p-2 relative">
      {/* Logo and Brand name */}
      <div className="flex items-center">
        <img
          className="mr-2 cursor-pointer pt-1 hover:opacity-85 transition-opacity duration-300"
          src={MenuIcon}
          alt=""
          onClick={handleMenuDisplay}
        />
        <p className="text-3xl font-bold lowercase">Sneakers</p>
      </div>

      {/* NavContent */}
      <NavContent isOpen={showMenu} handleMenuDisplay={handleMenuDisplay} />

      {/* Cart and Avatar */}
      <div className="flex items-center px-2 w-[20%] justify-between">
        <img src={CartIcon} alt="Cart" className="mr-2 cursor-pointer" />
        <img
          src={AvatarImage}
          alt="Avatar"
          className="object-cover w-10 h-10 cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Header;
