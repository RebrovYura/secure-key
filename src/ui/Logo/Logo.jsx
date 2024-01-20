import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../../public/svg/icons/logo.svg';

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-center gap-x-[7px]">
          <img src={logoIcon} alt="Logo icon" className="w-[35px]" />
          <span className="font-semibold text-[24px] tracking-[2.16px] text-secondary">
            SecureKey
          </span>
        </div>
      </Link>
    </div>
  );
};
