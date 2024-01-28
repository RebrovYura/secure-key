import React from 'react';
import { Frame, StyledButton } from '../../ui';
import homeImage from '../../../public/svg/home.svg';

export const Home = () => {
  const isAuth = false;

  return (
    <div className="flex justify-around items-center flex-auto">
      <div className="max-w-[350px]">
        <h1 className="font-extrabold text-secondary text-[40px]">
          Welcome to your SecureKey!
        </h1>
        <p className="text-[18px] py-[20px] text-secondary">
          You no longer need to remember and store everything in your head.
          SecureKey allows you to store all your sensitive data in one safe and
          secret place. ✌️
        </p>
        {isAuth ? (
          <StyledButton link="/storage" styles="btn-solid" text="Get Started" />
        ) : (
          <StyledButton link="/signin" styles="btn-solid" text="Get Started" />
        )}
      </div>
      <Frame content={<img src={homeImage} alt="Home image" />} />
    </div>
  );
};
