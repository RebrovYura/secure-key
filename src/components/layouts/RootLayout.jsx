import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -30 },
};

const RootLayout = ({ children }) => {
  return (
    <div className="max-w-[1050px] mx-auto py-[20px] font-inter flex flex-col min-h-screen">
      <Header />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        className="flex-auto flex justify-center"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default RootLayout;
