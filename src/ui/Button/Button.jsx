import React from 'react';
import { Link } from 'react-router-dom';

export const StyledButton = ({ text, styles, link }) => {
  return (
    <Link to={link}>
      <button className={styles}>{text}</button>
    </Link>
  );
};
