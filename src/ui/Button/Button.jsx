import React from 'react';
import { StyledButton } from './styles/Button.styled';

export const Button = ({ text, link }) => {
  return <StyledButton href={link}>{text}</StyledButton>;
};
