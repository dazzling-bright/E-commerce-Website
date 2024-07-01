

import React, { useState } from 'react';
import MenuIcon from '../../images/header/icon-menu.svg';
import CartIcon from '../../images/header/icon-cart.svg';
import AvatarImage from '../../images/header/image-avatar.png';
import MenuClose from '../../images/header/icon-close.svg';

const NavContent = ({ isOpen, handleMenuDisplay }) => {
  const listItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <aside
      className={`absolute z-50 w-[50vh] p-12 bg-white left-0 top-0 h-screen shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
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

function Header() {
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
        <img src={AvatarImage} alt="Avatar" className="object-cover w-10 h-10 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
