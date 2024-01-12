import React from 'react';
import Footer from '../components/Footer/Footer';

const RootLayout = ({ children }) => {
  return (
    <div>
      <div className="max-w-[960px] mx-auto bg-gray-50 py-[15px] font-inter">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
