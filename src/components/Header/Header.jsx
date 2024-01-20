import React from 'react';
import { Logo, StyledButton } from '../../ui';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[10px]">
      <Logo />
      <nav className="font-normal text-[18px] flex items-center gap-x-[15px]">
        <Link to="/">Home</Link>
        <Link to="/">Storage</Link>
      </nav>
      <div className="flex items-center gap-x-[20px]">
        <StyledButton text="Sign In" styles="btn-ghost" link="/signin" />
        <StyledButton text="Sign Up" styles="btn-solid" link="/signup" />
      </div>
    </div>
  );
};

export default Header;
