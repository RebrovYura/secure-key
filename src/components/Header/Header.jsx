import React from 'react';
import { Logo, StyledButton } from '../../ui';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectisAuth } from '../../redux/slices/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectisAuth);

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className="flex justify-between items-center px-[10px]">
      <Logo />
      <nav className="font-normal text-[18px] text-secondary flex items-center gap-x-[15px]">
        {isAuth && (
          <>
            <Link to="/" className="link text-[16px]">
              Home
            </Link>
            <Link to="/storage" className="link text-[16px]">
              Storage
            </Link>
          </>
        )}
      </nav>
      <div className="flex items-center gap-x-[20px]">
        {isAuth ? (
          <>
            <StyledButton text="Add password" styles="btn-outline" link="/" />
            <StyledButton
              text="Logout"
              styles="btn-solid"
              link="/"
              onClick={onClickLogout}
            />
          </>
        ) : (
          <>
            <StyledButton text="Sign In" styles="btn-ghost" link="/signin" />
            <StyledButton text="Sign Up" styles="btn-outline" link="/signup" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
