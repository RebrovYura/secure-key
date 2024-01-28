import React from 'react';
import { Link } from 'react-router-dom';

export const StyledButton = ({ text, styles, link, onClick }) => {
  return (
    <Link to={link}>
      <button className={styles} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};
