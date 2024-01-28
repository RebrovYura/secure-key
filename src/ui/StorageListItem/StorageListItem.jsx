import React from 'react';
import { Link } from 'react-router-dom';
import lock from '../../../public/svg/icons/lock.svg';
import arrow_right from '../../../public/svg/icons/arrow_right.svg';

export const StorageListItem = ({ url, label }) => {
  return (
    <Link
      to={url}
      className="flex justify-between items-center bg-input p-[15px] rounded-[5px] hover:bg-accent transition-colors hover:text-primary"
    >
      <div className="flex gap-x-[10px]">
        <img src={lock} alt="Icon" className="w-[25px]" />
        <span>{label}</span>
      </div>
      <img src={arrow_right} alt="Arrow right" className="w-[25px]" />
    </Link>
  );
};
