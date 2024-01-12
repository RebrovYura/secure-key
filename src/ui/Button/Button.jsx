import React from 'react';
import { Link } from 'react-router-dom';

const StyledButton = ({ text, styles, link }) => {
  return (
    <Link to={link}>
      <button className={styles}>{text}</button>
    </Link>
  );
};

export default StyledButton;
