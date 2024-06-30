import React from 'react';


import MenuIcon from '../../images/header/icon-menu.svg';
import CartIcon from '../../images/header/icon-cart.svg';
import AvatarImage from '../../images/header/image-avatar.png';

function Header() {
  return (
    <header className="flex items-center justify-between p-2">
      {/* Logo and Brand name */}
      <div className="flex items-center">
        <img className="mr-2 cursor-pointer pt-1" src={MenuIcon} alt="Menu" />
        <p className="text-2xl font-bold">Sneakers</p>
      </div>

      {/* Cart and Avatar */}
      <div className='flex items-center px-2 '>
        <img  src={CartIcon} alt="Cart" className='mr-2'/>
        <img  src={AvatarImage} alt="Avatar" className='object-cover w-10 h-10' />
      </div>
    </header>
  );
}

export default Header;
