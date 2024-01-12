import React from 'react';

const Footer = () => {
  return (
    <div className="w-full py-[18px] flex justify-center text-secondary">
      <p className="tracking-[1.44px] font-semibold">
        SecureKey {new Date().getFullYear()} | All Rights reserved
      </p>
    </div>
  );
};

export default Footer;
