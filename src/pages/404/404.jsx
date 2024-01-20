import React from 'react';
import pageNotFound from '../../../public/svg/404.svg';

export const Page404 = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={pageNotFound} alt="Page not found" />
    </div>
  );
};
